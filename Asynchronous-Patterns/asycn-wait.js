var fs = require("fs");
var { promisify } = require("util");
var wf = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var beep = () => process.stdout.write("\x07");
var delay = (s) =>
  new Promise((resolves) => {
    setTimeout(resolves, s * 1000);
  });

var callSequentially = async () => {
  try {
    console.log("start");
    await delay(3);
    console.log("waiting");
    await wf("simple.txt", "for testing");
    console.log("file created");
    await delay(4);
    await unlink("simple.txt");
    console.log("file deleted");
  } catch (error) {
    console.log(error);
  }
};

callSequentially();
