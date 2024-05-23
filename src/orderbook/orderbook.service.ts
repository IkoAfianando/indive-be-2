// orderbook.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Orderbook } from '../interfaces/orderbook.interface';

@Injectable()
export class OrderBookService {
  constructor(
    @InjectModel('Orderbook') private readonly orderbookModel: Model<Orderbook>,
  ) {}

  async saveOrderbook(orderbook: Orderbook): Promise<Orderbook> {
    const newOrderbook = new this.orderbookModel(orderbook);
    return await newOrderbook.save();
  }

  async getOrderbook(dex: string, pair: string): Promise<Orderbook | null> {
    return await this.orderbookModel.findOne({ dex, pair }).exec();
  }
}
