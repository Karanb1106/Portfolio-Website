@echo off
echo ============================================
echo   Portfolio Website - Setup Script
echo ============================================
echo.

echo [1/4] Installing root dependencies...
npm install
echo.

echo [2/4] Installing server dependencies...
cd server
npm install
cd ..
echo.

echo [3/4] Installing client dependencies...
cd client
npm install
cd ..
echo.

echo [4/4] Setting up environment...
if not exist "server\.env" (
    copy "server\.env.example" "server\.env"
    echo Created .env file. Please configure it with your credentials.
)
echo.

echo Copying profile photo to client...
if exist "..\..\Users\HP\.gemini\antigravity\brain\eaa2363e-66ab-4b5a-a71b-b0d94b380bb0\.user_uploaded\media_1794076433686_0759413e.jpg" (
    copy "..\..\Users\HP\.gemini\antigravity\brain\eaa2363e-66ab-4b5a-a71b-b0d94b380bb0\.user_uploaded\media_1794076433686_0759413e.jpg" "client\public\profile.jpg"
    echo Profile photo copied!
)

echo.
echo ============================================
echo   Setup Complete!
echo ============================================
echo.
echo To start the development server:
echo   npm run dev
echo.
echo Or start separately:
echo   Server: cd server ^&^& npm run dev
echo   Client: cd client ^&^& npm start
echo.
pause

