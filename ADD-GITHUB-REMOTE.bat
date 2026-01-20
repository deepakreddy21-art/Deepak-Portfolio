@echo off
title Add GitHub Remote
color 0A
cls

REM Change to script directory
cd /d "%~dp0"

echo ========================================
echo   Add GitHub Remote Repository
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
    if %ERRORLEVEL% NEQ 0 (
        echo ERROR: Failed to initialize git!
        pause
        exit /b 1
    )
    echo Git repository initialized!
    echo.
)

REM Check if remote already exists
echo Checking for existing remote...
call git remote get-url origin >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo.
    echo Remote 'origin' already exists:
    call git remote -v
    echo.
    set /p UPDATE="Do you want to update it? (Y/N): "
    if /i "%UPDATE%"=="Y" (
        call git remote set-url origin https://github.com/deepakreddy21-art/deepak-portfolio.git
        if %ERRORLEVEL% EQU 0 (
            echo Remote URL updated successfully!
        ) else (
            echo ERROR: Failed to update remote!
            pause
            exit /b 1
        )
    ) else (
        echo Remote not changed.
        pause
        exit /b 0
    )
) else (
    echo No remote found. Adding GitHub remote...
    call git remote add origin https://github.com/deepakreddy21-art/deepak-portfolio.git
    if %ERRORLEVEL% EQU 0 (
        echo Remote added successfully!
    ) else (
        echo ERROR: Failed to add remote!
        pause
        exit /b 1
    )
)

echo.
echo ========================================
echo   Current Remote Configuration:
echo ========================================
call git remote -v
echo.
echo ========================================
echo   SUCCESS! GitHub remote is configured.
echo ========================================
echo.
echo Next steps:
echo 1. Run PUSH-TO-GITHUB.bat to push your code
echo 2. Or manually run: git add . && git commit -m "message" && git push -u origin main
echo.
pause
