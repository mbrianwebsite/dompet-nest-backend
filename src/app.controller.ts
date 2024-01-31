import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('report/:type')
export class AppController {
  @Get('')
  getAllReports() {
    return ['getAllReports'];
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
