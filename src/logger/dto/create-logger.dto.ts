import { IsString, IsObject } from 'class-validator';

export class CreateLoggerDto {
  @IsString()
  readonly label: string;

  @IsString()
  readonly service: string;
  
  @IsString()
  readonly toService: string;

  @IsString()
  readonly statusCode: string;

  @IsString()
  readonly mep: string;

  @IsString()
  readonly level: string;

  @IsString()
  readonly message: string;

  @IsString()
  readonly requestId: string;

  @IsString()
  readonly method: string;

  @IsObject()
  readonly data: object;
}
