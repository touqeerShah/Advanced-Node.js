var fs = require("fs");
var { promisify } = require("util");
var wf = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var readDir = promisify(fs.readdir);
var beep = () => process.stdout.write("\x07");
var delay = (s) =>
  new Promise((resolves) => {
    setTimeout(resolves, s * 1000);
  });

Promise.all([
  wf("simle1.txt", "test1"),
  wf("simle2.txt", "test1"),
  wf("simle3.txt", "test1"),
]).then(() => {
  console.log("DONE Write All");
  delay(3);
});
Promise.all([
  unlink("simle1.txt"),
  unlink("simle2.txt"),
  unlink("simle3.txt"),
]).then(() => {
  console.log("DONE Delete ALL");
});
