const http = require('http');
const bl = require('bl')
const url = process.argv[2]

http.get(url, (resonse) => {
  let buff = '';
  resonse.pipe(bl(function (err, data) {
    if (!err) {
      buff += data.toString();
      console.log(buff.length)
      console.log(buff)
    } else {
      console.log(err)
    }
  }))
})


/**learnyounode solution */

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })