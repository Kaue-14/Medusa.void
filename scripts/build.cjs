const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = filename => JSON.parse(fs.readFileSync(path.join(root, filename), 'utf8'));
const write = (filename, value) => {
  const target = path.join(root, filename);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, JSON.stringify(value, null, 2) + '\n', 'utf8');
};
const manifest = read('package.json');
const target = manifest.contributes.themes[0].path.replace(/^\.\//, '');
const theme = {
  $schema: 'vscode://schemas/color-theme',
  name: manifest.contributes.themes[0].label,
  type: 'dark',
  semanticHighlighting: true,
  colors: read('src/interface-colors.json'),
  tokenColors: [
    ...read('src/compatibility-token-colors.json'),
    ...read('src/token-colors.json')
  ],
  semanticTokenColors: read('src/semantic-colors.json')
};
write(target, theme);
console.log('Built ' + target);
