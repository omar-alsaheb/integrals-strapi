module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  const connections = {
    postgres: {
      connection: {
        host: env('DATABASE_HOST', '192.168.7.82'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'integralsDB'),
        user: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'netcell_dev'),
      },
      debug: false,
    }
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
