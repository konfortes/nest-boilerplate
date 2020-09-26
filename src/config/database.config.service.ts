import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class DbConfigService {
  constructor(private configService: ConfigService) {}

  get env(): string {
    return this.configService.get('NODE_ENV') || 'development'
  }

  get isDevelopment() {
    return this.env === 'development'
  }

  get port(): number {
    return this.configService.get<number>('PORT')
  }
}
