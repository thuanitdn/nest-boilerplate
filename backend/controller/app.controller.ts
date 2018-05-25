import {Get, Controller, Render} from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {
  }

  @Get()
  @Render('index')
  root(): string {
    return "";
  }
}
