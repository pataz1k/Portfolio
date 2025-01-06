import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
