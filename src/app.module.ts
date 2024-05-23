// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebsocketGateway } from './websocket/websocket.gateway';
import { OrderbookModule } from './orderbook/orderbook.module';
import { CandlerModule } from './candle/candler.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://root:root@127.0.0.1:27017/be2')],
  controllers: [AppController],
  providers: [AppService, WebsocketGateway, OrderbookModule, CandlerModule],
})
export class AppModule {}
