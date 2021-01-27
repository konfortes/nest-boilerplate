import { Module } from '@nestjs/common'

import { ConfigModule } from './config/config.module'

import { OrderModule } from './order/order.module'
import { DatabaseModule } from './database/database.module'
import { CommonModule } from './common/common.module'

@Module({
  imports: [CommonModule, ConfigModule, DatabaseModule, OrderModule],
})
export class AppModule {}
