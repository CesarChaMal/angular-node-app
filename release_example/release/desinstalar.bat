echo off
rem echo on
if "%OS%" == "Windows_NT" setlocal
rem ---------------------------------------------------------------------------
rem Desinstalar como un servicio de windows
rem
rem ---------------------------------------------------------------------------

set CURRENT_DIR=%cd%
if not "%APP_HOME%" == "" goto gotHome
set APP_HOME=%CURRENT_DIR%
if exist "%APP_HOME%" goto okHome
cd ..
set APP_HOME=%cd%
cd %CURRENT_DIR%
:gotHome
if exist "%APP_HOME%" goto okHome
echo The APP_HOME environment variable is not defined correctly
echo This environment variable is needed to run this program
goto end
:okHome

set APP_EXECUTABLE="%APP_HOME%\server.js"
set NODE_HOME="%PROGRAMFILES%\nodejs"
set NODE_EXECUTABLE="%NODE_HOME%\node.exe"
set MONGO_HOME="%PROGRAMFILES%\MongoDB\Server\4.2"
set MONGO_EXECUTABLE="%MONGO_HOME%\bin\mongo.exe"

rem Check that target executable exists
if exist "%APP_EXECUTABLE%" goto uninstallService
echo Cannot find %APP_EXECUTABLE%
echo This file is needed to run this program
goto end

:uninstallService
cd %APP_HOME%
rem uninstall as a windows service
call qckwinsvc --uninstall --name "node-app" --script "server.js"
ping -n 6 127.0.0.1 > nul
goto deleteShortcut

:deleteShortcut
del "%USERPROFILE%\Desktop\Node-App.url"
echo done
ping -n 6 127.0.0.1 > nul
goto end

:end
exit
