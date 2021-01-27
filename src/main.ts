import 'newrelic'
import { bootstrapSwagger } from './swagger'
import { AppConfigService } from './config/app.config.service'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  // TODO: disable internal nest logger on production?
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  app.enableShutdownHooks()

  const config = app.get(AppConfigService)

  if (config.isDevelopment) {
    bootstrapSwagger(app)
  }

  const logger = app.get(WINSTON_MODULE_PROVIDER)
  logger.info(`listening on port ${config.port}...`)
  await app.listen(config.port)
}
bootstrap()
