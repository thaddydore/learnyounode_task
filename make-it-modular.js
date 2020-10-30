const readModular = require('./mymodule');

const folder = process.argv[2]
const ext = process.argv[3]

readModular(folder, ext, function (error, data) {
  if (error) {
    return console.log(error)
  } 

  data.forEach(file => {
    console.log(file)
  })
})