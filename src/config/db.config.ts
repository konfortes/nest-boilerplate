import { TypeOrmModuleOptions } from '@nestjs/typeorm'

// this file is not loaded as part of Nest.js bootstrap, therefore need to manually call dotenv.config()
import * as dotenv from 'dotenv'
dotenv.config()

class DBConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key]
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`)
    }

    return value
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      host: this.getValue('DB_HOST', false) || 'localhost',
      port: parseInt(this.getValue('DB_PORT')) || 5432,
      username: this.getValue('DB_USER', false) || 'postgres',
      password: this.getValue('DB_PASSWORD', false) || 'postgres',
      database: this.getValue('DB_NAME'),
      logging: this.getValue('NODE_ENV', false) == 'development',

      entities: ['dist/**/*.entity.js'],
      migrations: ['dist/database/migration/*.js'],
      migrationsTableName: 'migrations',
      cli: {
        migrationsDir: 'src/database/migration',
      },
      migrationsRun: true,
    }
  }
}

const dbConfigService = new DBConfigService(process.env)

export { dbConfigService }
