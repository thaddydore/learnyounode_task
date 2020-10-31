const fs = require('fs');

const filePath = process.argv[2];
const buffer = fs.readFileSync(filePath);
const text = buffer.toString().split('\n');
console.log(--text.length);