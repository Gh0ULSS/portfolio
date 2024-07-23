import './App.css';

import Header from "./Global_Components/Header.jsx";
import Footer from "./Global_Components/Footer.jsx";

import Home from "./Views/Home.jsx";
import About from "./Views/About.jsx";
import Projects from "./Views/Projects.jsx";
//import Experience from "./Views/Experience.jsx";
import CV from "./Views/CV.jsx";
import Reachout from "./Views/Reachout.jsx";


function App() {
  return (
    <div id="main">
      <Header />
      <Home />
      <About />
      <Projects />
      <CV />
      <Reachout />
      <Footer /> 
    </div>
  );
}

export default App;
