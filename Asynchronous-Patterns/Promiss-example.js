var fs = require("fs");
var { promisify } = require("util");
var wf = promisify(fs.writeFile);
var unlink = promisify(fs.unlink);
var beep = () => process.stdout.write("\x07");
var delay = (s) =>
  new Promise((resolves) => {
    setTimeout(resolves, s * 1000);
  });

var callSequentially = () =>
  Promise.resolve()
    .then(() => {
      console.log("start");
    })
    .then(() => {
      delay(3);
    })
    .then(console.log("wating"))
    .then(() => {
      wf("simple.txt", "tesing file writing");
    })
    .then(() => {
      console.log("file witen");
    })
    .then(() => {
      delay(3);
    })
    .then(() => {
      unlink("simple.txt");
    })
    .then(() => {
      console.log("remover file");
    })
    .then(() => {
      beep;
    })
    .catch((e) => {
      console.log(e);
    });
callSequentially();
