import { Order } from './entities/order.entity'
import { CreateOrderDto, UpdateOrderDto } from './dto'
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  HttpCode,
  NotFoundException,
} from '@nestjs/common'
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
  async get(@Param('id') id: string): Promise<Order> {
    const order = await this.orderService.get(id)
    if (!order) {
      throw new NotFoundException(id, `order ${id} could not be found`)
    }

    return order
  }

  @Put(':id')
  @HttpCode(204)
  update(
    @Param('id') id: number,
    @Body() order: UpdateOrderDto,
  ): Promise<void> {
    order.id = id
    return this.orderService.update(order)
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string): Promise<void> {
    return this.orderService.delete(id)
  }
}
