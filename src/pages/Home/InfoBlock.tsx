import { FC } from 'react'
import { motion } from 'framer-motion'
import { TextScramble } from '../../components/motion-ui/TextScramble'
import { TextLoop } from '../../components/motion-ui/TextLoop'
import { TextEffect } from '../../components/motion-ui/TextEffect'

const InfoBlock: FC = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 10,
			},
		},
	}

	return (
		<motion.div
			className="flex flex-col gap-6 items-center justify-center text-white p-6 bg-neutral-800/40 rounded-3xl border border-white/10 backdrop-blur-md shadow-lg text-4xl font-semibold"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.p className="flex gap-2 items-center" variants={itemVariants}>
				Hey, I'm
				<TextScramble
					characterSet="? "
					duration={1.2}
					className="p-1 bg-violet-500 rounded-xl"
				>
					Pataz1k?👋
				</TextScramble>
			</motion.p>
			<motion.p className="flex gap-2 items-center" variants={itemVariants}>
				I'm a
				<TextLoop className="p-1 bg-green-400 rounded-xl">
					<span>Code Crafter</span>
					<span>React Wizard</span>
					<span>UI/UX Advocate</span>
				</TextLoop>
				,
			</motion.p>
			<motion.p className="flex gap-2 items-center" variants={itemVariants}>
				Can create
				<TextEffect
					per="word"
					as="h3"
					preset="blur"
					className="p-1 bg-gray-500 rounded-xl"
				>
					beautiful code.
				</TextEffect>
			</motion.p>
		</motion.div>
	)
}

export default InfoBlock
