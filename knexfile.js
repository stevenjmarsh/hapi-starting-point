'use strict';

// Update with your config/connection settings...
module.exports = {
  test: {
    client: 'sqlite3',
    connection: { filename: './db/test.sqlite3' },
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds' }
  },

  development: {
    client: 'sqlite3',
    connection: { filename: './db/dev.sqlite3' },
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds' }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    },
    seeds: { directory: './db/seeds' }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: { tableName: 'knex_migrations' }
  }
};
