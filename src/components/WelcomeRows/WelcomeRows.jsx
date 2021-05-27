import { useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import './welcomeRows.css';

export function WelcomeRows() {
    const animatedRef = useRef(null)
    const isVis = useOnScreen(animatedRef, `${window.innerWidth < 600 ? "0px -20px" : '0px -150px'}`)
    return (
        <div className="welcomeRowContainer" style={{ height: window.innerHeight }}>
            <div className="openingRow">
                <div className="centerOpenWords">
                    <img className={`welcomeLogoImg ${isVis ? 'reduxOpenLogo' : 'reduxCloseLogo'}`} src={`${process.env.PUBLIC_URL}/imgs/logos/redux.svg`} alt={'reduxLogo'} />
                    <span className={`regularTxt ${isVis ? 'myNameOpen' : 'closeMyName'}`}>I'm a fullstack developer</span>
                </div>

            </div>

            <div ref={animatedRef} className="openingRow">
                <div className="centerOpenWords">
                    <img className={`welcomeLogoImg ${isVis ? 'nodeOpenLogo' : 'nodeCloseLogo'}`} src={`${process.env.PUBLIC_URL}/imgs/logos/nodeJS.svg`} alt={'nodeLogo'} />
                    <span className={`regularTxt ${isVis ? 'imOpen' : 'closeImOpen'}`}>with passion for software</span>
                </div>
            </div>


            <div className="openingRow">
                <div className="centerOpenWords">
                    <img className={`welcomeLogoImg ${isVis ? 'jsOpenLogo' : 'jsCloseLogo'}`} src={`${process.env.PUBLIC_URL}/imgs/logos/javascript.svg`} alt={'jsLogo'} />
                    <span className={`regularTxt ${isVis ? 'welcomeOpen' : 'closeWelcomeOpen'}`}>Welcome To My Portfolio</span>
                </div>

            </div>

        </div>
    )
}