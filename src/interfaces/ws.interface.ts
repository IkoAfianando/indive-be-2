// ws.interface.ts
export interface WsOrderbooks {
  dex: string;
  pair: string;
  data: {
    asks: WsOrderbookItem[];
    bids: WsOrderbookItem[];
  };
}

export interface WsOrderbookItem {
  size: number;
  price: number;
}

export interface WsCandle {
  dex: string;
  pair: string;
  timeframe: string;
  data: {
    timeframe: string;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    timestamp: string;
  }[];
}
