import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { motion } from 'motion/react'
import { FC } from 'react'
import { Link, useParams } from 'react-router'
import TechStack from '../../components/TechStack'
import projects from '../../data/projects.json'
import ImageGallery from '../../components/ui/ImageGallery'

const DetailProject: FC = () => {
	const { projectId } = useParams<{ projectId: string }>()
	const project = projects.find((p) => p.id === Number(projectId))

	if (!project) {
		return (
			<div className="container mx-auto px-4 py-8 text-center">
				Project not found
			</div>
		)
	}

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
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
			className="container mx-auto px-4 py-12 max-w-4xl mb-24"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.div variants={itemVariants}>
				<Link
					to="/projects"
					className="inline-flex items-center text-purple-500 hover:text-purple-600 mb-8 transition-colors"
				>
					<ArrowLeft className="mr-2" />
					Back to Projects
				</Link>
			</motion.div>
			<motion.h1
				className="text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
				variants={itemVariants}
			>
				{project.title}
			</motion.h1>
			<motion.p
				className="text-xl text-gray-300 mb-10 leading-relaxed"
				variants={itemVariants}
			>
				{project.description}
			</motion.p>

			<ImageGallery images={project.images} />

			<motion.div className="my-12 " variants={containerVariants}>
				<motion.h2
					className="text-3xl font-semibold mb-6 text-gradient bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
					variants={itemVariants}
				>
					Features
				</motion.h2>
				<motion.ul
					className="list-disc list-inside space-y-2"
					variants={containerVariants}
				>
					{project.features.map((feature, index) => (
						<motion.li
							key={index}
							variants={itemVariants}
							className="text-gray-300"
						>
							{feature}
						</motion.li>
					))}
				</motion.ul>
			</motion.div>

			<motion.div className="mb-12" variants={containerVariants}>
				<motion.h2
					className="text-3xl font-semibold mb-6 text-gradient bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
					variants={itemVariants}
				>
					Tech Stack
				</motion.h2>
				<TechStack technologies={project.techStack} />
			</motion.div>

			<motion.div
				className="flex flex-wrap gap-6 mb-8"
				variants={containerVariants}
			>
				<motion.a
					href={project.link}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
					variants={itemVariants}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<ExternalLink className="mr-3" />
					Visit Project
				</motion.a>
				<motion.a
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center bg-gray-800 text-white px-8 py-4 rounded-full hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg"
					variants={itemVariants}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Github className="mr-3" />
					View on GitHub
				</motion.a>
			</motion.div>
		</motion.div>
	)
}

export default DetailProject
