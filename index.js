'use strict';
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const updater = require('electron-simple-updater');
const UPDATES_CONF = 'https://github.com/SergeyKhmylov/electron-auto-update/blob/master/updates.json';

updater.init(UPDATES_CONF);

let window = null;

app.once('ready', function() {
  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 500px
    width: 500,
    // Set the initial height to 400px
    height: 400,
    // set the background color to black
    backgroundColor: "#111",
    // Don't show the window until it's ready, this prevents any white flickering
    show: false
  })

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'static', 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  window.once('ready-to-show', function() {
    window.show()
  })
})