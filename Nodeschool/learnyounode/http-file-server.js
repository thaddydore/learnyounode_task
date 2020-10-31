const http = require('http');
const fs = require('fs');
const options = process.argv.slice(2);

const server = http.createServer((req, res) => {
  let readstream = fs.createReadStream(options[1]);
  readstream.pipe(res)
})

server.listen(options[0], () => console.log(`server running on port ${options[0]}`))


/**learnyounode solutions */


// 'use strict'
// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))