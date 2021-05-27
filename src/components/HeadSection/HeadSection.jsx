import { useRef } from "react";
import './headSection.css'
import useOnScreen from "../../hooks/useOnScreen";
import { DragonLogo } from "../DragonLogo.tsx/DragonLogo";


export function HeadSection(props) {
    const mainWord = useRef(null)
    const learnMore = useRef(null)
    const mainWordVisible = useOnScreen(mainWord, `${window.innerWidth < 600 ? "0px" : "-5%"}`)
    const learnMoreVisible = useOnScreen(learnMore, `${window.innerWidth < 600 ? "0px" : "-5%"}`)
    return (

        <div className="headerContainer" style={{ height: window.innerHeight }}>
            <p ref={mainWord} className={`mainPageTxt ${!mainWordVisible ? 'mainPageTxtClose' : 'mainPageTxtOpen'}`}>Hello.</p>
            <DragonLogo />
            <div ref={learnMore} style={{ position: 'relative' }}>
                <div className={`headerGlassShard ${learnMoreVisible ? 'openWelcomeGlass' : 'closeWelcomeGlass'}`}></div>
                <div className={`learnMore ${!learnMoreVisible ? 'learnTxtClose' : 'learnTxtOpen'}`} >
                    <p >I'm Eden</p>
                    <p >I like dragons, the beach, and margaritas</p>
                    <p >Oh.. and I'm also a web developer</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ position: 'absolute', bottom: '0%' }}>
                <path fill="#76C893" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,186.7C384,192,480,160,576,138.7C672,117,768,107,864,122.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>

    );
}

