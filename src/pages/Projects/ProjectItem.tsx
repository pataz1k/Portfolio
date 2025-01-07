import { FC } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { motion } from 'motion/react'

interface IProject {
	id: number
	title: string
	description: string
	images: string[]
	link: string
	githubUrl: string
	techStack: string[]
}

const ProjectItem: FC<{ project: IProject; index: number }> = ({
	project,
	index,
}) => {
	const truncateDescription = (text: string, maxLength: number) => {
		if (text.length <= maxLength) return text
		return text.slice(0, maxLength).trim() + '...'
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				stiffness: 100,
				damping: 12,
				delay: i * 0.1,
			},
		}),
	}

	return (
		<motion.div
			className="group flex flex-col overflow-hidden rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-lg transition-all duration-300 hover:shadow-xl"
			variants={itemVariants}
			initial="hidden"
			animate="visible"
			custom={index}
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.98 }}
		>
			<div className="relative aspect-video overflow-hidden">
				<motion.img
					src={project.images[0]}
					alt={`${project.title} preview`}
					className="h-full w-full object-cover object-center"
					initial={{ scale: 1 }}
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.3 }}
				/>
			</div>
			<div className="flex flex-1 flex-col justify-between p-6">
				<div>
					<motion.h2
						className="mb-2 text-2xl font-bold text-white"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.3 }}
					>
						{project.title}
					</motion.h2>
					<motion.p
						className="mb-4 text-gray-300 line-clamp-2"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.3 }}
					>
						{truncateDescription(project.description, 100)}
					</motion.p>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.3 }}
				>
					<Link
						to={`/project/${project.id}`}
						className="group/btn flex items-center justify-center gap-2 rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-800"
					>
						Read More
						<motion.div
							initial={{ x: 0 }}
							whileHover={{ x: 5 }}
							transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						>
							<ArrowRight className="h-4 w-4" />
						</motion.div>
					</Link>
				</motion.div>
			</div>
		</motion.div>
	)
}

export default ProjectItem
