@echo off
echo Starting Portfolio Development Server...
echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo.
start "Portfolio Backend" cmd /k "cd /d %~dp0server && npm run dev"
timeout /t 3
start "Portfolio Frontend" cmd /k "cd /d %~dp0client && npm start"

