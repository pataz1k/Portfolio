import { AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router'
import { useState } from 'react'
import { Tabs } from './Tabs'

export function AnimatedTabs() {
	const [hoveredTab, setHoveredTab] = useState<string | null>(null)

	return (
		<nav className="flex items-center gap-4 rounded-3xl bg-neutral-800/40 px-6 py-3 backdrop-blur-md border border-white/10 shadow-lg">
			{Tabs.map(({ path, icon: Icon, label }) => (
				<NavLink
					key={path}
					to={path}
					className={({ isActive }) =>
						`relative rounded-xl p-3 border border-white/10 transition-colors ${
							isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-100'
						}`
					}
					onMouseEnter={() => setHoveredTab(path)}
					onMouseLeave={() => setHoveredTab(null)}
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
									transition={{ type: 'spring', stiffness: 380, damping: 30 }}
								/>
							)}
							<AnimatePresence>
								{hoveredTab === path && (
									<motion.div
										className="absolute left-1/2 -top-10 transform -translate-x-1/2 bg-neutral-800/40 backdrop-blur-md text-white px-3 py-1 rounded-md text-sm whitespace-nowrap border border-white/10"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ type: 'spring', stiffness: 300, damping: 30 }}
									>
										{label}
									</motion.div>
								)}
							</AnimatePresence>
						</>
					)}
				</NavLink>
			))}
		</nav>
	)
}
