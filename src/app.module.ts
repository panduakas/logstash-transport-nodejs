import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler'
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 1000,
    }),
    LoggerModule,
  ],
})
export class AppModule {}
