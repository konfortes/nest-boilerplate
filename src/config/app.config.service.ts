import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get env(): string {
    return this.configService.get('NODE_ENV') || 'development'
  }

  get isDevelopment(): boolean {
    return this.env === 'development'
  }

  get port(): number {
    return this.configService.get<number>('port')
  }

  get logLevel(): string {
    return this.configService.get<string>('logLevel')
  }
}
