const path = require('path');

const root = path.resolve('./');
const { dependencies } = require(`${root}/package.json`);
const tsconfig = `${root}/tsconfig.json`;
const srcDir = `${root}/app/src/ts`;
const mainPath = `${srcDir}/main`;
const rendererPath = `${srcDir}/renderer`;
const target = `${root}/target`;
const template = `${root}/app/public/index.html`
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  root,
  dependencies,
  tsconfig,
  mainPath,
  rendererPath,
  template,
  target,
  isDev
};