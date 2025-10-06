import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Throttle } from '@nestjs/throttler';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Throttle({ global: { limit: 5, ttl: 60000 } })
  getHello(): string {
    return 'This is route is throttled to 5 requests per minute.';
  }
}
