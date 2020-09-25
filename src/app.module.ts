import { OrderModule } from './order/order.module'
import { Module } from '@nestjs/common'

import { HealthModule } from './health/health.module'
import { LoggingModule } from './logging/logging.module'

@Module({
  imports: [HealthModule, LoggingModule, OrderModule],
})
export class AppModule {}
