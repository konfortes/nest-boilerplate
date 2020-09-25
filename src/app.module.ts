import { Module } from '@nestjs/common'
import { OrderController } from './order/order.controller'
import { OrderService } from './order/order.service'
import { TerminusModule } from '@nestjs/terminus'
import { HealthController } from './health/health.controller'

import {
  WinstonModule,
  WinstonModuleOptions,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston'
import * as winston from 'winston'

@Module({
  imports: [TerminusModule, WinstonModule.forRoot(loggerConfig())],
  controllers: [OrderController, HealthController],
  providers: [OrderService],
})
export class AppModule {}

function loggerConfig(): WinstonModuleOptions {
  if (process.env.NODE_ENV == 'development') {
    return {
      level: process.env.LOG_LEVEL || 'info',
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
      ],
    }
  } else {
    return {
      level: process.env.LOG_LEVEL || 'info',
      transports: [
        new winston.transports.Console({
          format: winston.format.json(),
        }),
      ],
    }
  }
}

function transportConfig(env: string): winston.Transport {
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
