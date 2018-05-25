import {Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import {AppController} from './controller/app.controller';
import {AppService} from './models/service-provider/app/app.service';
import {LoggerMiddleware} from './middleware/logger.middleware';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class WebServiceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/');
  }
}
