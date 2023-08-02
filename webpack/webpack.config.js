const { merge } = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const commonConfig = require('./webpack.common.js'); // eslint-disable-line import/extensions

module.exports = (envVars) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.${env}.js`); // eslint-disable-line global-require, import/no-dynamic-require, import/extensions
  const config = merge(commonConfig, envConfig);
  return config;
};
