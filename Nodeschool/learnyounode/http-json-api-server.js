const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const path = parsedUrl.pathname;
  const query = parsedUrl.query.iso;
  const d = new Date(query)
  const hour = d.getHours()
  const minute = d.getMinutes()
  const seconds = d.getSeconds()
  const unixDate = d.getTime();
  const time = JSON.stringify({
    "hour": hour,
    "minute": minute,
    "second": seconds
  })
  const date = JSON.stringify({ "unixtime": unixDate })
  
  if (method === 'GET' && path === '/api/parsetime') {
    res.writeHead(200, { 'Content-Type': 'application/json'})
    res.end(time)
  } else if (method === 'GET' && path === '/api/unixtime') {
    res.writeHead(200, { 'Content-Type':'application/json'})
    res.end(date)
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain'})
    res.end('bad request\n');
  }
})

server.listen(process.argv[2], () => console.log(`server running on port ${process.argv[2]}`))

/**learnyounode solution */

// 'use strict'
// const http = require('http')

// function parsetime(time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime(time) {
//   return { unixtime: time.getTime() }
// }

// const server = http.createServer(function (req, res) {
//   const parsedUrl = new URL(req.url, 'http://example.com')
//   const time = new Date(parsedUrl.searchParams.get('iso'))
//   let result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
