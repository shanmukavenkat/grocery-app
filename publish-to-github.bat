@echo off
setlocal
title Publish Kirana Chitta to GitHub
echo ========================================================
echo   Publishing Telugu Groceries App to GitHub Pages
echo ========================================================
echo.
echo Step 1: Make sure you created a new repository on GitHub:
echo         https://github.com/new (Name: telugu-grocery-app, Public)
echo.
set /p REPO_URL="Enter your GitHub Repository URL (e.g., https://github.com/your-username/grocery-app.git): "

if "%REPO_URL%"=="" (
    echo Error: No URL entered. Exiting.
    pause
    exit /b
)

echo.
echo Setting remote origin to: %REPO_URL%
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo.
echo Pushing code to GitHub...
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================================
    echo SUCCESS! Code pushed to GitHub!
    echo.
    echo To get your FREE PUBLIC LINK:
    echo 1. Open your repository on GitHub.
    echo 2. Go to: Settings -> Pages (in the left sidebar)
    echo 3. Under 'Build and deployment' -> 'Branch':
    echo    Select 'main' and '/ (root)', then click Save.
    echo.
    echo Your public link will be live in 1-2 minutes at:
    echo https://^<your-username^>.github.io/grocery-app/
    echo ========================================================
) else (
    echo.
    echo Push failed. Please check your GitHub permissions or sign in.
)

pause
