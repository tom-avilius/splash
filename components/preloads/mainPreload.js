// imports
const { contextBridge, ipcRenderer } = require('electron')

// importing child process module
const {exec} = require('child_process');

contextBridge.exposeInMainWorld('terminal', {
    execute: async (command, execOptions = {}) => {
        return new Promise((resolve, reject) => {
            const childProcess = exec(command, execOptions);

            // stream process output to console
            childProcess.stderr.on('data', data => console.error(data));
            childProcess.stdout.on('data', data => console.log(data));
            // handle exit
            childProcess.on('exit', () => resolve());
            childProcess.on('close', () => resolve());
            // handle errors
            childProcess.on('error', error => reject(error));
            })
    },
})
