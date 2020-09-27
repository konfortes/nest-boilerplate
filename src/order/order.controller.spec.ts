import { WinstonModule } from 'nest-winston'
import { DatabaseModule } from './../database/database.module'
import { LoggingModule } from './../logging/logging.module'
import { Order } from './entities/order.entity'
import { Test } from '@nestjs/testing'
import { OrderController } from './order.controller'
import { OrderService } from './order.service'

describe('OrderController', () => {
  let orderController: OrderController
  // let orderService: OrderService
  const dummyOrder = {
    id: 1,
    merchantUrl: 'foo',
    customerName: 'bar',
    amount: 2,
  }
  const mockedOrderService = {
    create: async () => dummyOrder,
    list: async () => [dummyOrder],
    get: async () => dummyOrder,
    update: async () => '',
    delete: async () => '',
  }

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [OrderService],
    })
      .overrideProvider(OrderService)
      .useValue(mockedOrderService)
      .compile()

    // orderService = moduleRef.get<OrderService>(OrderService)
    orderController = moduleRef.get<OrderController>(OrderController)
  })

  describe('create', () => {
    it('should create and return the created order', async () => {
      const expectedResult: Order = dummyOrder

      expect(
        await orderController.create({
          merchantUrl: 'foo',
          customerName: 'bar',
          amount: 2,
        }),
      ).toStrictEqual(expectedResult)
    })
  })

  describe('findAll', () => {
    it('should return an array of orders', async () => {
      const expectedResult: Order[] = [dummyOrder]
      // jest.spyOn(orderService, 'list').mockImplementation(async () => expectedResult)

      expect(await orderController.list()).toStrictEqual(expectedResult)
    })
  })

  describe('get', () => {
    it('should get an order', async () => {
      const expectedResult: Order = dummyOrder

      expect(await orderController.get('1')).toStrictEqual(expectedResult)
    })
  })

  describe('update', () => {
    it('should update an order', async () => {
      const expectedResult = ''

      expect(await orderController.update(2, dummyOrder)).toStrictEqual(
        expectedResult,
      )
    })
  })

  describe('delete', () => {
    it('should delete an order', async () => {
      const expectedResult = ''

      expect(await orderController.remove('2')).toStrictEqual(expectedResult)
    })
  })
})
