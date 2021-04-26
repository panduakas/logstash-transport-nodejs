import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LoggerService } from './logger.service';
import { CreateLoggerDto } from './dto/create-logger.dto';
import { Logger } from './entities/logger.entity';

@ApiBearerAuth()
@ApiTags('logger')
@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @Post()
  @ApiOperation({ summary: 'Create log' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createLoggerDto: CreateLoggerDto): Promise<Logger> {
    return this.loggerService.create(createLoggerDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Logger,
  })
  findOne(@Query('requestId') requestId: string): Logger {
    return this.loggerService.findOne(requestId);
  }
}
