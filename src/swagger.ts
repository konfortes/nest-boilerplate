import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

export const bootstrapSwagger = (app) => {
  const options = new DocumentBuilder()
    .setTitle('nodejs-service-skeleton')
    .setDescription('Node.Js Service Skeleton')
    .setVersion('1.0')
    .addTag('skeleton')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
}
