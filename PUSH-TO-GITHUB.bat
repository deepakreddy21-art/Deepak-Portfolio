@echo off
title Push Portfolio to GitHub
color 0A
cls

REM Change to script directory
cd /d "%~dp0"

echo ========================================
echo   Push Portfolio to GitHub
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Git is not installed or not in PATH!
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

echo Current directory: %CD%
echo.

REM Initialize git if not already initialized
if not exist ".git\" (
    echo Initializing git repository...
    call git init
    echo.
)

REM Check if remote exists and add/update it FIRST
echo Checking remote repository...
call git remote get-url origin >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Adding GitHub remote repository...
    call git remote add origin https://github.com/deepakreddy21-art/deepak-portfolio.git
    if %ERRORLEVEL% NEQ 0 (
        echo ERROR: Failed to add remote!
        pause
        exit /b 1
    )
    echo Remote added successfully!
) else (
    echo Remote already exists. Updating URL...
    call git remote set-url origin https://github.com/deepakreddy21-art/deepak-portfolio.git
    if %ERRORLEVEL% NEQ 0 (
        echo ERROR: Failed to update remote!
        pause
        exit /b 1
    )
    echo Remote updated successfully!
)
echo.

REM Show remote
echo Current remote:
call git remote -v
echo.
echo ========================================
echo   Remote added! Now adding files...
echo ========================================
echo.

REM Add all files
echo Adding all files...
call git add .
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Failed to add files!
    pause
    exit /b 1
)
echo Files added successfully!
echo.

REM Check git status
echo Checking status...
call git status --short
echo.

REM Commit changes
echo Committing changes...
call git commit -m "Update portfolio: SEO enhancements, What I Do section, UI improvements, and optimizations"
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: Commit failed. Maybe there are no changes to commit, or this is the first commit.
    echo Continuing anyway...
    echo.
)

REM Show remote
echo Current remote:
call git remote -v
echo.

REM Set branch to main
call git branch -M main
echo.

REM Push to GitHub
echo Pushing to GitHub...
echo Note: You may need to enter your GitHub credentials.
echo.
call git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo   SUCCESS! Code pushed to GitHub!
    echo ========================================
) else (
    echo.
    echo ========================================
    echo   Push failed. Possible reasons:
    echo   1. Authentication required
    echo   2. Network issues
    echo   3. Repository doesn't exist
    echo.
    echo   Try:
    echo   1. Create repository at: https://github.com/deepakreddy21-art/deepak-portfolio
    echo   2. Use GitHub Personal Access Token for authentication
    echo   3. Check your internet connection
    echo ========================================
)

echo.
pause
