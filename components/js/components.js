
// all imports are mentioned below

// importing electron modules
const { app, BrowserWindow, Menu, MenuItem} = require('electron');

const path = require('path');

// importing toolset
const {Toolset} = require(path.join(__dirname, "toolset"));

// ------------END OF IMPORTS------------------

// creating toolset object
const toolset = new Toolset(path.resolve('./components/html/index.html'));


// class to create splash main window and initialize electron
class SplashMainWindow {

    constructor() {

        // to store if electron is initialized
        this.appReady = false;

        // to store list of functions that were called in main.js before initializing electron 
        this.execList = [];

        // to store main window configurations
        this.mainWindowConfig = {
            type: 'desktop',  //this is to counter the skipTaskbar not working in linux
            frame: false,
            skipTaskbar: true,    //does not work in linux
            fullscreen: false,
            roundedCorners: false,
            center: true,
            movable: false,
            disableHtmlFullscreenWindowResize: true, //cannot be set to full-screen by the user
        };

    }


    // function to append execList with function that need to be called after initializing electron
    appendExecList(funcName, parameter) {

        this.execList = [...this.execList, {"functionName": funcName, "parameter": parameter}];
        console.log('Exec list append successful..');
        console.log(this.execList)
    }


    // function to start electron app after initialization
    start() {

        app.whenReady().then( () => {
            const { screen } = require('electron');
            console.log('Electron initialization finished..');
            this.appReady = true;

            // creating main window
            const mainWindow = new BrowserWindow({...this.mainWindowConfig, height: screen.getPrimaryDisplay().workAreaSize.height-5, width: screen.getPrimaryDisplay().workAreaSize.width, resizable: false,});
            try {
                if(toolset.config.openDevTools === true) {

                    try {
                        mainWindow.webContents.openDevTools();
                    } catch (err) {
    
                        console.log('Could not open dev tools..')
                    }
                }
            } catch (err) {

                console.log('Error reading openDevTools property..')
            }
            console.log('Main window created..')

            // executing all the functions that were called before electron initialization
            for(var i=0; i<this.execList.length; i++) {
                const func = this.execList[i].functionName;
                if(this.execList[i].parameter) {
                    func(this.execList[i].parameter, mainWindow)
                } else {
                    func(mainWindow);
                }
            }
        });
    }


    // function to enable shortcuts
    enableShortcuts(mainWindow) {

        const shortcuts = () => {
            // creating menu for main window to enable shortcuts
            // this menu is invisible

            const menu = new Menu();

            menu.append(new MenuItem({
                label: 'Shortcuts',
                submenu: [{
                    role: 'refresh',
                    label: 'Refresh',
                    accelerator: process.platform === 'darwin' ? 'Cmd+R' : 'Ctrl+R',
                    click: () => {
                        mainWindow.loadFile(toolset.importConfig().htmlFile);
                        console.log('Refresh');
                    },
                },

                {
                    role: 'quit',
                    label: 'close',
                    accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
                    click: () => console.log('Quit'),
                },
                
                {
                    role: 'openDevTools',
                    label: 'DevTools',
                    accelerator: process.platform === 'darwin' ? 'Cmd+D' : 'Ctrl+D',
                    click: () => {
                        console.log('Open dev tools')
                        if (toolset.config.openDevTools === false) {
                            toolset.config.openDevTools = true;
                            mainWindow.webContents.openDevTools();
                        } else {
                            toolset.config.openDevTools = false;
                            mainWindow.webContents.closeDevTools();
                        }
                    },
                },
            ]
            }))

            Menu.setApplicationMenu(menu);

            console.log('Shortcuts enabled for main window..')
        }

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
                mainWindow.loadFile(filePath +'');
                console.log('Successfully loaded ' +filePath);
            } else {
                this.appendExecList(this.loadHtmlFile, filePath);
            }
        } catch(err) {
            mainWindow.loadFile(filePath +'');
            console.log('Successfully loaded ' +filePath);
        }
    }

}



module.exports = {SplashMainWindow};