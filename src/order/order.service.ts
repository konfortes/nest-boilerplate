import { Order } from './entities/order.entity'
import { Injectable, Inject } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateOrderDto, UpdateOrderDto } from './dto'
import { Logger } from 'winston'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'

@Injectable()
export class OrderService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private logger: Logger,
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {
    this.logger = logger.child({ loggerName: OrderService.name })
  }

  async create(order: CreateOrderDto): Promise<Order> {
    return this.ordersRepository.save(order)
  }

  async list(): Promise<Order[]> {
    return this.ordersRepository.find()
  }

  async get(id: string): Promise<Order> {
    return this.ordersRepository.findOne(id)
  }

  async update(order: UpdateOrderDto): Promise<any> {
    return this.ordersRepository.update(order.id, order)
  }

  async delete(id: string): Promise<any> {
    this.logger.warn(`deleting order ${id}`)
    return this.ordersRepository.delete(id)
  }
}
