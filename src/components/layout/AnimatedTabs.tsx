import { motion } from "motion/react";
import { NavLink } from "react-router";
import { Tabs } from "./Tabs";

export function AnimatedTabs() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
      <nav className="flex items-center gap-4 rounded-3xl bg-neutral-800/40 px-6 py-3 backdrop-blur-md border border-white/10 shadow-lg">
        {Tabs.map(({ path, icon: Icon, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `relative rounded-xl p-3 border border-white/10 transition-colors ${
                isActive ? "text-white" : "text-zinc-400 hover:text-zinc-100"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-xl z-[-1]"
                    layoutId="active-tab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
