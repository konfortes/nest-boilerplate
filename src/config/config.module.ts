import { DbConfigService } from './db.config.service'
import { AppConfigService } from './app.config.service'
import { Module } from '@nestjs/common'
import { ConfigModule as NestConfig } from '@nestjs/config'
import appConfig from './app.config'
import dbConfig from './db.config'

@Module({
  imports: [
    NestConfig.forRoot({ isGlobal: true, load: [appConfig, dbConfig] }),
  ],
  providers: [AppConfigService, DbConfigService],
  exports: [AppConfigService, DbConfigService],
})
export class ConfigModule {}
