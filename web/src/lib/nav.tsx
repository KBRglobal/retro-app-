import { createContext, useContext, useState, ReactNode } from "react";

export type ScreenId = "overview" | "board" | "logs" | "team" | "timeline" | "issue";

type Ctx = { active: ScreenId; go: (id: ScreenId) => void };
const NavContext = createContext<Ctx>({ active: "overview", go: () => {} });

export function NavProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<ScreenId>("overview");
  return <NavContext.Provider value={{ active, go: setActive }}>{children}</NavContext.Provider>;
}

export const useNav = () => useContext(NavContext);
