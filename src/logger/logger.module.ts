import {
  Module,
  NestModule,
  MiddlewareConsumer,
} from '@nestjs/common';
import {
  LoggerMiddleware,
} from './common/auth.middleware'

import { LoggerController } from './logger.controller';
import { LoggerService } from './logger.service';

@Module({
  controllers: [LoggerController],
  providers: [LoggerService],
})
export class LoggerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('logger');
  }
}