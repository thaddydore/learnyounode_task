const fs = require('fs');
const path = require('path');

/**my own solution  */
// const filePath = process.argv[2]
// const fileExt = process.argv[3]
// fs.readdir(filePath, 'utf-8', (error, files) => {
//   if (!error && files) {
//     files.filter(file => {
//       let correctFile = file.includes(`.${fileExt}`)
//       if (correctFile) {
//         console.log(file)
//       }
//     })  } else {
//     console.log(error)
//    }
// })


/**solution with better algorithm */

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})