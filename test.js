const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');
const modules = ['module1','module2','module3','module4','module5','module6','module7','final','end'];
modules.forEach(id => {
  assert(html.includes(`id="${id}"`), `missing ${id}`);
});
console.log('All modules present');
