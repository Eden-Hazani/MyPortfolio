import { useEffect, useRef, useState } from 'react';
import './App.css';
import { HeadText } from './components/HeadText/HeadText';
import { Terminal } from './components/Terminal/Terminal';

function App() {
  const [terminalActive, setTerminalActive] = useState(false)
  const [startLoadTerminal, setStartLoadTerminal] = useState(false)
  const scrollerHead = useRef(null);
  const scrollerTerminal = useRef(null);


  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      setStartLoadTerminal(true);
    }, 500);
  }, [])



  return (
    <div className="App" >
      <div ref={scrollerHead}>
        {!terminalActive ?
          <HeadText
            isViewable={!terminalActive}
            scroll={() => {
              scrollerTerminal.current.scrollIntoView({ behavior: 'smooth' })
              setTimeout(() => {
                setTerminalActive(true)
              }, 300);
            }} />
          :
          <div style={{ height: window.innerHeight }}></div>
        }

      </div>
      { startLoadTerminal &&
        <div ref={scrollerTerminal} className="terminalScreen" style={{ height: window.innerHeight, backgroundImage: `url(${process.env.PUBLIC_URL}imgs/backgrounds/pleaseStandBy.jpg)` }}>
          {terminalActive ?
            <Terminal
              isViewable={terminalActive}
              scroll={() => {
                setTerminalActive(false)
                setTimeout(() => {
                  scrollerHead.current.scrollIntoView({ behavior: 'smooth' })
                }, 150);
              }} />
            : <div style={{ height: window.innerHeight }}></div>}

        </div>
      }
    </div>
  );
}

export default App;
