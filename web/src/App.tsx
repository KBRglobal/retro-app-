import { MarketProvider } from "./lib/market";
import { NavProvider, useNav } from "./lib/nav";
import { DockNav } from "./components/DockNav";
import { Overview } from "./screens/Overview";
import { Board } from "./screens/Board";
import { DailyJournal } from "./screens/DailyJournal";
import { IssueDetail } from "./screens/IssueDetail";
import { TeamPanel } from "./screens/TeamPanel";
import { Timeline } from "./screens/Timeline";

function CurrentScreen() {
  const { active } = useNav();
  switch (active) {
    case "board": return <Board />;
    case "logs": return <DailyJournal />;
    case "issue": return <IssueDetail />;
    case "team": return <TeamPanel />;
    case "timeline": return <Timeline />;
    default: return <Overview />;
  }
}

export default function App() {
  return (
    <NavProvider>
      <MarketProvider>
        <CurrentScreen />
        <DockNav />
      </MarketProvider>
    </NavProvider>
  );
}
