const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'data');
const files = ['q1_5.js', 'q6_10.js', 'q11_15.js'];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  // replace \` with `
  content = content.replace(/\\`/g, '`');
  // replace \${ with ${
  content = content.replace(/\\\${/g, '${');
  fs.writeFileSync(filePath, content);
  console.log('Fixed', file);
});
