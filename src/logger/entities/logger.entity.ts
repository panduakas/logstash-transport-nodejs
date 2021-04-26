import { ApiProperty } from '@nestjs/swagger';

export class Logger {
  /**
   * Logger entity
   * @example logger
   */
  label: string;

  @ApiProperty({
    example: 'service-transaction',
    description: 'Current request service name'
  })
  service: string;

  @ApiProperty({
    example: 'service-logger',
    description: 'Destination request service name'
  })
  toService: string;

  @ApiProperty({
    example: '200',
    description: 'Response statusCode'
  })
  statusCode: string;

  @ApiProperty({
    example: 'request',
    description: 'Message exchange patterns'
  })
  mep: string;

  @ApiProperty({
    example: 'info',
    description: 'Log level'
  })
  level: string;

  @ApiProperty({
    example: 'Hello World',
    description: 'Log message'
  })
  message: string;

  @ApiProperty({
    example: 'random-string',
    description: 'Unique request id (CUID)'
  })
  requestId: string;

  @ApiProperty({
    example: 'POST',
    description: 'Http request method'
  })
  method: string;

  @ApiProperty({
    example: {
      hello: 'world',
    },
    description: 'Data log',
  })
  data: object;
}
