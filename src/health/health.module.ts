import { DummyIndicator } from './dummy.indicator'
import { HealthController } from './health.controller'
import { TerminusModule } from '@nestjs/terminus'
import { Module } from '@nestjs/common'

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [DummyIndicator],
})
export class HealthModule {}
