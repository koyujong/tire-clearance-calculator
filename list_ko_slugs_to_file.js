const fs = require('fs');
const c = fs.readFileSync('./src/lib/blogData.ts', 'utf8');
const m = c.match(/slug:\s*["'`]([^"'`]+-ko)["'`]/g);
const slugs = m ? m.map(s => s.replace(/slug:\s*["'`]/, '').replace(/["'`]/, '')) : [];
fs.writeFileSync('ko_slugs.txt', slugs.join('\n'));
console.log('Done');
