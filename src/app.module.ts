import { AppLogger } from './providers/logger.service'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { OrderController } from './order/order.controller'
import { OrderService } from './order/order.service'
import { TerminusModule } from '@nestjs/terminus'
import { HealthController } from './health/health.controller'

@Module({
  imports: [TerminusModule],
  controllers: [AppController, OrderController, HealthController],
  providers: [AppService, OrderService, AppLogger],
})
export class AppModule {}
