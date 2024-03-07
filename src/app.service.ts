import { Injectable, Param, Query } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPersonalizedHello(name: string, day: string): string {
    return 'Hello ${name}, have a nice ${day}';
  }

  @Get('/hello/:name')
  buzi(@Param('name') name: string, @Query('day') day: string) {
    return this.appService.getPersonalizedHello(name, day);
  }
}
