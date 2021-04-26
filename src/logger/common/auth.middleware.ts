
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
// import * as auth from 'basic-auth';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // const result = auth(req)
    // console.log('result: ', result);
    console.log('Request...');
    next();
  }
}