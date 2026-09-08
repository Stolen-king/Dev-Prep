const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
for (const file of files) {
  if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.css')) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.endsWith('\\n')) {
      fs.writeFileSync(file, content.slice(0, -2));
      console.log('Fixed', file);
    }
  }
}
