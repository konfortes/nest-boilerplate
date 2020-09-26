import { AppConfigService } from './config/app.config.service'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get(AppConfigService)

  if (config.isDevelopment) {
    app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER))
  }

  const options = new DocumentBuilder()
    .setTitle('hello-nest')
    .setDescription('hello Nest.JS')
    .setVersion('1.0')
    .addTag('orders')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(config.port || 3000)
}
bootstrap()
