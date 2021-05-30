import './App.css';
import { HeadSection } from './components/HeadSection/HeadSection'
import { Welcome } from './components/Welcome/Welcome';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { ContactMe } from './components/ContactMe/ContactMe';
import { Footer } from './components/Footer/Footer';
import { Menu } from './components/Menu/Menu';
import { useEffect, useRef, useState } from 'react';

function App() {
  const about = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)
  const [isActiveProject, setIsActiveProject] = useState('')

  const transferFromMenu = (val) => {
    let ref = null;
    if (val === "projects") {
      ref = projects
    } else if (val === 'about') {
      ref = about
    } else if (val === 'contact') {
      ref = contact
    }
    setTimeout(() => {
      window.removeEventListener("wheel", wheelStopper, { passive: false })
      window.removeEventListener("touchmove", wheelStopper, { passive: false });
      document.documentElement.style.overflowY = "auto"
    }, 1200);
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
  }
  const stopWheel = (e) => {
    e.preventDefault()
  }

  const wheelStopper = stopWheel.bind(this);

  useEffect(() => {
    console.log('%c ' + `The jester dragon has trapped me in the console log, it's kinda boring here...`, 'color: green; font-weight:bold')
  }, [])


  return (
    <div className="app" >
      <div ><HeadSection /></div>
      <div className="welcomeDiv"><Welcome /></div>
      <div ref={projects} className="projectsDiv"><Projects setActiveProject={(val) => setIsActiveProject(val)} /></div>
      <div ref={about} className="aboutDiv"><About /></div>
      <div ref={contact} className="contactMeDiv"><ContactMe /></div>
      <div className="footerDiv"><Footer /></div>
      {isActiveProject === '' && <Menu move={(val) => transferFromMenu(val)} />}

    </div>
  );
}

export default App;
