const fs = require('fs');
const path = require('path');

function readirModular(folder, ext, callback) {
  fs.readdir(folder, function (err, files) {
    if (err) {
      return callback(err)
    }

    list = files.filter(function (file) {
      return path.extname(file) === '.' + ext
    })

    return callback(null, list)
  })
}

module.exports = readirModular;