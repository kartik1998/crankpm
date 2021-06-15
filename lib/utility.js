const os = require('os');

exports.log = (message) => {
    console.log(`[${new Date().toISOString()}][${os.hostname()}][${os.platform()}] ${message}`)
}