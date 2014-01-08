/*
 * config-dream
 * https://github.com/bencevans/node-config-dream
 *
 * Copyright (c) 2013 Ben Evans
 * Licensed under the MIT license.
 */

'use strict';


var extend = require('extend');

/**
 * Sync config resolver
 * @param  {Object | String} configObjectOrPath object or path to
 * @param  {Object | String} userConfigObjectOrPath object or path to user config file
 * @return {Object}            resolved config
 */
var sync = function(configObjectOrPath, userConfigObjectOrPath) {

  var config;
  if(typeof configObjectOrPath === 'string') {
    try {
      config = require(configObjectOrPath);
    } catch (e) {
      console.log('Unable to find config file: ' + config);
    }
  } else {
    config = configObjectOrPath;
  }

  var userConfig;
  if(typeof userConfigObjectOrPath === 'string') {
    try {
      userConfig = require(userConfigObjectOrPath);
    } catch (e) {
      // Not Logging Error On Purpose
    }
  } else {
    userConfig = userConfig || {};
  }

  var enviroment = (process.NODE_ENV || 'development').replace(/^dev$/, 'development');

  config = extend(true, config, userConfig);
  return extend(true, config, config.enviroments[enviroment]);

};

module.exports = sync;