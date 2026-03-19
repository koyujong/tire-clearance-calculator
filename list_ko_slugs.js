const fs = require('fs');
const c = fs.readFileSync('./src/lib/blogData.ts', 'utf8');
const m = c.match(/slug:\s*["'`]([^"'`]+-ko)["'`]/g);
console.log(m ? m.join('\n') : 'none found');
