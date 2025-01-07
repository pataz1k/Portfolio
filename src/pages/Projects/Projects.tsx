import { FC } from 'react'
import ProjectsList from './ProjectsList'
import projects from '../../data/projects.json'

const Projects: FC = () => {
	return <ProjectsList projects={projects} />
}
export default Projects
