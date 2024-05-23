// candle.interface.ts
export interface Candle {
  dex: string;
  pair: string;
  timeframe: string;
  data: CandleData[];
}

export interface CandleData {
  timeframe: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  timestamp: string;
}
