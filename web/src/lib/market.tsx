import { createContext, useContext, useState, ReactNode } from "react";
import type { Market } from "./data";

type Ctx = { market: Market; setMarket: (m: Market) => void };
const MarketContext = createContext<Ctx>({ market: "Dubai", setMarket: () => {} });

export function MarketProvider({ children }: { children: ReactNode }) {
  const [market, setMarket] = useState<Market>("Dubai");
  return <MarketContext.Provider value={{ market, setMarket }}>{children}</MarketContext.Provider>;
}

export const useMarket = () => useContext(MarketContext);
