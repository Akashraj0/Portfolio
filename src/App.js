import { ChakraProvider } from "@chakra-ui/react";
import './App.css';
import Header from './Components/Header/Header';
import About from "./Components/About/About";
import Projects from './Components/Projects/Projects';
import SkillCard from "./Components/Skill/SkillCard";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Intro from "./Components/Intro/Intro";
function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <Header/>
      <About/>
      <Intro/>
      <SkillCard/>
      <Projects/>
      <Contact/>
      <Footer/>
      </ChakraProvider>
    </div>
  );
}

export default App;
