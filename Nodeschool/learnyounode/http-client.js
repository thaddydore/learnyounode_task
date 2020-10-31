const http = require('http')
const url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf-8');
  response.on('data', (chunk) => {
    console.log(chunk)
  }).on('error', (error) => {
    console.log(error)
  })
})

/**slearnyounode solution */

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)