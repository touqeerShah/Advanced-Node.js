const { log } = require("console");
const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("./powder-day.mp4");
const writeStream = createWriteStream("./copy.mp4", {
  highWaterMark: 61010, // this will tell the number of bit it handle
});

readStream.on("data", (chunk) => {
  // when we add more date to the stram limite then we will face issue of over flow or back pressure
  // when it happend it return false mean not able handle more data wait
  var response = writeStream.write(chunk);
  if (!response) {
    // it time to pause the readstream
    console.log("back pressure increase ");
    readStream.pause();
  }
});

readStream.on("error", (error) => {
  console.log("an error occurred", error.message);
});

readStream.on("end", () => {
  writeStream.end();
});

writeStream.on("drain", () => {
  console.log("back pressure is reduce it time for more data");
  readStream.resume();
});

writeStream.on("close", () => {
  process.stdout.write("file copied\n");
});
