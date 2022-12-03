const { log } = require("console");
const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("./powder-day.mp4");
let writeStream = createWriteStream("./copy.mp4");
//Pip is ver helpful to handle pressusr and other thing it make proces more fast
readStream.pipe(writeStream).on("error", console.error);

// you can user any reader of stream to work with write
writeStream = createWriteStream("./file.txt");
process.stdin.pipe(writeStream); // it will write on file directly
