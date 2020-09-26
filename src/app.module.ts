import { AppConfigModule } from './config/config.module'
import { Module } from '@nestjs/common'

import { OrderModule } from './order/order.module'
import { HealthModule } from './health/health.module'
import { LoggingModule } from './logging/logging.module'

@Module({
  imports: [AppConfigModule, LoggingModule, HealthModule, OrderModule],
})
export class AppModule {}
