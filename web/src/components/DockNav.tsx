import { Icon } from "@iconify/react";
import { useNav, type ScreenId } from "../lib/nav";

const ITEMS: { id: ScreenId; label: string; icon: string }[] = [
  { id: "overview", label: "Pulse", icon: "lucide:layout-grid" },
  { id: "board", label: "Board", icon: "lucide:trello" },
  { id: "logs", label: "Logs", icon: "lucide:calendar-days" },
  { id: "team", label: "Team", icon: "lucide:users-2" },
  { id: "timeline", label: "Velocity", icon: "lucide:clock-3" },
];

// The premium floating dock — primary navigation across the whole app.
export function DockNav() {
  const { active, go } = useNav();
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-[#0F172A]/95 backdrop-blur-xl rounded-[1.4rem] p-1.5 shadow-2xl shadow-black/40 ring-1 ring-white/10">
        {ITEMS.map((n) => {
          const isActive = active === n.id || (n.id === "board" && active === "issue");
          return (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={`group flex items-center gap-2 px-4 py-2.5 rounded-[1rem] transition-all duration-300 ${
                isActive
                  ? "bg-white text-[#0F172A] shadow-lg shadow-black/20 scale-105"
                  : "text-white/55 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon icon={n.icon} width={18} height={18} />
              <span
                className={`text-xs font-bold tracking-tight transition-all duration-300 ${
                  isActive ? "max-w-[80px] opacity-100" : "max-w-0 opacity-0 overflow-hidden group-hover:max-w-[80px] group-hover:opacity-100"
                }`}
              >
                {n.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
