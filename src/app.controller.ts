import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  welcome(): string {
    return this.appService.getWelcome('Bienvenido la API de Web Scraping Tienda Home Depot MX');
  };
};