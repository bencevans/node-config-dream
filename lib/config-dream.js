/*
 * config-dream
 * https://github.com/bencevans/node-config-dream
 *
 * Copyright (c) 2013 Ben Evans
 * Licensed under the MIT license.
 */

'use strict';


var path   = require('path');
var extend = require('extend');

var defaults = {
  configPath:     './config',
  userConfigPath: './config.user'
};

var async = function(configPath, userConfigPath, callback) {
  return callback(new Error('Not Implemented'));
};

var sync = function(configPath, userConfigPath) {

  // Set Defaults
  configPath     = path.resolve(process.cwd(), configPath || defaults.configPath);
  userConfigPath = path.resolve(process.cwd(), userConfigPath || defaults.userConfigPath);

  var config         = {};
  var userConfig     = {};

  try {
    config     = require(configPath);
  } catch (e) {
    throw e;
  }

  try {
    userConfig = require(userConfigPath);
  } catch (e) {

  }


  return extend(true, config, userConfig);
};

var createInstance = function(configPath, userConfigPath, callback) {
  if(callback) {
    return async(configPath, userConfigPath, callback);
  } else {
    return sync(configPath, userConfigPath, callback);
  }
};

module.exports       = createInstance;
module.exports.sync  = sync;
module.exports.async = async;