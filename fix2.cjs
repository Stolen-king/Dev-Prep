const fs = require('fs');
let c = fs.readFileSync('src/data/questions.js', 'utf8');
c = c.replace(/\\`/g, '`');
fs.writeFileSync('src/data/questions.js', c);
console.log('Fixed backticks');
