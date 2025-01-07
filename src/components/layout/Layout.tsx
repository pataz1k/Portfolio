import { FC, PropsWithChildren } from 'react'
import { AnimatedTabs } from './AnimatedTabs'
import { SpotlightBackground } from './SpotlightBackground'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="flex flex-col min-h-screen">
			<SpotlightBackground />
			<main className="flex-grow z-10 pb-24">{children}</main>
			<footer className="z-20 fixed bottom-0 left-0 right-0 flex justify-center pb-4">
				<AnimatedTabs />
			</footer>
		</div>
	)
}

export default Layout
