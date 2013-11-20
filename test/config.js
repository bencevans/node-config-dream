

module.exports = {

  siteName: 'Example App: Dev',

  port: 3000,

  github: {
    key: '1234567890',
    secret: 'oasdofkjsdaoadfgafg'
  },


  enviroment: {

    production: {
      port: 80,
      github: {
        key: 'PRODUCTION_KEY',
        secret: 'PRODUCTION_SECRET'
      }
    }

  }

};