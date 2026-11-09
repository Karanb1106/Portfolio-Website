// Run this from: E:\myData\PortfolioWebsite
// Command: node copy-assets.js

const fs = require('fs');
const path = require('path');

const photoSrc  = 'C:/Users/HP/.gemini/antigravity/brain/eaa2363e-66ab-4b5a-a71b-b0d94b380bb0/.user_uploaded/media_1794078720092_64fc6f32.jpg';
const photoDest = path.join(__dirname, 'client/public/profile.jpg');

const resumeSrc  = 'C:/Users/HP/.gemini/antigravity/brain/eaa2363e-66ab-4b5a-a71b-b0d94b380bb0/.user_uploaded/media_1794078684750_33e09c68.pdf';
const resumeDest = path.join(__dirname, 'client/public/resume.pdf');

try {
  fs.copyFileSync(photoSrc, photoDest);
  console.log('✅ profile.jpg copied to client/public/');
} catch (e) {
  console.error('❌ Photo copy failed:', e.message);
}

try {
  fs.copyFileSync(resumeSrc, resumeDest);
  console.log('✅ resume.pdf copied to client/public/');
} catch (e) {
  console.error('❌ Resume copy failed:', e.message);
}

