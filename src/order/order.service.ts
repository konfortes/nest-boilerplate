import { Injectable, Inject } from '@nestjs/common'
import { CreateOrderDto, UpdateOrderDto } from './dto'
import { Logger } from 'winston'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'

@Injectable()
export class OrderService {
  constructor(@Inject(WINSTON_MODULE_PROVIDER) private logger: Logger) {
    this.logger = logger.child({ loggerName: OrderService.name })
  }

  async create(order: CreateOrderDto): Promise<string> {
    return 'created'
  }

  async list(): Promise<string> {
    return 'here are your orders!'
  }

  async get(id: string): Promise<string> {
    return `here is order ${id}`
  }

  async update(order: UpdateOrderDto): Promise<string> {
    return 'updated'
  }

  async delete(id: string): Promise<string> {
    this.logger.warn(`deleting order ${id}`)
    return `deleted ${id}`
  }
}
