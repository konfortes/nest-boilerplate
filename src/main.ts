import { AppLogger } from './providers/logger.service'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: false })
  app.useLogger(new AppLogger())

  const options = new DocumentBuilder()
    .setTitle('hello-nest')
    .setDescription('hello Nest.JS')
    .setVersion('1.0')
    .addTag('orders')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT || 3000)
}
bootstrap()
