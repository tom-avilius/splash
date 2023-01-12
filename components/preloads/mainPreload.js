const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('test', {
  node: () => process.versions.node,
})