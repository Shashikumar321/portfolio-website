import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <div className="">
      <Header />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Hobbies />
      <Contact />
      <BackToTopButton />
    </div>
  );
}

export default App;
