const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDevelopment = process.env.NODE_ENV === "development";

// Enable autoreload in development mode
if (isDevelopment) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "../node_modules", ".bin", "electron"),
    awaitWriteFinish: true,
  });
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const width = isDevelopment ? 1240 : 800;
  const height = 600;

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width,
    height,
    icon: path.join(__dirname, "./public/favicon.ico"),
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Hide menu bar
  mainWindow.setMenu(null);

  isDevelopment
    ? mainWindow.loadURL("http://localhost:3000")
    : mainWindow.loadFile(path.join(__dirname, "./build/index.html"));

  // Open the DevTools in development mode
  isDevelopment && mainWindow.webContents.openDevTools();
};


app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});