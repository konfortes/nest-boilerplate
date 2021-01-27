import { HealthController } from './health.controller'
import { Global, Module } from '@nestjs/common'
import { WinstonModule } from 'nest-winston'
import loggerConfig from './logging.config'
import { NR_AGENT } from '../consts'
import { PromModule } from '@digikare/nestjs-prom'
import * as newrelic from 'newrelic'

@Global()
@Module({
  imports: [
    WinstonModule.forRoot(loggerConfig()),
    PromModule.forRoot(),
    // TODO: handle labels cardinality (/orders/:id)
    PromModule.forHistogram({
      name: 'http_requests_duration_seconds',
      help: 'http requests duration in seconds',
      labelNames: ['url', 'method'],
    }),
  ],
  controllers: [HealthController],
  providers: [
    {
      provide: NR_AGENT,
      useValue: newrelic,
    },
  ],
  exports: [PromModule, NR_AGENT],
})
export class CommonModule {}
