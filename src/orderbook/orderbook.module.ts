import { Module } from '@nestjs/common';
import { OrderBookService } from './orderbook.service';

@Module({
  imports: [],
  controllers: [],
  providers: [OrderBookService],
})
export class OrderbookModule {}
