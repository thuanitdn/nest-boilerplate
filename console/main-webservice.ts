import {NestFactory} from '@nestjs/core';
import {WebServiceModule} from '../web-service/app.module';

async function bootstrap() {
  const app = await NestFactory.create(WebServiceModule);
  await app.listen(4000);
}
bootstrap();
