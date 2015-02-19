var fs = require('fs')

module.exports = function(filename, hex, cb) {
  hex = hex.replace(/\s/g, '')
  var buff = new Buffer(hex, 'hex')

  fs.writeFile(filename, buff, function(err) {
    if (err) {
      cb(err)
    } else {
      cb(null)
    }
  })
}
