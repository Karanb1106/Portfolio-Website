const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// MongoDB Connection
const mongoUri = (process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .trim()
  .replace(/^(mongodb(?:\+srv)?:\/\/[^/?#]+)\/{2,}/i, '$1/');

mongoose.connect(mongoUri)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err.message));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 120 },
  email: { type: String, required: true, trim: true, maxlength: 254 },
  subject: { type: String, required: true, trim: true, maxlength: 200 },
  message: { type: String, required: true, trim: true, maxlength: 5000 },
  createdAt: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', contactSchema);

const hasSmtpCredentials = () => {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  return Boolean(user && pass && !user.startsWith('your_') && !pass.startsWith('your_'));
};

const smtpTransporter = hasSmtpCredentials()
  ? nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER.trim(),
        pass: process.env.SMTP_PASS.replace(/\s+/g, '')
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000
    })
  : null;

let emailNotificationsStatus = smtpTransporter ? 'checking' : 'not_configured';

if (smtpTransporter) {
  smtpTransporter.verify()
    .then(() => {
      emailNotificationsStatus = 'ready';
      console.log('✅ Email notifications ready');
    })
    .catch((error) => {
      emailNotificationsStatus = error.code === 'EAUTH' || error.responseCode === 535
        ? 'invalid_credentials'
        : 'unavailable';
      console.warn('❌ Email notification setup failed:', {
        code: error.code,
        responseCode: error.responseCode,
        command: error.command
      });
    });
} else {
  console.warn('⚠️ Email notifications are not configured. Set SMTP_USER and SMTP_PASS in server/.env.');
}

const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}[character]));

// Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Portfolio API running 🚀',
    emailNotificationsConfigured: hasSmtpCredentials(),
    emailNotificationsStatus
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (![name, email, subject, message].every((field) => typeof field === 'string' && field.trim())) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    if (name.trim().length > 120 || email.trim().length > 254 || subject.trim().length > 200 || message.trim().length > 5000) {
      return res.status(400).json({ success: false, message: 'One or more fields exceed the allowed length' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address' });
    }

    const contact = new Contact({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim()
    });
    await contact.save();

    let emailSent = false;
    let emailStatus = 'not_configured';
    if (smtpTransporter) {
      try {
        await smtpTransporter.sendMail({
          from: process.env.SMTP_USER.trim(),
          to: process.env.OWNER_EMAIL || process.env.SMTP_USER.trim(),
          replyTo: contact.email,
          subject: `Portfolio Contact: ${contact.subject}`,
          text: `New message from ${contact.name} (${contact.email})\n\n${contact.message}`,
          html: `<h3>New message from ${escapeHtml(contact.name)}</h3><p><b>Email:</b> ${escapeHtml(contact.email)}</p><p><b>Message:</b><br>${escapeHtml(contact.message).replace(/\n/g, '<br>')}</p>`
        });
        emailSent = true;
        emailStatus = 'sent';
        emailNotificationsStatus = 'ready';
      } catch (error) {
        emailStatus = error.code === 'EAUTH' || error.responseCode === 535
          ? 'invalid_credentials'
          : 'failed';
        emailNotificationsStatus = emailStatus === 'invalid_credentials' ? 'invalid_credentials' : 'unavailable';
        console.error('Contact email notification failed:', {
          code: error.code,
          responseCode: error.responseCode,
          command: error.command
        });
      }
    }

    res.status(emailSent ? 200 : 202).json({
      success: true,
      emailSent,
      emailStatus,
      message: emailSent
        ? 'Message sent successfully! I\'ll get back to you soon.'
        : emailStatus === 'not_configured'
          ? 'Your message was saved, but email notifications are not configured. Add a real Gmail App Password to server/.env and restart the server.'
          : emailStatus === 'invalid_credentials'
            ? 'Your message was saved, but Google rejected the SMTP login. Update SMTP_USER and SMTP_PASS with your Gmail address and its 16-character App Password, then restart the server.'
            : 'Your message was saved, but Gmail could not deliver the notification. Check the SMTP connection and try again.'
    });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
