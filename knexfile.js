module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        database: 'neighbourhoods',
        user: 'postgres',
        password: 'postgres'
      },
      migrations: {
        directory: __dirname + '/db/migrations'
      },
      seeds: {
        directory: __dirname + '/db/seeds/development'
      }
    },
};