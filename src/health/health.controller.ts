import {
  HealthIndicator,
  HealthIndicatorResult,
  HealthCheckError,
  HealthCheckService,
  HealthCheck,
} from '@nestjs/terminus'
import { Controller, Get } from '@nestjs/common'

// TODO: should be defined and used as a provider
class DummyHealthIndicator extends HealthIndicator {
  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    const isHealthy = true
    const result = this.getStatus(key, true)

    if (isHealthy) {
      return result
    }
    throw new HealthCheckError('Dogcheck failed', result)
  }
}

@Controller('alive')
export class HealthController {
  constructor(private health: HealthCheckService) {}
  private dummy: DummyHealthIndicator = new DummyHealthIndicator()

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([() => this.dummy.isHealthy('dummy')])
  }
}
