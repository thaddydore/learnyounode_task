const http = require('http');
const bl = require('bl');
const async = require('async')
const urls = process.argv.slice(2);

function first() {
  http.get(urls[0], function (response) {
     response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
       data = data.toString()
       console.log(data)
    }))
  })
}

function second() {
  http.get(urls[1], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      data = data.toString()
      console.log(data)
    }))
  })
}

function third() {
  http.get(urls[2], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }
      data = data.toString()
      console.log(data)
    }))
  })
}

async.parallel([first, second, third], (error, results) => {
  if (!error && results) {
    console.log(results);
  } else {
    console.log(results)
  }
})


//learnyounode solutions

// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults() {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet(index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }

