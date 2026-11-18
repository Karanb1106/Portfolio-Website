const fs = require('fs');
const src = 'C:/Users/HP/.gemini/antigravity/brain/eaa2363e-66ab-4b5a-a71b-b0d94b380bb0/.user_uploaded/media_1794988954086_963f318d.pdf';
const dest = 'E:/myData/PortfolioWebsite/client/public/Karan_Bhavsar.pdf';
fs.copyFileSync(src, dest);
console.log('✅ Karan_Bhavsar.pdf copied to client/public/');

