
// all imports are defined below

// importing path
const path = require('path');

// importing the splashMainWindow for splash application
const {SplashMainWindow} = require('components');

// importing the toolset for splash application
const {Toolset} = require('toolset');

// ----------END OF IMPORTS---------------------



// all global variables are mentioned below

var indexHtmlFilePath = path.resolve('./components/html/index.html')

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
}}

// starting the application
mainWindow.start()

// loading html file
mainWindow.loadHtmlFile(indexHtmlFilePath);   

// enabling shortcuts for the main window
mainWindow.enableShortcuts();

