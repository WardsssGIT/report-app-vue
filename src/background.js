'use strict'

import { app, protocol, BrowserWindow, ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
import axios from 'axios'
import sqlite3 from 'sqlite3'
import path from 'path'

const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}

// Create Database
function createDatabase() {
  const dbPath = path.resolve(app.getAppPath(), 'database.db')
  const db = new sqlite3.Database(dbPath)

  db.serialize(() => {
    // Create tables if they don't exist
    db.run('CREATE TABLE IF NOT EXISTS user_credentials (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, role TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP)')
  })

  return db
}

// Fetch Credentials from Database
ipcMain.on('fetch-credentials', (event) => {
  const db = createDatabase()
  db.all('SELECT * FROM user_credentials', (err, rows) => {
    if (err) {
      console.error(err)
      event.reply('fetch-credentials-error', err.message)
    } else {
      event.reply('fetch-credentials-success', rows)
    }
    db.close()
  })
})

// Check Credentials
ipcMain.on('check-credentials', (event, username, password) => {
  const db = createDatabase()
  db.get('SELECT * FROM user_credentials WHERE username = ? AND password = ?', [username, password], (err, row) => {
    if (err) {
      console.error(err)
      event.reply('check-credentials-error', err.message)
    } else {
      const isValidCredentials = !!row
      event.reply('check-credentials-success', isValidCredentials)
    }
    db.close()
  })
})

// Check User Type
ipcMain.on('check-user-type', (event, username) => {
  const db = createDatabase()
  db.get('SELECT role FROM user_credentials WHERE username = ?', [username], (err, row) => {
    if (err) {
      console.error(err)
      event.reply('check-user-type-error', err.message)
    } else {
      const userType = row ? row.role : null
      event.reply('check-user-type-success', userType)
    }
    db.close()
  })
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

app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
