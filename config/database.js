module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  const connections = {
    postgres: {
      connection: {
        host: env('DATABASE_HOST', 'dpg-cqv21888fa8c73fe11j0-a.frankfurt-postgres.render.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'integrals_strapi_db'),
        user: env('DATABASE_USERNAME', 'integrals_strapi_db_user'),
        password: env('DATABASE_PASSWORD', 'T4OVJ0CDZgwM3wKG1b0WbR46idF9TRtH'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      debug: true,
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
