import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
 /* const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableCors({
    origin: 'http://localhost:3000'
  })
  await app.listen(5000);
  */

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://jmhtekkg:OPnk3kzAD5PcqRUDKiiAFknc0J6Ka6Rv@gerbil.rmq.cloudamqp.com/jmhtekkg'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  app.listen(()=>{
    console.log('Microservice is listening')
  })
}
bootstrap();
