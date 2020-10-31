const { Writable } = require('stream');

class MyWriteable extends Writable {
  _write(chunk, encoding, callback) {
    console.log(`writing: ${chunk.toString()}`)
    callback()
  }
}

const writable = new MyWriteable()
process.stdin.pipe(writable)