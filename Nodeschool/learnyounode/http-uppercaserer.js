const http = require('http');
const map = require('through2')
const { StringDecoder } = require('string_decoder');
const options = process.argv.slice(2);

const server = http.createServer((req, res) => {
  const method = req.method;
  const decoder = new StringDecoder('utf-8');

  if (method === 'POST') {
    req.pipe(map(function (chunk, enc, callback) {
      this.push(decoder.write(chunk).toUpperCase())
      callback()
    }) ).pipe(res)
  } else {
    res.end('send a post method\n');
  }
})

server.listen(options[0], () => console.log(`server running on port ${options[0]}`))



/**learnyounode solution */
// 'use strict'
// const http = require('http')
// const map = require('through2-map')

// const server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))
