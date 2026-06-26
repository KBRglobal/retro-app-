import { Icon } from "@iconify/react";
import { useNav, type ScreenId } from "../lib/nav";

const ITEMS: { id: ScreenId; t: string; i: string }[] = [
  { id: "overview", t: "Project Pulse", i: "lucide:layout-grid" },
  { id: "board", t: "Delivery Board", i: "lucide:trello" },
  { id: "logs", t: "Engineering Logs", i: "lucide:layers" },
  { id: "team", t: "Specialist Force", i: "lucide:users-2" },
  { id: "timeline", t: "Velocity Track", i: "lucide:clock-3" },
];

// Shared, fully-clickable sidebar navigation used by every screen.
export function SideNav() {
  const { active, go } = useNav();
  return (
    <nav className="flex-1 px-4 space-y-1">
      {ITEMS.map((n) => {
        // "issue" is a drill-down of the board — keep the board item lit for it
        const isActive = active === n.id || (n.id === "board" && active === "issue");
        return (
          <button
            key={n.id}
            onClick={() => go(n.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
              isActive
                ? "bg-[#007AFF] text-white shadow-md shadow-blue-500/10"
                : "text-[#64748B] hover:bg-white hover:text-[#0F172A]"
            }`}
          >
            <Icon icon={n.i} width={20} height={20} />
            <span className="text-sm font-bold">{n.t}</span>
          </button>
        );
      })}
    </nav>
  );
}
