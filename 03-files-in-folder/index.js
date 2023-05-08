const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'secret-folder');

fs.readdir(folderPath, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    fs.stat(path.join(folderPath, file), (err, stats) => {
      if (err) throw err;
      console.log(`${file}-${path.extname(file).slice(1)}-${stats.size} bytes`);
    });
  });
});