import { FC } from 'react'
import { TextScramble } from '../../components/motion-ui/TextScramble'
import { TextLoop } from '../../components/motion-ui/TextLoop'
import { TextEffect } from '../../components/motion-ui/TextEffect'

const InfoBlock: FC = () => {
	return (
		<div className="flex flex-col gap-6 items-center justify-center text-white p-6 bg-neutral-800/40 rounded-3xl border border-white/10 backdrop-blur-md shadow-lg text-4xl font-semibold">
			<p className="flex gap-2 items-center">
				Hey, I'm
				<TextScramble
					characterSet="? "
					duration={1.2}
					className="p-1 bg-violet-500 rounded-xl"
				>
					Pataz1k?👋
				</TextScramble>
			</p>
			<p className="flex gap-2 items-center">
				I'm a
				<TextLoop className="p-1 bg-green-400 rounded-xl">
					<span>Code Crafter</span>
					<span>React Wizard</span>
					<span>UI/UX Advocate</span>
				</TextLoop>
				,
			</p>
			<p className="flex gap-2 items-center">
				Can create
				<TextEffect
					per="word"
					as="h3"
					preset="blur"
					className="p-1 bg-gray-500 rounded-xl"
				>
					beautiful code.
				</TextEffect>
			</p>
		</div>
	)
}
export default InfoBlock
