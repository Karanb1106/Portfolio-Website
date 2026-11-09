const fs = require('fs');
const path = require('path');

const src = 'C:/Users/HP/.gemini/antigravity/brain/eaa2363e-66ab-4b5a-a71b-b0d94b380bb0/.user_uploaded/media_1794076433686_0759413e.jpg';
const dest = 'e:/myData/PortfolioWebsite/client/public/profile.jpg';

try {
  fs.copyFileSync(src, dest);
  console.log('SUCCESS: profile.jpg copied to client/public/');
} catch (e) {
  console.error('ERROR:', e.message);
}

