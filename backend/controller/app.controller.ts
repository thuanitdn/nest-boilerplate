import {Get, Post, Body, Controller, Render} from '@nestjs/common';
import * as rp from 'request-promise';

@Controller()
export class AppController {
  constructor() {
  }

  @Get()
  @Render('index')
  root(): string {}

  @Post('/login')
  public async postLogin(@Body('email') email,
                         @Body('password') password){
    rp('http://www.google.com')
      .then(function (htmlString) {
        console.log(htmlString);
        // Process html...
      })
      .catch(function (err) {
        // Crawling failed...
      });
    return email;
  }
}
