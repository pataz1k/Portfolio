import { FC } from 'react'

import ProjectItem from './ProjectItem'
import { IProject } from '../../shared/types'

interface IProjectsList {
	projects: IProject[]
}

const ProjectsList: FC<IProjectsList> = ({ projects }) => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h2 className="mb-8 text-3xl font-bold text-white">My Projects</h2>
			<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
				{projects.map((project, index) => (
					<ProjectItem key={project.title} index={index} project={project} />
				))}
			</div>
		</div>
	)
}

export default ProjectsList
