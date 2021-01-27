import { NR_AGENT } from '../consts'
import { PrometheusInterceptor } from '../common/prometheus.interceptor'
import { Order } from './entities/order.entity'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
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
  UseInterceptors,
  Inject,
} from '@nestjs/common'
import { OrderService } from './order.service'

@Controller('orders')
// TODO: Global interceptor
@UseInterceptors(PrometheusInterceptor)
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    @Inject(NR_AGENT) private metricsAgent,
  ) {}

  @Post()
  create(@Body() order: CreateOrderDto): Promise<Order> {
    return this.orderService.create(order)
  }

  @Get()
  async list(): Promise<Order[]> {
    return this.orderService.list()
  }

  @Get(':id')
  async get(@Param('id') id: number): Promise<Order> {
    const order = await this.orderService.get(id)
    if (!order) {
      await this.metricsAgent.recordCustomEvent(
        'nodejs_service_skeleton_get_not_found',
        { foo: 'bar' },
      )
      throw new NotFoundException(id, `order ${id} could not be found`)
    }

    return order
  }

  @Put(':id')
  @HttpCode(204)
  async update(
    @Param('id') id: number,
    @Body() order: UpdateOrderDto,
  ): Promise<void> {
    order.id = id

    const result = await this.orderService.update(order)

    if (result.affected == 0) {
      throw new NotFoundException(id, `order ${id} could not be found`)
    }
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: number): Promise<void> {
    const result = await this.orderService.delete(id)
    if (result.affected == 0) {
      throw new NotFoundException(id, `order ${id} could not be found`)
    }
  }
}
