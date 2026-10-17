@echo off
title Deploy Tharshini K Portfolio to Vercel
color 0B
echo =====================================================================
echo          THARSHINI K - PORTFOLIO DEPLOYMENT TO VERCEL
echo =====================================================================
echo.
cd /d "%~dp0"
set "PATH=C:\Program Files\nodejs;%AppData%\npm;%PATH%"

echo [1/2] Connecting to Vercel...
echo ---------------------------------------------------------------------
echo If asked to log in:
echo   1. Choose your login method (GitHub or Email)
echo   2. Complete the quick verification in your browser
echo   3. Vercel will immediately deploy and generate your .vercel.app link!
echo ---------------------------------------------------------------------
echo.

"C:\Program Files\nodejs\node.exe" "%AppData%\npm\node_modules\vercel\dist\vc.js" --prod

echo.
echo =====================================================================
echo [2/2] Deployment finished!
echo Check your production URL above (e.g., https://tharshini-portfolio.vercel.app)
echo =====================================================================
echo.
pause
