var hex_to_file = require('./index.js')

if (process.argv.length < 4) {
  console.log('expecting filename and hex string')
  process.exit(1)
}

var filename = process.argv[2]
var hex = process.argv[3]

hex_to_file(filename, hex, function(err) {
  if (err) {
    console.log('err: ', JSON.stringify(err, null, '  '))
  } else {
    console.log('completed')
  }
})
