@echo off
echo Activating Virtual Environment for Scoresheet Backend API...
echo.

REM Check if virtual environment exists
if not exist "venv\Scripts\activate.bat" (
    echo ERROR: Virtual environment not found!
    echo Please run setup.bat first to create the virtual environment.
    pause
    exit /b 1
)

REM Activate virtual environment
call venv\Scripts\activate.bat
if errorlevel 1 (
    echo ERROR: Failed to activate virtual environment
    pause
    exit /b 1
)

echo Virtual environment activated successfully!
echo You can now run: python run.py
echo Or use: start.bat
echo.
echo To deactivate, simply type: deactivate
echo.
