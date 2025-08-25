@echo off
echo 🚀 Portfolio Deployment Script
echo ==============================

REM Check if we're in the right directory
if not exist package.json (
    echo ❌ Error: Please run this script from the root directory of your portfolio project
    pause
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm run install-all

REM Build the project
echo 🔨 Building the project...
call npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo.
    echo 🌐 Ready for deployment!
    echo.
    echo Next steps:
    echo 1. For GitHub Pages: Push your changes to GitHub
    echo    git add .
    echo    git commit -m "Ready for deployment"
    echo    git push origin main
    echo.
    echo 2. For Vercel: Run 'vercel --prod' or import via dashboard
    echo.
    echo 📁 Build files are in: client/build/
) else (
    echo ❌ Build failed! Check the errors above.
    pause
    exit /b 1
)

pause
