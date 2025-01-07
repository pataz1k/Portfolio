import { Route, Routes } from 'react-router'
import AboutMe from './pages/AboutMe/AboutMe'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import DetailProject from './pages/DetailProject/DetailProject'

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/project/:projectId" element={<DetailProject />} />
			<Route path="/about-me" element={<AboutMe />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	)
}

export default App
