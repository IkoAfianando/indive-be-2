import { Module } from '@nestjs/common';
import { CandleService } from './candle.service';

@Module({
  imports: [],
  controllers: [],
  providers: [CandleService],
})
export class CandlerModule {}
