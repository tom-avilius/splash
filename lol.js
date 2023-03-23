const { app, BrowserWindow } = require('electron')

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    });
    mainWindow.loadFile('index.html');

    // Stick window to bottom
    stickToBottom(mainWindow);
}

app.whenReady().then(() => {
	createWindow(); 
});