import { AppConfigService } from './app.config.service'
import { Module } from '@nestjs/common'
import { ConfigModule as NestConfig } from '@nestjs/config'
import appConfig from './app.config'

@Module({
  imports: [NestConfig.forRoot({ isGlobal: true, load: [appConfig] })],
  providers: [AppConfigService],
  exports: [AppConfigService],
})
export class ConfigModule {}
