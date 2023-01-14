// imports
const { contextBridge,} = require('electron')

// importing child process module
const {exec} = require('child_process');

// importing os-utils module
const osUtil = require('os-utils');

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


contextBridge.exposeInMainWorld('os', {
    cpu: osUtil.cpuUsage,

    memory: osUtil.freememPercentage,
})
