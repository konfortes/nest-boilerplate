import { OrderService } from './order.service'
import { OrderController } from './order.controller'
import { Module } from '@nestjs/common'

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
