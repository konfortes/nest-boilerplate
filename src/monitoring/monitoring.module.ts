import { PromModule } from '@digikare/nestjs-prom'
import { Global, Module } from '@nestjs/common'

@Global()
@Module({
  imports: [
    PromModule.forRoot(),
    PromModule.forHistogram({
      name: 'http_requests_duration_seconds',
      help: 'http requests duration in seconds',
    }),
  ],
  exports: [PromModule],
})
export class MonitoringModule {}
