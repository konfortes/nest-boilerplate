import { ConfigModule } from './config/config.module'
import { Module } from '@nestjs/common'

import { OrderModule } from './order/order.module'
import { HealthModule } from './health/health.module'
import { LoggingModule } from './logging/logging.module'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [
    ConfigModule,
    LoggingModule,
    HealthModule,
    OrderModule,
    DatabaseModule,
  ],
})
export class AppModule {}
