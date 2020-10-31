const fs = require('fs');

const filePath = process.argv[2];
fs.readFile(filePath, (error, data) => {
  if (!error && data) {
    const text = data.toString().split('\n');
    console.log(--text.length);
  } else {
    console.log(error)
  }
})
