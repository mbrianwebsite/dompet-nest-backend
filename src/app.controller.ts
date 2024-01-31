import { Controller, Get } from '@nestjs/common';

@Controller('hi')
export class AppController {
  @Get('')
  getAllIncomeReports() {
    return [];
  }

  @Get('hello')
  getAllIncomeReports2() {
    return {};
  }
}
