import { Injectable } from '@nestjs/common'
import { CreateOrderDto, UpdateOrderDto } from './dto'
import { AppLogger } from '../logger/logger.service'

@Injectable()
export class OrderService {
  constructor(private logger: AppLogger) {
    this.logger.setContext('OrderService')
  }

  async create(order: CreateOrderDto): Promise<string> {
    return 'created'
  }

  async list(): Promise<string> {
    this.logger.log('listing orders')
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
