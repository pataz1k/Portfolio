import { FC, useEffect, useState } from 'react'
import { TextScramble } from '../../components/motion-ui/TextScramble'
import { TextLoop } from '../../components/motion-ui/TextLoop'
import { TextEffect } from '../../components/motion-ui/TextEffect'
import TechStack from '../../components/TechStack'
import { motion } from 'motion/react'
import {
	MessageCircleQuestionIcon as QuestionMarkCircle,
	Github,
	GitCommit,
	GitFork,
} from 'lucide-react'

interface GithubInfo {
	repos: number
	followers: number
	commitCount: number
	lastUpdatedRepo: string
}

const AboutMe: FC = () => {
	const [githubInfo, setGithubInfo] = useState<GithubInfo | null>(null)

	useEffect(() => {
		const fetchGithubInfo = async () => {
			try {
				const username = 'pataz1k'
				const userResponse = await fetch(
					`https://api.github.com/users/${username}`
				)
				const userData = await userResponse.json()

				const reposResponse = await fetch(
					`https://api.github.com/users/${username}/repos?sort=updated&per_page=1`
				)
				const [lastUpdatedRepo] = await reposResponse.json()

				const eventsResponse = await fetch(
					`https://api.github.com/users/${username}/events`
				)
				const events = await eventsResponse.json()
				const commitCount = events
					.filter((event: any) => event.type === 'PushEvent')
					.reduce(
						(acc: number, event: any) => acc + event.payload.commits.length,
						0
					)

				setGithubInfo({
					repos: userData.public_repos,
					followers: userData.followers,
					commitCount,
					lastUpdatedRepo: lastUpdatedRepo.name,
				})
			} catch (error) {
				console.error('Error fetching GitHub info:', error)
			}
		}

		fetchGithubInfo()
	}, [])

	const technologies = [
		'React',
		'Next.js',
		'Node.js',
		'TypeScript',
		'JavaScript',
		'SASS',
		'Tailwind CSS',
		'Zustand',
		'React Query',
		'Socket.io',
		'Express',
		'MongoDB',
		'JWT',
		'Axios',
	]

	return (
		<div className="flex flex-col items-center justify-center min-h-screen text-white p-6">
			<motion.div
				className="max-w-4xl w-full space-y-12 bg-neutral-800/40 rounded-3xl border border-white/10 backdrop-blur-md shadow-lg p-8"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="flex items-center justify-between">
					<div className="space-y-2">
						<h1 className="text-4xl font-bold">
							<TextScramble characterSet="? " duration={1.2}>
								About Me
							</TextScramble>
						</h1>
						<p className="text-xl">
							<TextLoop>
								<span>Code Crafter</span>
								<span>React Wizard</span>
								<span>UI/UX Advocate</span>
							</TextLoop>
						</p>
					</div>
					<div className="bg-violet-500 rounded-full p-4">
						<QuestionMarkCircle size={64} />
					</div>
				</div>

				<div>
					<h2 className="text-2xl font-semibold mb-4">What I Do</h2>
					<TextEffect per="word" as="p" preset="blur" className="text-lg">
						I specialize in creating beautiful, efficient, and scalable web
						applications. My passion lies in crafting seamless user experiences
						and robust backend systems.
					</TextEffect>
				</div>

				<div>
					<h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
					<TechStack technologies={technologies} />
				</div>

				{githubInfo && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h2 className="text-2xl font-semibold mb-4">GitHub Stats</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="flex items-center space-x-4 bg-gray-700/50 rounded-lg p-4">
								<Github size={24} />
								<span>Public Repos: {githubInfo.repos}</span>
							</div>
							<div className="flex items-center space-x-4 bg-gray-700/50 rounded-lg p-4">
								<Github size={24} />
								<span>Followers: {githubInfo.followers}</span>
							</div>
							<div className="flex items-center space-x-4 bg-gray-700/50 rounded-lg p-4">
								<GitCommit size={24} />
								<span>Recent Commits: {githubInfo.commitCount}</span>
							</div>
							<div className="flex items-center space-x-4 bg-gray-700/50 rounded-lg p-4">
								<GitFork size={24} />
								<span>Last Updated: {githubInfo.lastUpdatedRepo}</span>
							</div>
						</div>
					</motion.div>
				)}
			</motion.div>
		</div>
	)
}

export default AboutMe
