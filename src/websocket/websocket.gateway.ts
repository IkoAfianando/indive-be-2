// websocket.gateway.ts
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { OrderBookService } from '../orderbook/orderbook.service';
import { CandleService } from '../candle/candle.service';
import { WsOrderbooks, WsCandle } from '../interfaces/ws.interface';

@WebSocketGateway()
export class WebsocketGateway {
  constructor(
    private readonly orderbookService: OrderBookService,
    private readonly candleService: CandleService,
  ) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('subscribeOrderbook')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async subscribeOrderbook(@MessageBody() data: any): Promise<void> {
    // Logic to subscribe to orderbook and send data
  }

  @SubscribeMessage('subscribeCandle')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async subscribeCandle(@MessageBody() data: any): Promise<void> {
    // Logic to subscribe to candle and send data
  }

  handleOrderbookData(orderbookData: WsOrderbooks) {
    // Send orderbook data to subscribed clients
    this.server.emit('orderbook', orderbookData);
  }

  handleCandleData(candleData: WsCandle) {
    // Send candle data to subscribed clients
    this.server.emit('candle', candleData);
  }
}
