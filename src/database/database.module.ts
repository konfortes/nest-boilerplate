import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DbConfigService } from '../config/db.config.service'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DbConfigService,
    }),
  ],
})
export class DatabaseModule {}
