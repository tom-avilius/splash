
// * Handling squirrel startup

if (require('electron-squirrel-startup')) return;

// this should be placed at top of main.js to handle setup events quickly
if (handleSquirrelEvent()) {
  // squirrel event handled and app will exit in 1000ms, so don't do anything else
  return;
}

function handleSquirrelEvent() {
  if (process.argv.length === 1) {
    return false;
  }

  const ChildProcess = require('child_process');
  const path = require('path');

  const appFolder = path.resolve(process.execPath, '..');
  const rootAtomFolder = path.resolve(appFolder, '..');
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  const exeName = path.basename(process.execPath);

  const spawn = function(command, args) {
    let spawnedProcess, error;

    try {
      spawnedProcess = ChildProcess.spawn(command, args, {detached: true});
    } catch (error) {}

    return spawnedProcess;
  };

  const spawnUpdate = function(args) {
    return spawn(updateDotExe, args);
  };

  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case '--squirrel-install':
    case '--squirrel-updated':
      // Optionally do things such as:
      // - Add your .exe to the PATH
      // - Write to the registry for things like file associations and
      //   explorer context menus

      // Install desktop and start menu shortcuts
      spawnUpdate(['--createShortcut', exeName]);

      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-uninstall':
      // Undo anything you did in the --squirrel-install and
      // --squirrel-updated handlers

      // Remove desktop and start menu shortcuts
      spawnUpdate(['--removeShortcut', exeName]);

      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-obsolete':
      // This is called on the outgoing version of your app before
      // we update to the new version - it's the opposite of
      // --squirrel-updated

      app.quit();
      return true;
  }
};

// * ----------End of Squirrel startup---------


// all imports are defined below

// importing path
const path = require('path');

// importing the splashMainWindow for splash application
const {SplashMainWindow} = require(path.join(__dirname, "components/js/components"));

// importing the toolset for splash application
const {Toolset} = require(path.join(__dirname, "components/js/toolset"));

// ----------END OF IMPORTS---------------------



// all global variables are mentioned below

// var indexHtmlFilePath = path.resolve(__dirname + '/components/html/index.html').replaceAll('\\', '/');
// var indexHtmlFilePath = __dirname.replaceAll('\\', '/');



var indexHtmlFilePath = '';

// creating splashToolset object
const splashToolset = new Toolset(indexHtmlFilePath);

// creating splashMainWindow object
const mainWindow = new SplashMainWindow();

// -----------END OF GLOBAL VARIABLES--------------------

indexHtmlFilePath = splashToolset.config.htmlFile;

// setting transparent main window
mainWindow.mainWindowConfig = {...mainWindow.mainWindowConfig, transparent: true};

// adding preload script for the main window and setting sandbox to false
mainWindow.mainWindowConfig = {...mainWindow.mainWindowConfig, webPreferences: {
    preload: path.join(__dirname, "components/preloads/mainPreload.js"),
    sandbox: false,
    webSecurity: false,
}}

// starting the application
mainWindow.start()

// loading html file
mainWindow.loadHtmlFile(indexHtmlFilePath);   

// enabling shortcuts for the main window
mainWindow.enableShortcuts();


