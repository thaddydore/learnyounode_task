const fs = require('fs');
const path = process.argv[2];

const readable = fs.createReadStream(path);
readable.pipe(process.stdout);

/**stream-adventure solution */
// const fs = require('fs')
// const file = process.argv[2]

// fs.createReadStream(file).pipe(process.stdout)