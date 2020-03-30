const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

const config = fs.readFileSync(
  path.resolve(__dirname, '.eslintrc.yaml'),
  'utf8'
);
const rules = yaml.safeLoad(config);

module.exports = rules;
