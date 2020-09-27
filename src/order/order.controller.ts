import { Order } from './entities/order.entity'
import { CreateOrderDto, UpdateOrderDto } from './dto'
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common'
import { OrderService } from './order.service'

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() order: CreateOrderDto): Promise<Order> {
    return this.orderService.create(order)
  }

  @Get()
  list(): Promise<Order[]> {
    return this.orderService.list()
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<Order> {
    return this.orderService.get(id)
  }

  // TODO: type
  @Put(':id')
  update(@Param('id') id: number, @Body() order: UpdateOrderDto): Promise<any> {
    order.id = id
    return this.orderService.update(order)
  }

  // TODO: type
  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.orderService.delete(id)
  }
}
