import { FC } from 'react'
import InfoBlock from './InfoBlock'
import { motion } from 'framer-motion'

const Home: FC = () => {
	return (
		<div className="relative w-screen h-screen overflow-hidden">
			<BackgroundAnimation />
			<motion.div
				className="flex w-full h-full justify-center items-center"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
			>
				<InfoBlock />
			</motion.div>
		</div>
	)
}

const BackgroundAnimation: FC = () => {
	return (
		<div className="absolute inset-0 -z-10">
			{[...Array(70)].map((_, i) => (
				<motion.div
					key={i}
					className="absolute bg-purple-400 rounded-full"
					style={{
						width: Math.random() * 3 + 2,
						height: Math.random() * 3 + 2,
						top: `${Math.random() * 100}%`,
						left: `${Math.random() * 100}%`,
					}}
					animate={{
						y: [0, Math.random() * 100 - 50],
						opacity: [0, 1, 0],
					}}
					transition={{
						duration: Math.random() * 5 + 5,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
			))}
		</div>
	)
}

export default Home
