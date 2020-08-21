import { app, BrowserWindow, screen } from 'electron'




/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 480,
    useContentSize: true,
    width: 857,
    webPreferences:{
      nodeIntegration: true,
      enableRemoteModule: true
    },
    transparent: true,
    frame: false,
 
   
    
   
  })
  mainWindow.setAlwaysOnTop(true);
  mainWindow.setPosition(screen.getPrimaryDisplay().workAreaSize.width-857-63,63,true);
  appProperties();
  mainWindow.loadURL(winURL)
  
  mainWindow.on('closed', () => {
    mainWindow = null
  })

  
  mainWindow.webContents.openDevTools({mode:'undocked'})
  
  

  
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    
    createWindow();
    
  }
})


function appProperties (){
  app.allowRendererProcessReuse = false;
}




