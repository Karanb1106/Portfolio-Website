# 🚀 Professional Portfolio Website

> **Top 1% aesthetic portfolio built with MERN Stack** — dark theme, aurora gradients, smooth animations, and a fully functional contact form backed by MongoDB.

## ✨ Features

- **🎨 Aesthetic Design** — Deep dark theme with blue/violet/cyan aurora gradients
- **⚡ Particle Animation** — Canvas-based animated particle network in Hero
- **🖱️ Custom Cursor** — Smooth magnetic cursor effect
- **📊 Scroll Progress** — Gradient scroll indicator
- **⌨️ Type Animation** — Rotating role titles with typewriter effect
- **🌊 Smooth Animations** — Scroll-triggered fade/slide animations
- **📱 Fully Responsive** — Mobile-first, works on all screen sizes
- **📋 Skills with Progress Bars** — Animated skill level bars
- **🗂️ Project Filtering** — Filter by category
- **📬 Contact Form** — Messages are saved to MongoDB, with optional email notifications
- **🔔 Toast Notifications** — Success/error feedback
- **✉️ Direct Contact** — Email and contact-section links
- **🏃 Tech Stack Marquee** — Infinite scrolling tech tags
- **📌 Smooth Scroll Nav** — Active section tracking

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js 18, CSS3, Framer concepts |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Email | Resend API |
| Animations | react-type-animation, react-intersection-observer |
| Styling | Custom CSS with CSS Variables |

## 📁 Project Structure

```
PortfolioWebsite/
├── client/                   # React Frontend
│   ├── public/
│   │   └── profile.jpg       # Profile photo used by Hero and About
│   └── src/
│       ├── components/
│       │   ├── Navbar.js / .css
│       │   ├── Hero.js / .css        # Particle canvas + profile
│       │   ├── About.js / .css
│       │   ├── Skills.js / .css      # Progress bars + marquee
│       │   ├── Projects.js / .css    # Filterable project cards
│       │   ├── Experience.js / .css  # Timeline
│       │   ├── Education.js / .css
│       │   ├── Achievements.js / .css
│       │   ├── Contact.js / .css     # Form → MongoDB
│       │   ├── Footer.js / .css
│       │   ├── Loader.js / .css      # Loading screen
│       │   ├── CustomCursor.js / .css
│       │   └── ScrollProgress.js / .css
│       ├── data/
│       │   └── portfolioData.js      # ← UPDATE YOUR INFO HERE
│       ├── App.js
│       └── index.css                 # Global styles & CSS variables
├── server/
│   ├── index.js              # Express API + MongoDB
│   ├── package.json
│   └── .env                  # Configure your credentials
├── setup.bat                 # One-click setup
├── start-dev.bat             # Start dev servers
└── package.json
```

## 🚀 Quick Start

### Step 1: Add Your Files
The supplied profile photo is installed at `client/public/profile.png`, and the resume is available as `client/public/Karan_Bhavsar.pdf`.

### Step 2: Update Your Info
Open `client/src/data/portfolioData.js` and update:
- Personal info (name, email, phone, links)
- Skills and proficiency levels
- Projects (title, description, tech, GitHub/live links)
- Experience and education
- Achievements

### Step 3: Setup & Install
```bash
# Run the setup script (double-click setup.bat)
# OR manually:
npm install
cd server && npm install && cd ..
cd client && npm install && cd ..
```

### Step 4: Configure Environment
```bash
# Copy the example env file
cp server/.env.example server/.env

# Edit server/.env:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:3000
RESEND_API_KEY=re_...             # Optional: Resend API key for email notifications
OWNER_EMAIL=your_email@example.com # Inbox that should receive contact notifications
RESEND_FROM="Portfolio Website <onboarding@resend.dev>" # Optional: use your verified sender domain
```

### Step 5: Start Development
```bash
# Start both servers (double-click start-dev.bat)
# OR:
npm run dev
```
The backend loads environment variables from `server/.env`, including when `npm run dev` is started from the repository root. In local development, the contact form uses the CRA proxy to reach `http://localhost:5000`; in production, it uses `REACT_APP_API_URL`.

- 🌐 Frontend: http://localhost:3000
- 🔙 Backend: http://localhost:5000

## 🎨 Customization

### Colors
Edit `client/src/index.css` CSS variables:
```css
:root {
  --bg-primary: #05050f;        /* Main background */
  --accent-blue: #4f8ef7;       /* Primary accent */
  --accent-violet: #8b5cf6;     /* Secondary accent */
  --accent-cyan: #22d3ee;       /* Tertiary accent */
  --gradient-primary: linear-gradient(135deg, #4f8ef7 0%, #8b5cf6 50%, #ec4899 100%);
}
```

### Add More Projects
In `portfolioData.js`, add to the `projects` array:
```js
{
  id: 7,
  title: "My New Project",
  description: "Project description...",
  tech: ["React", "Node.js"],
  github: "https://github.com/...",
  live: "https://...",
  featured: true,
  category: "Full Stack",  // 'Full Stack' | 'Frontend' | 'AI/ML'
  gradient: "from-blue-500 to-violet-600"
}
```

## 🌍 Deployment

### Vercel (Frontend)
```bash
cd client
npm run build
# Deploy the build/ folder to Vercel
```
Set the frontend build environment variable `REACT_APP_API_URL` to the backend's public base URL (for example, `https://your-api.onrender.com`) and redeploy after changing it. The URL must not include `/api`.

### Railway / Render (Backend)
```bash
# Set environment variables in dashboard
# Deploy server/ folder
```
Configure the backend service with `server` as its root directory, `npm install` as its build command, and `npm start` as its start command. Set:

- `MONGODB_URI` to your MongoDB Atlas connection string; it is required in production. The local MongoDB fallback is only for development.
- `CLIENT_URL` to the exact public frontend origin, such as `https://your-site.onrender.com`.
- `RESEND_API_KEY` and `OWNER_EMAIL` for email notifications. Set `RESEND_FROM` if you have verified a sender domain in Resend.

Use a valid Atlas URI with one slash before the database path (for example, `mongodb+srv://<user>:<encoded-password>@<cluster-host>/portfolio?retryWrites=true&w=majority`). The backend normalizes the database path to `portfolio` while preserving URI query options. In Atlas, confirm the database user has read/write access and the Render service can reach the cluster through Network Access.

Check `https://your-api.onrender.com/api/health` after deployment. `databaseStatus` must be `connected` for contact messages to save. Email notifications are separate; an email delivery issue does not prevent a message from being saved.

### MongoDB Atlas (Database)
```
1. Create free cluster at mongodb.com/atlas
2. Get connection string
3. Update MONGODB_URI in server/.env
```

## 📧 Contact Form Setup (Email Notifications)

1. Create a Resend account and generate an API key.
2. Set `RESEND_API_KEY` and `OWNER_EMAIL` in `server/.env` (and in the deployed backend's environment settings).
3. For production delivery, verify your sending domain in Resend and set `RESEND_FROM` to a sender address on that domain. Resend's `onboarding@resend.dev` sender is suitable for testing and has account restrictions.
4. Restart the backend after editing `.env`:
   ```
   cd server
   npm run dev
   ```

The contact form always saves submitted messages to MongoDB. If Resend is not configured or rejects the request, the site reports that the email notification was not delivered instead of showing a false send confirmation. Check `http://localhost:5000/api/health`: `emailNotificationsConfigured` should be `true` after setting `RESEND_API_KEY` and `OWNER_EMAIL`. Never paste the API key into the website or chat.

---

**Made with ❤️ and ☕ | MERN Stack Portfolio**
