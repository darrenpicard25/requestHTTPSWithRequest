const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err) {
    throw err;
  })
  .on('response', function(response) {
    console.log(response.statusMessage);
    console.log(response.headers['content-type']);
    console.log("Downloading Image......");
  })
  .pipe(fs.createWriteStream('./future.jpg'))

  .on('finish', function() {
    console.log('Download Complete.');
  });
