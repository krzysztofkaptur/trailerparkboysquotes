import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// get random quote -> GET /api/random

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('random')
  getRandom(): string {
    return this.appService.getRandom();
  }
}
