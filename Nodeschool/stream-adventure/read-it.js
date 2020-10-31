const { Readable } = require('stream');
const input = process.argv[2];

class MyReadable extends Readable {
  constructor(data) {
    super(data)
    this.data = data
  }
  _read() {
    this.push(this.data)
    this.push(null);
  }
}
const readble = new MyReadable(input);
readble.pipe(process.stdout)

/**stream-adventure solution */

// const { Readable } = require('stream')

// class ReadableStream extends Readable {
//   _read(size) {
//   }
// }

// const stream = new ReadableStream(process.argv[2])
// stream.push(process.argv[2])
// stream.pipe(process.stdout)