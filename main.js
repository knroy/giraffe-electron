const { app, BrowserWindow } = require('electron')
const log = require('electron-log');
const server = require('./node/server');

function createWindow () {
  const win = new BrowserWindow({
    width: 400,
    height: 200,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')

}

app.whenReady().then(createWindow).finally(() => {
    try{
        server.startServer();
    }catch(e){
        log.warn(e);
    }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})