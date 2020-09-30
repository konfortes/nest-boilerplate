import { DummyIndicator } from './dummy.indicator'
import { HealthCheckService, HealthCheck } from '@nestjs/terminus'
import { Controller, Get } from '@nestjs/common'

@Controller('alive')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private dummyIndicator: DummyIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([() => this.dummyIndicator.isHealthy()])
  }
}
