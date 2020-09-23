import { Injectable } from '@nestjs/common'
import { CreateOrderDto, UpdateOrderDto } from './dto'

@Injectable()
export class OrderService {
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
    return `deleted ${id}`
  }
}
