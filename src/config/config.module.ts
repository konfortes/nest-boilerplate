import { DbConfigService } from './database.config.service'
import { AppConfigService } from './app.config.service'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import appConfig from './app.config'
import dbConfig from './database.config'

@Module({
  imports: [ConfigModule.forRoot({ load: [appConfig, dbConfig] })],
  providers: [AppConfigService, DbConfigService],
  exports: [AppConfigService, DbConfigService],
})
export class AppConfigModule {}
