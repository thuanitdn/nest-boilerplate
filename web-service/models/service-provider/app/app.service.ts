import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findAll() {
    return "good job!!!";
  }
}