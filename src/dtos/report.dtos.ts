import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class createReportDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsNotEmpty()
  source: string;
}
