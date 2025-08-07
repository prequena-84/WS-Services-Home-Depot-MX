import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome(text:string): string {
    return text;
  };
};