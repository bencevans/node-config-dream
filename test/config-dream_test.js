'use strict';

var configDream = require('../lib/config-dream.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
    */

exports['ConfigDream'] = {
  'both files found': function(test) {
    test.expect(1);
    test.deepEqual(configDream(__dirname + '/config', __dirname + '/config.user'), {
      "siteName":"Example App: Dev",
      "port":1337,
      "github":{
        "key":"1234567890",
        "secret":"oasdofkjsdaoadfgafg"
      },
      "enviroment":{
        "production":{
          "port":80,
          "github":{
            "key":"PRODUCTION_KEY",
            "secret":"PRODUCTION_SECRET"
          }
        }
      }
    }, 'should output a merged config & config.user');
    test.done();
  },

  'no user file found': function(test) {
    test.expect(1);
    test.deepEqual(configDream(__dirname + '/config', __dirname + '/config.userdoesnotexist'), {
      "siteName":"Example App: Dev",
      "port":3000,
      "github":{
        "key":"1234567890",
        "secret":"oasdofkjsdaoadfgafg"
      },
      "enviroment":{
        "production":{
          "port":80,
          "github":{
            "key":"PRODUCTION_KEY",
            "secret":"PRODUCTION_SECRET"
          }
        }
      }
    }, 'should output a merged config & config.user');
    test.done();
  },

  'no config file found': function(test) {
    test.expect(1);
    test.throws(function() {
      configDream(__dirname + '/configblob', __dirname + '/config.userdoesnotexist');
    });
    test.done();
  },

};
