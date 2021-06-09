import { useEffect, useRef, useState } from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import './projects.css'
import { Terminal } from '../Terminal/Terminal'
import { CurrentProject } from '../Projects/CurrentProject/CurrentProject'

export function Projects(props) {
    const [currentProject, setCurrentProject] = useState('')
    const [isTerminal, setIsTerminal] = useState(false)
    const [mainPageWidth, setMainPageWidth] = useState(true)
    const skySurferRef = useRef(null)
    const dnCreateRef = useRef(null)
    const sweetBashRef = useRef(null)
    const morbizRef = useRef(null)
    const isVisDnCreateRef = useOnScreen(dnCreateRef, '0px', .5);
    const isVisSweetBashRef = useOnScreen(sweetBashRef, '0px', .5);
    const isVisSkySurferRef = useOnScreen(skySurferRef, '0px', .5);
    const isVisMorbizRef = useOnScreen(morbizRef, '0px', .5);

    const openProject = (val) => {
        setMainPageWidth(false)
        setCurrentProject(val)
        document.documentElement.style.overflowY = "hidden"
    }


    const closeProject = () => {
        setMainPageWidth(true)
        setTimeout(() => {
            document.documentElement.style.overflowY = "auto"
            setCurrentProject('')
        }, 1800);
    }

    const openTerminal = () => {
        document.documentElement.style.overflowY = "hidden"
        setMainPageWidth(false)
        setIsTerminal(true)
    }

    const closeTerminal = () => {
        setMainPageWidth(true)
        setTimeout(() => {
            setIsTerminal(false)
            document.documentElement.style.overflowY = "auto"
        }, 1800);
    }

    useEffect(() => {
        props.setActiveProject(currentProject)
    }, [props, currentProject])

    return (
        <div className={`projectFatherContainer`} >
            {isTerminal && <Terminal isTerminal={isTerminal} closeTerminal={() => closeTerminal()} />}
            <div className={`projectMainContainer ${mainPageWidth ? 'terminalOpening' : 'terminalClosing'}`} >
                <p className="projectMainHeadline">Projects</p>
                <p className="projectHeader">DnCreate</p>
                <div className="projectInnerContainer">
                    <div ref={dnCreateRef} className="projectBox" onClick={() => openProject('DNCREATE')}>
                        <img src={`${process.env.PUBLIC_URL}/imgs/dnCreateImgs/mainApp.svg`} alt={'main'} className={`projectCardImg`} />
                        <img src={`${process.env.PUBLIC_URL}/imgs/dnCreateImgs/characterPage.svg`} alt={'main'} className={`projectCardBackImg ${isVisDnCreateRef ? 'projectCardRightIOpen' : 'projectCardRightIClose'}`} />
                        <img src={`${process.env.PUBLIC_URL}/imgs/dnCreateImgs/quests.svg`} alt={'main'} className={`projectCardBackImg ${isVisDnCreateRef ? 'projectCardRightIIOpen' : 'projectCardRightIIClose'}`} />
                        <img src={`${process.env.PUBLIC_URL}/imgs/dnCreateImgs/adventure.svg`} alt={'main'} className={`projectCardBackImg ${isVisDnCreateRef ? 'projectCardLeftIOpen' : 'projectCardLeftIClose'}`} />
                        <img src={`${process.env.PUBLIC_URL}/imgs/dnCreateImgs/raceMenu.svg`} alt={'main'} className={`projectCardBackImg ${isVisDnCreateRef ? 'projectCardLeftIIOpen' : 'projectCardLeftIIClose'}`} />
                    </div>
                    <p className="projectHeader">Sweet Bash</p>
                    <div ref={sweetBashRef} className="projectBox" onClick={() => openProject('SWEETBASH')}>
                        <img src={`${process.env.PUBLIC_URL}/imgs/sweetBash/mainApp.svg`} alt={'main'} className={`projectCardImg`} />
                        <img src={`${process.env.PUBLIC_URL}/imgs/sweetBash/homeScreen.svg`} alt={'main'} className={`projectCardBackImg ${isVisSweetBashRef ? 'projectCardRightIOpen' : 'projectCardRightIClose'}`} />
                        <img src={`${process.env.PUBLIC_URL}/imgs/sweetBash/loseScreen.svg`} alt={'main'} className={`projectCardBackImg ${isVisSweetBashRef ? 'projectCardRightIIOpen' : 'projectCardRightIIClose'}`} />
                        <img src={`${process.env.PUBLIC_URL}/imgs/sweetBash/scoreBoard.svg`} alt={'main'} className={`projectCardBackImg ${isVisSweetBashRef ? 'projectCardLeftIOpen' : 'projectCardLeftIClose'}`} />
                        <img src={`${process.env.PUBLIC_URL}/imgs/sweetBash/gameScreen.svg`} alt={'main'} className={`projectCardBackImg ${isVisSweetBashRef ? 'projectCardLeftIIOpen' : 'projectCardLeftIIClose'}`} />
                    </div>
                    <p className="projectHeader">Sky Surf</p>
                    <div ref={skySurferRef} className="projectBox" onClick={() => openProject('SKYSURF')}>
                        <img src={`${process.env.PUBLIC_URL}/imgs/skySurfImgs/mainApp.svg`} alt={'main'} className={`projectCardImgMonitor`} />
                        <img src={`${process.env.PUBLIC_URL}/imgs/skySurfImgs/homeScreen.svg`} alt={'main'} className={`projectCardBackImgMonitor ${isVisSkySurferRef ? 'projectCardRightIOpen' : 'projectCardRightIClose'}`} />
                        <img src={`${process.env.PUBLIC_URL}/imgs/skySurfImgs/vacations.svg`} alt={'main'} className={`projectCardBackImgMonitor ${isVisSkySurferRef ? 'projectCardLeftIOpen' : 'projectCardLeftIClose'}`} />
                    </div>
                    <p className="projectHeader">Morbiz</p>
                    <div style={{ paddingBottom: '25vh' }} ref={morbizRef} className="projectBox" onClick={() => openProject('MORBIZ')}>
                        <img src={`${process.env.PUBLIC_URL}/imgs/morbizImgs/mainApp.svg`} alt={'main'} className={`projectCardImgMonitor`} />
                        <img src={`${process.env.PUBLIC_URL}/imgs/morbizImgs/homeScreen.svg`} alt={'main'} className={`projectCardBackImgMonitor ${isVisMorbizRef ? 'projectCardRightIOpen' : 'projectCardRightIClose'}`} />
                        <img src={`${process.env.PUBLIC_URL}/imgs/morbizImgs/orderScreen.svg`} alt={'main'} className={`projectCardBackImgMonitor ${isVisMorbizRef ? 'projectCardLeftIOpen' : 'projectCardLeftIClose'}`} />
                    </div>
                </div>
                <img className={`deceitDragon ${isVisDnCreateRef ? 'deceitDragonEnter' : 'deceitDragonLeave'}`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/deceitDragon.svg`} alt="dragon"
                    onClick={() => openTerminal()} />
            </div>
            {currentProject !== '' && <CurrentProject projectName={currentProject} closeProject={() => closeProject()} />}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ position: 'absolute', bottom: `0%` }}>
                <path fill="#1A759F" fill-opacity="1" d="M0,160L60,170.7C120,181,240,203,360,224C480,245,600,267,720,256C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </div>
    )
}