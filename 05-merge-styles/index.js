const fs = require('fs');
const path = require('path');

const stylesDir = path.join(__dirname, 'styles');
const outputDir = path.join(__dirname, 'project-dist');

fs.readdir(stylesDir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const cssFiles = files.filter((file) => {
    const extname = path.extname(file);
    return extname === '.css';
  });

  const cssContent = cssFiles.reduce((acc, file) => {
    const filePath = path.join(stylesDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return acc + fileContent;
  }, '');

  fs.writeFileSync(path.join(outputDir, 'bundle.css'), cssContent);
});