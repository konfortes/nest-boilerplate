export default () => ({
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT, 10) || 3000,
  logLevel: process.env.LOG_LEVEL || 'info',
  database: {
    type: 'postgres',

    host: process.env['DB_HOST'] || 'localhost',
    port: parseInt(process.env['DB_PORT']) || 5432,
    username: process.env['DB_USER'] || 'postgres',
    password: process.env['DB_PASSWORD'] || 'postgres',
    database: process.env['DB_NAME'] || 'DB_NAME_ENV_NOT_SET',
    logging: process.env['NODE_ENV'] == 'development',

    entities: ['{.,dist}/**/*.entity.js'],
    migrations: ['{.,dist}/database/migration/*.js'],
    migrationsTableName: 'migrations',
    cli: {
      migrationsDir: 'src/database/migration',
    },
    migrationsRun: true,
  },
})
