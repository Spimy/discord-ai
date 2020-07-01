const { app, BrowserWindow } = require("electron");
const path = require("path");

require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "../node_modules", ".bin", "electron"),
    awaitWriteFinish: true
});

if (require("electron-squirrel-startup")) {
    app.quit();
}

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        frame: false,
        transparent: true,
        webPreferences: {
        nodeIntegration: true
        }
    });

    mainWindow.loadFile(path.join(__dirname, "../public/index.html"));
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
