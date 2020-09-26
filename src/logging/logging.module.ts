import { Module } from '@nestjs/common'
import loggerConfig from './logging.config'
import { WinstonModule } from 'nest-winston'

@Module({
  imports: [WinstonModule.forRoot(loggerConfig())],
})
export class LoggingModule {}
