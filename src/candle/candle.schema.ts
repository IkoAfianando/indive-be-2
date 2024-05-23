import * as mongoose from 'mongoose';

export const CandleSchema = new mongoose.Schema({
  dex: String,
  pair: String,
  timeframe: String,
  data: [
    {
      timeframe: String,
      open: Number,
      high: Number,
      low: Number,
      close: Number,
      volume: Number,
      timestamp: Date,
    },
  ],
});
