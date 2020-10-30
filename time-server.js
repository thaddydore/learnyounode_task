const net = require('net');
const port = process.argv[2];

const server = net.createServer(socket => {
  let date = new Date();
  let year = date.getFullYear()
  let month = date.getMonth() + 1;// starts at 0  
  let day = date.getDate() // returns the day of month  
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let time = `${year}-${month}-${day} ${hours}:${minutes}`

  socket.end(`${time}` +  `\n`);
})

server.listen(port, () => console.log(`server running on port ${port}`));



// learnyounode solution
// 'use strict'
// const net = require('net')

// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now() {
//   const d = new Date()
//   return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// const server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))