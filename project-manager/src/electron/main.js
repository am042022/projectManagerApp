const {app, BrowserWindow} = require('electron');

app.on('ready', ()=>{
    win = new BrowserWindow({width: 1600, 'minWidth': 1600, height: 900, 'minHeight': 900})

    win.loadURL('http://localhost:3000')
})
