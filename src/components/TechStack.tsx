import React from 'react'
import { motion } from 'motion/react'
import { FaReact, FaNodeJs, FaSass, FaDatabase } from 'react-icons/fa'
import {
	SiNextdotjs,
	SiTypescript,
	SiJavascript,
	SiTailwindcss,
	SiReactquery,
	SiSocketdotio,
	SiExpress,
	SiMongodb,
	SiJsonwebtokens,
	SiAxios,
} from 'react-icons/si'

interface TechStackProps {
	technologies: string[]
}

const techIcons: { [key: string]: React.ElementType } = {
	React: FaReact,
	'Next.js': SiNextdotjs,
	'Node.js': FaNodeJs,
	TypeScript: SiTypescript,
	JavaScript: SiJavascript,
	'Tailwind CSS': SiTailwindcss,
	'Socket.io': SiSocketdotio,
	'React Query': SiReactquery,
	Express: SiExpress,
	MongoDB: SiMongodb,
	JWT: SiJsonwebtokens,
	SASS: FaSass,
	Axios: SiAxios,
	Multer: FaDatabase,
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {
	return (
		<motion.div
			className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
			initial="hidden"
			animate="visible"
			variants={{
				hidden: { opacity: 0 },
				visible: {
					opacity: 1,
					transition: {
						staggerChildren: 0.1,
					},
				},
			}}
		>
			{technologies.map((tech) => {
				const Icon = techIcons[tech] || SiJavascript
				return (
					<motion.div
						key={tech}
						className="flex items-center gap-3 bg-gray-800 rounded-full px-4 py-2 shadow-md transition-all hover:bg-gray-700 hover:shadow-lg"
						variants={{
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
						}}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Icon className="text-2xl text-purple-400" />
						<span className="text-sm font-medium">{tech}</span>
					</motion.div>
				)
			})}
		</motion.div>
	)
}

export default TechStack
