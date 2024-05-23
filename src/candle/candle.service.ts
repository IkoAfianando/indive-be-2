// candle.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Candle } from '../interfaces/candle.interface';

@Injectable()
export class CandleService {
  constructor(
    @InjectModel('Candle') private readonly candleModel: Model<Candle>,
  ) {}

  async saveCandle(candle: Candle): Promise<Candle> {
    const newCandle = new this.candleModel(candle);
    return await newCandle.save();
  }

  async getCandle(
    dex: string,
    pair: string,
    timeframe: string,
  ): Promise<Candle | null> {
    return await this.candleModel.findOne({ dex, pair, timeframe }).exec();
  }
}
