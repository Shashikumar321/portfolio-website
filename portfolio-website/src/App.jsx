import "./App.css";
import Header from "./components/Header.jsx";
import Introduction from "./components/Introduction.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Hobbies from "./components/Hobbies.jsx";
import ContactMe from "./components/ContactMe.jsx";


function App() {
  return (
    <>
      <div className="relative">
        <Header />
        <Introduction />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Hobbies />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
