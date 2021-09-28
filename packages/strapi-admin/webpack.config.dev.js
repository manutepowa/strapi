'use strict';

const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackConfig = require('./webpack.config.js');

module.exports = () => {
  const analyzeBundle = process.env.ANALYZE_BUNDLE;
  const entry = path.join(__dirname, 'admin', 'src', 'app.js');
  const dest = path.join(__dirname, 'build');

  // When running the analyze:bundle command, it needs a production build
  // to display the tree map of modules
  const env = analyzeBundle ? 'production' : 'development';
  const options = {
    backend: 'https://server.ddev.site:3001',
    publicPath: '/admin/',
    features: process.env.ENABLED_EE_FEATURES || ['sso'],
  };

  const args = {
    entry,
    dest,
    env,
    options,
    useEE: process.env.STRAPI_DISABLE_EE === 'true' ? false : true,
  };

  const config = webpackConfig(args);

  if (analyzeBundle) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }

  return {
    ...config,
    devServer: {
      port: 4000,
      host: '0.0.0.0',
      disableHostCheck: true,
      clientLogLevel: 'none',
      quiet: true,
      historyApiFallback: {
        index: '/admin/',
        disableDotRule: true,
      },
      open: false,
      openPage: '/admin',
    },
  };
};
