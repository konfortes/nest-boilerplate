import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common'
import { InjectHistogramMetric, HistogramMetric } from '@digikare/nestjs-prom'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class MonitoringInterceptor implements NestInterceptor {
  constructor(
    @InjectHistogramMetric('http_requests_duration_seconds')
    private readonly _histogramMetric: HistogramMetric,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const before = Date.now()
    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - before
        // TODO: to seconds?
        this._histogramMetric.observe(duration)
      }),
    )
  }
}
