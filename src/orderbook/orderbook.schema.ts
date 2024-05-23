import * as mongoose from 'mongoose';

export const OrderBookSchema = new mongoose.Schema({
  dex: String,
  pair: String,
  asks: [
    {
      size: Number,
      price: Number,
    },
  ],
  bids: [
    {
      size: Number,
      price: Number,
    },
  ],
});
