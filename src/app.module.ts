import { OrderModule } from './order/order.module'
import { Module } from '@nestjs/common'

import {
  WinstonModule,
  WinstonModuleOptions,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston'
import { HealthModule } from './health/health.module'
import * as winston from 'winston'

@Module({
  imports: [WinstonModule.forRoot(loggerConfig()), HealthModule, OrderModule],
})
export class AppModule {}

function loggerConfig(): WinstonModuleOptions {
  const env: string = process.env.NODE_ENV || 'development'
  return {
    level: process.env.LOG_LEVEL || 'info',
    transports: transportConfig(env),
  }
}

function transportConfig(env: string) {
  if (env == 'development') {
    return new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        nestWinstonModuleUtilities.format.nestLike(),
      ),
    })
  } else {
    return new winston.transports.Console({
      format: winston.format.json(),
    })
  }
}
