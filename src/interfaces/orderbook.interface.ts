// orderbook.interface.ts
export interface Orderbook {
  dex: string;
  pair: string;
  data: {
    asks: OrderbookItem[];
    bids: OrderbookItem[];
  };
}

export interface OrderbookItem {
  size: number;
  price: number;
}
