const jsBundleFilename = 'app.js';
const cssStylesFilename = 'styles.css';
const publicPath = 'dist';
const assetsPublicPath = 'assets';

const paths = {
  source: './src',
  appRoot: './src/js/',
  entryPoint: './src/js/index.js',
  destination: './' + publicPath,
};

module.exports = {
  jsBundleFilename,
  cssStylesFilename,
  paths,
  publicPath,
  assetsPublicPath
};
