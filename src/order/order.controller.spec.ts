import { Test, TestingModule } from '@nestjs/testing'
import { OrderController } from './order.controller'
import { OrderService } from './order.service'

describe('OrdersController', () => {
  let controller: OrderController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService],
    }).compile()

    controller = module.get<OrderController>(OrderController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
  it('should have create method', () => {
    expect(controller.create).toBeDefined()
  })
  it('should have list method', () => {
    expect(controller.list).toBeDefined()
  })
  it('should have create method', () => {
    expect(controller.get).toBeDefined()
  })
})
