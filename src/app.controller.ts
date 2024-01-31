import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ReportType, data } from './data';

@Controller('report/:type')
export class AppController {
  @Get('')
  getAllReports(@Param('type') type: string) {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report.filter((report) => report.type === reportType);
  }

  @Get(':id')
  getReportById() {
    return ['getReportById'];
  }

  @Post()
  createReport() {
    return ['createReport'];
  }

  @Put(':id')
  updateReport() {
    return ['updateReport'];
  }

  @Delete(':id')
  deleteReport() {
    return ['deleteReport'];
  }
}
