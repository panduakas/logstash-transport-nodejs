import { Injectable } from '@nestjs/common';
import { CreateLoggerDto } from './dto/create-logger.dto';
import { Logger } from './entities/logger.entity';
import cuid from 'cuid';

@Injectable()
export class LoggerService {
  private readonly logger: Logger[] = [];

  create(cat: CreateLoggerDto): Logger {
    cuid();
    this.logger.push(cat);
    return cat;
  }

  findOne(requestId: string): Logger {
    return this.logger[requestId];
  }
}
