const {app, BrowserWindow} = require('electron')

const win = null;

const gotTheLock = app.requestSingleInstanceLock()


if (!gotTheLock) {
    app.quit()
  } else {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
      // Someone tried to run a second instance, we should focus our window.
      if (win) {
        if (win.isMinimized()) win.restore()
        win.focus()
      }
    })
      
    // Create myWindow, load the rest of the app, etc...
    app.on('ready', () => {
        const win = new BrowserWindow({
            icon: "CalcAppIcon.png",
            height: 608,
            width: 506,
            show: false,
            resizable: false,
            webPreferences: {
                nodeIntegration: true
            }
        })
        win.loadFile('index.html')
    
        win.webContents.on('did-finish-load', () => {
            win.show();
        })
    })
  }

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

