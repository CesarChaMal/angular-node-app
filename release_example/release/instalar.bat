echo off
rem echo on

rem msiexec.exe
rem /i means normal install
rem /qn quiet with no UI
rem /qb quiet with UI

if "%OS%" == "Windows_NT" setlocal
rem ---------------------------------------------------------------------------
rem Instalar como un servicio de windows
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
if exist "%APP_EXECUTABLE%" goto checkNode
echo Cannot find %APP_EXECUTABLE%
echo This file is needed to run this program
goto end

:checkNode
rem Check that node executable exists
if exist "%NODE_EXECUTABLE%" goto checkMongo
echo Cannot find %NODE_EXECUTABLE%
echo This file is needed to run this program
goto installNode

:installNode
cd %CURRENT_DIR%\installers
msiexec.exe /l*v nodinstall.log /i node-v12.13.0-x64.msi ^
INSTALLDIR=%NODE_HOME% /qn 
goto checkMongo

:checkMongo
rem Check that node executable exists
if exist "%MONGO_EXECUTABLE%" goto installQckwinsvc 
echo Cannot find %MONGO_EXECUTABLE%
echo This file is needed to run this program
goto installMongo

:installMongo
cd %CURRENT_DIR%\installers
msiexec.exe /l*v mdbinstall.log  /i mongodb-win32-x86_64-2012plus-4.2.1-signed.msi ^
INSTALLLOCATION=%MONGO_HOME% ^
ADDLOCAL="ServerService,Client" ^
SHOULD_INSTALL_COMPASS="0" /qn
goto installQckwinsvc 

:installQckwinsvc 
cd %APP_HOME%
rem install as a windows service
call npm install -g qckwinsvc
goto installDependencies

:installDependencies
rem install dependencies
call npm install
goto installAppAsAService

:installAppAsAService
call qckwinsvc --name "node-app" --description "Clientes" --script "server.js" --startImmediately
ping -n 6 127.0.0.1 > nul
goto createShortcut

:createShortcut
echo [InternetShortcut] > "%USERPROFILE%\Desktop\Node-App.url"
echo URL="http://localhost:3000" >> "%USERPROFILE%\Desktop\Node-App.url"
echo IconFile="%APP_HOME%/dist/favicon.ico" >> "%USERPROFILE%\Desktop\Node-App.url"
echo IconIndex=0 >> "%USERPROFILE%\Desktop\Node-App.url"
ping -n 6 127.0.0.1 > nul
goto openApp

:openApp
start "" "%USERPROFILE%\Desktop\Node-App.url"
echo done
ping -n 6 127.0.0.1 > nul
goto end

:end
exit
