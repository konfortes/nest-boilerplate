import { Module } from '@nestjs/common'
import { OrderController } from './order/order.controller'
import { OrderService } from './order/order.service'
import { TerminusModule } from '@nestjs/terminus'
import { HealthController } from './health/health.controller'
import { LoggerModule } from './logger/logger.module'

@Module({
  imports: [TerminusModule, LoggerModule],
  controllers: [OrderController, HealthController],
  providers: [OrderService],
})
export class AppModule {}
