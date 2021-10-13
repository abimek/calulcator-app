const {app, BrowserWindow} = require('electron')


app.on('ready', () => {
    const win = new BrowserWindow({
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

app.on('window-all-closed', () => app.quit)

