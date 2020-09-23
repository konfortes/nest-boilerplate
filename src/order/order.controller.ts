import { CreateOrderDto, UpdateOrderDto } from './dto'
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common'
import { OrderService } from './order.service'

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() order: CreateOrderDto): Promise<string> {
    return this.orderService.create(order)
  }

  @Get()
  list(): Promise<string> {
    return this.orderService.list()
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<string> {
    return this.orderService.get(id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() order: UpdateOrderDto) {
    return this.orderService.update(order)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.delete(id)
  }
}
