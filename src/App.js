import './App.css';
import { HeadSection } from './components/HeadSection/HeadSection'
import { Welcome } from './components/Welcome/Welcome';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { ContactMe } from './components/ContactMe/ContactMe';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <div className="app" >
      <div className="appChild"><HeadSection /></div>
      <div className="appChild welcomeDiv"><Welcome /></div>
      <div className="appChild projectsDiv"><Projects /></div>
      <div className="appChild aboutDiv"><About /></div>
      <div className="appChild contactMeDiv"><ContactMe /></div>
      <div className="appChild footerDiv"><Footer /></div>
      {/* <div className="terminalScreen" style={{ height: window.innerHeight, backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/backgrounds/pleaseStandBy.jpg)` }}>
        <Terminal />
      </div> */}

    </div>
  );
}

export default App;
