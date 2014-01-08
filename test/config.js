

module.exports = {

  siteName: 'Example App: Dev',

  port: 3000,

  db: {
    host: 'localhost'
  },


  enviroments: {

    production: {
      port: 80,
      db: {
        host: 'dbserver'
      }
    }

  }

};