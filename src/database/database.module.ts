import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { dbConfigService } from '../config/db.config'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: dbConfigService.getTypeOrmConfig.bind(dbConfigService),
    }),
  ],
})
export class DatabaseModule {}
