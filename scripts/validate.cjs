const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const read = filename => JSON.parse(fs.readFileSync(path.join(root, filename), 'utf8'));
const manifest = read('package.json');
const theme = read(manifest.contributes.themes[0].path.replace(/^\.\//, ''));
const colors = read('src/interface-colors.json');
const sharedTokens = read('src/compatibility-token-colors.json');
const customTokens = read('src/token-colors.json');
const semantic = read('src/semantic-colors.json');
const hex = /^#[a-f0-9]{6}(?:[a-f0-9]{2})?$/i;
assert.equal(manifest.publisher, 'Kaue-14');
assert.equal(manifest.version, '1.0.1');
assert.equal(manifest.icon, 'images/icon.png');
assert(fs.existsSync(path.join(root, manifest.icon)));
assert.equal(theme.name, 'Medusa.void');
assert.equal(theme.type, 'dark');
assert.equal(theme.semanticHighlighting, true);
assert.deepEqual(theme.colors, colors);
assert.deepEqual(theme.tokenColors, [...sharedTokens, ...customTokens]);
assert.deepEqual(theme.semanticTokenColors, semantic);
assert(Object.values(theme.colors).every(value => hex.test(value)));
for (const token of theme.tokenColors) {
  assert(token.scope && token.settings);
  if (token.settings.foreground) assert(hex.test(token.settings.foreground));
}
const report = {
  label: theme.name,
  test: 'Static project validation only; not installed in VS Code',
  interfaceColors: Object.keys(colors).length,
  customTextMateRules: customTokens.length,
  inheritedCompatibleTextMateRules: sharedTokens.length,
  semanticRules: Object.keys(semantic).length,
  totalTextMateRules: theme.tokenColors.length,
  checks: 'passed'
};
fs.writeFileSync(path.join(root,'docs/validation-preview.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(report, null, 2));
