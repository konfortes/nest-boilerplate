import { MonitoringModule } from './../monitoring/monitoring.module'
import { Test } from '@nestjs/testing'
import { OrderController } from './order.controller'
import { OrderService } from './order.service'
import { NotFoundException } from '@nestjs/common'

describe('OrderController', () => {
  let orderController: OrderController
  const dummyOrder = {
    id: 1,
    merchantUrl: 'foo',
    customerName: 'bar',
    amount: 2,
  }
  const mockedOrderService = {
    create: async () => dummyOrder,
    list: async () => [dummyOrder],
    get: async id => {
      return id === 1 ? dummyOrder : null
    },
    update: async order => {
      return order.id === 1 ? { affected: 1 } : { affected: 0 }
    },
    delete: async id => {
      return id === 1 ? { affected: 1 } : { affected: 0 }
    },
  }

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      // TODO: imports: [MonitoringModule] can be removed once MonitoringInterceptors becomes global
      imports: [MonitoringModule],
      controllers: [OrderController],
      providers: [OrderService],
    })
      .overrideProvider(OrderService)
      .useValue(mockedOrderService)
      .compile()

    orderController = moduleRef.get<OrderController>(OrderController)
  })

  describe('create', () => {
    it('should create and return the created order', async () => {
      expect(
        await orderController.create({
          merchantUrl: 'foo',
          customerName: 'bar',
          amount: 2,
        }),
      ).toStrictEqual(dummyOrder)
    })
  })

  describe('findAll', () => {
    it('should return an array of orders', async () => {
      expect(await orderController.list()).toStrictEqual([dummyOrder])
    })
  })

  describe('get', () => {
    it('should get an order', async () => {
      expect(await orderController.get(1)).toStrictEqual(dummyOrder)
    })

    describe('given non exist order id', () => {
      it('throws NotFoundException', async () => {
        await expect(orderController.get(2)).rejects.toThrow(NotFoundException)
      })
    })
  })

  describe('update', () => {
    it('should update an order and return no response payload', async () => {
      expect(await orderController.update(1, dummyOrder)).toBeUndefined()
    })

    describe('given non exist order id', () => {
      it('throws NotFoundException', async () => {
        await expect(orderController.update(2, dummyOrder)).rejects.toThrow(
          NotFoundException,
        )
      })
    })
  })

  describe('delete', () => {
    it('should delete an order and return no response payload', async () => {
      expect(await orderController.delete(1)).toBeUndefined()
    })

    describe('given non exist order id', () => {
      it('throws NotFoundException', async () => {
        await expect(orderController.delete(2)).rejects.toThrow(
          NotFoundException,
        )
      })
    })
  })
})
