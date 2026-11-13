@echo off
setlocal
set "EDGE=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not exist "%EDGE%" set "EDGE=C:\Program Files\Microsoft\Edge\Application\msedge.exe"
set "PS=%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe"
if not exist "%PS%" set "PS=powershell.exe"
set "KIOSK_PROFILE=%LOCALAPPDATA%\OurLeadersKiosk"
start "" "%EDGE%" --kiosk "file:///%~dp0index.html" --edge-kiosk-type=fullscreen --user-data-dir="%KIOSK_PROFILE%" --no-first-run --disable-features=msEdgeEnterpriseModePolicies --autoplay-policy=no-user-gesture-required

rem The app cannot close a window it did not open, so its close button flags
rem the window title and this watcher ends the kiosk. The kiosk runs in its own
rem profile, which is what lets the watcher end that window and nothing else.
if exist "%~dp0tools\kiosk-watch.ps1" (
  "%PS%" -NoProfile -ExecutionPolicy Bypass -WindowStyle Hidden -File "%~dp0tools\kiosk-watch.ps1" -ProfileDir "%KIOSK_PROFILE%"
)
endlocal
