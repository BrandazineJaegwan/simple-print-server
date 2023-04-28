import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/ping')
  ping(): string {
    return this.appService.getHello();
  }

  @Post('/printer')
  printer(@Body() printerDto: { template_name: string; context: any }): string {
    console.log('printerDto', printerDto);
    return 'success';
  }
}
