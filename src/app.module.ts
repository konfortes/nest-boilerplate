import { Module } from '@nestjs/common'

import { ConfigModule } from './config/config.module'

import { OrderModule } from './order/order.module'
import { HealthModule } from './health/health.module'
import { LoggingModule } from './logging/logging.module'
import { DatabaseModule } from './database/database.module'
import { MonitoringModule } from './monitoring/monitoring.module'

@Module({
  imports: [
    ConfigModule,
    LoggingModule,
    MonitoringModule,
    DatabaseModule,
    HealthModule,
    OrderModule,
  ],
})
export class AppModule {}
