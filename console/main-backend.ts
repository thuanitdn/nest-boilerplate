import {NestFactory} from '@nestjs/core';
import {BackendModule} from '../backend/app.module';

async function bootstrap() {
  const app = await NestFactory.create(BackendModule);
  app.useStaticAssets(__dirname + '/../backend/public');
  app.setBaseViewsDir(__dirname + '/../backend/views');
  app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();
