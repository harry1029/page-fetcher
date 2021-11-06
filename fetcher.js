const fetcher = function() {
  const args = process.argv.splice(2);
  const url = args[0];
  const path = args[1];

  // Use the fs.writeFile() API to write into files
  const fs = require('fs');

  const request = require('request');
  request(url, (error, response, body) => {
    console.log('error: ', error);
    console.log('statusCode: ', response && response.statusCode);
    
    fs.writeFile(path, body, err => {
      if (err) {
        console.error(err)
        return;
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
      return;
    })
  })


};

fetcher();