import { AppConfigService } from './config/app.config.service'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { WINSTON_MODULE_PROVIDER } from 'nest-winston'

async function bootstrap() {
  // TODO: disable internal nest logger on production?
  const app = await NestFactory.create(AppModule)

  bootstrapSwagger(app)

  const config = app.get(AppConfigService)
  const logger = app.get(WINSTON_MODULE_PROVIDER)
  logger.info(`listening on port ${config.port}...`)
  await app.listen(config.port)
}
bootstrap()

const bootstrapSwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('hello-nest')
    .setDescription('hello Nest.JS')
    .setVersion('1.0')
    .addTag('orders')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
}
