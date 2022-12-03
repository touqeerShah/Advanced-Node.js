const fs = require("fs");

const readStream = fs.createReadStream("./powder-day.mp4");

readStream.on("data", (chunk) => {
  console.log("size: ", chunk.length);
});

readStream.on("end", () => {
  console.log("read stream finished");
});

readStream.on("error", (error) => {
  console.log("an error has occured.");
  console.error(error);
});

readStream.pause(); // it will make stream from flow mode to unflowm mode
// it mean it well ask you to enter and read video bit
process.stdin.on("data", (chunk) => {
  console.log(chunk.toString().trim());
  if (chunk.toString().trim() === "finish") {
    readStream.resume(); // it will resume it into flowing mode
  }
  readStream.read();
});
