// all imports are mentioned below

// importing electron modules
const { app, BrowserWindow, Menu, MenuItem } = require("electron");

// importing the path module
const path = require("path");

// importing toolset
const { Toolset } = require(path.join(__dirname, "toolset"));

// creating toolset object
const toolset = new Toolset(path.resolve("./components/html/index.html"));

// importing the stick to bottom package to make splash
// window bottom-most only needed in windows
const { stickToBottom } = require("electron-bottom-window");

// ------------END OF IMPORTS------------------

// class to create splash main window and initialize electron
class SplashMainWindow {
  constructor() {
    // to store if electron is initialized
    this.appReady = false;

    // to store list of functions that were called in main.js before initializing electron
    this.execList = [];

    // to store main window configurations
    this.mainWindowConfig = {
      type: "desktop", //this is to counter the skipTaskbar not working in linux
      frame: false,
      skipTaskbar: true, //does not work in linux
      fullscreen: false,
      roundedCorners: false,
      center: true,
      movable: false,
      disableHtmlFullscreenWindowResize: true, //cannot be set to full-screen by the user
    };

    // function that will log when the production mode is running
    this.showProductionInfo();
  }

  // function to append execList with function that need to be called after initializing electron
  appendExecList(funcName, parameter) {
    this.execList = [
      ...this.execList,
      { functionName: funcName, parameter: parameter },
    ];
    console.log("Exec list append successful..");
    console.log(this.execList);
  }

  // function to start electron app after initialization
  start() {
    app.setLoginItemSettings({
      openAtLogin: true,
    });

    app.whenReady().then(() => {
      const { screen } = require("electron");
      console.log("Electron initialization finished..");
      this.appReady = true;

      // creating main window
      const mainWindow = new BrowserWindow({
        ...this.mainWindowConfig,
        height: screen.getPrimaryDisplay().workAreaSize.height - 5,
        width: screen.getPrimaryDisplay().workAreaSize.width,
        resizable: false,
        closable: false,
        minimizable: false,
      });
      try {
        if (toolset.config.openDevTools === true) {
          try {
            mainWindow.webContents.openDevTools();
          } catch (err) {
            console.log("Could not open dev tools..");
          }
        }
      } catch (err) {
        console.log("Error reading openDevTools property..");
      }
      console.log("Main window created..");

      // Stick window to bottom
      // if (toolset.platform != 'linux') {

      stickToBottom(mainWindow);
      // }

      // executing all the functions that were called before electron initialization
      for (var i = 0; i < this.execList.length; i++) {
        const func = this.execList[i].functionName;
        if (this.execList[i].parameter) {
          func(this.execList[i].parameter, mainWindow);
        } else {
          func(mainWindow);
        }
      }

      // sometimes the window icon appears on taskbar when it loads slowly..
      mainWindow.setSkipTaskbar(true);
    });
  }

  // function to enable shortcuts
  enableShortcuts(mainWindow) {
    const shortcuts = () => {
      // creating menu for main window to enable shortcuts
      // this menu is invisible

      const menu = new Menu();

      menu.append(
        new MenuItem({
          label: "Shortcuts",
          submenu: [
            {
              role: "refresh",
              label: "Refresh",
              accelerator: process.platform === "darwin" ? "Cmd+R" : "Ctrl+R",
              click: () => {
                mainWindow.loadFile(toolset.importConfig().htmlFile);
                console.log("Refresh");
              },
            },

            {
              role: "qu.it", //quit
              label: "close",
              accelerator: "Ctrl+Q",
              click: () => {
                console.log("Quit");
                app.exit();
              },
            },

            {
              role: "openDevTools",
              label: "DevTools",
              accelerator: process.platform === "darwin" ? "Cmd+D" : "Ctrl+D",
              click: () => {
                console.log("Open dev tools");
                if (toolset.config.openDevTools === false) {
                  toolset.config.openDevTools = true;
                  mainWindow.webContents.openDevTools();
                } else {
                  toolset.config.openDevTools = false;
                  mainWindow.webContents.closeDevTools();
                }
              },
            },
          ],
        })
      );

      Menu.setApplicationMenu(menu);

      console.log("Shortcuts enabled for main window..");
    };

    try {
      if (this.appReady) {
        shortcuts();
      } else {
        this.appendExecList(this.enableShortcuts, false);
      }
    } catch (err) {
      shortcuts();
    }
  }

  // function to load html file
  loadHtmlFile(filePath, mainWindow) {
    try {
      if (this.appReady === true) {
        mainWindow.loadFile(filePath + "");
        console.log("Successfully loaded " + filePath);
      } else {
        this.appendExecList(this.loadHtmlFile, filePath);
      }
    } catch (err) {
      mainWindow.loadFile(filePath + "");
      console.log("Successfully loaded " + filePath);
    }
  }

  // ! The code below is for production mode
  showProductionInfo(dummy) {
    // @param dummy is used just as a dummy to prevent errors.
    try {
      if (this.appReady == true) {
        if (app.isPackaged) {
        } else {
          console.log("Running Production Code.. ");
        }
      } else {
        this.appendExecList(this.showProductionInfo, "null");
      }
    } catch (err) {
      if (app.isPackaged == true) {
      } else {
        console.log("Running Production Code..");
      }
    }
  }
}

module.exports = { SplashMainWindow };
