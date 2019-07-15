'use strict';

const isObject = require('./is').Object;

const defaultServer = {
  port: 8080,
  enable: true,
  disableHostCheck: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  hot: true,
  clientLogLevel: 'none',
  quiet: true,
  historyApiFallback: {
    disableDotRule: true
  },
  lazy: false,
  stats: 'errors-only',
  host: '0.0.0.0',
  overlay: false
};

module.exports = server => {
  // null, undefined, false
  if (!server || server === false) {
    return {
      enable: false,
      stats: 'errors-only'
    };
  }

  // object
  if (isObject(server)) {
    const config = Object.assign(defaultServer, server);

    config.host = config.hostname || config.host || defaultServer.host;
    config.__host__ = `${config.https ? 'https' : 'http'}://${config.host}:${config.port}`;
    delete config.hostname;

    return config;
  }

  // array, string, true, number .etc
  return defaultServer;
};
