import { useEffect, useRef, useState } from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import './projects.css'
import { Terminal } from '../Terminal/Terminal'
import { CurrentProject } from '../Projects/CurrentProject/CurrentProject'

export function Projects(props) {
    const [currentProject, setCurrentProject] = useState('')
    const [isTerminal, setIsTerminal] = useState(false)
    const upperRef = useRef(null)
    const lowerRef = useRef(null)
    const chosenProjectRef = useRef(null)
    const isVisUpper = useOnScreen(lowerRef, '0px', .5);

    const openProject = (val) => {
        setCurrentProject(val)
        document.documentElement.style.overflowY = "hidden"
        window.addEventListener("touchmove", wheelStopper, { passive: false });
        window.addEventListener("wheel", wheelStopper, { passive: false })
        chosenProjectRef.current.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            window.removeEventListener("wheel", wheelStopper, { passive: false })
            window.removeEventListener("touchmove", wheelStopper, { passive: false });
        }, 1200);
    }

    const stopWheel = (e) => {
        e.preventDefault()
    }

    const wheelStopper = stopWheel.bind(this);

    const closeProject = () => {
        window.addEventListener("touchmove", wheelStopper, { passive: false });
        window.addEventListener("wheel", wheelStopper, { passive: false })
        setTimeout(() => {
            lowerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }, 200);
        setTimeout(() => {
            document.documentElement.style.overflowY = "auto"
            window.removeEventListener("wheel", wheelStopper, { passive: false })
            window.removeEventListener("touchmove", wheelStopper, { passive: false });
        }, 1200);
        setCurrentProject('')
    }

    const openTerminal = () => {
        document.documentElement.style.overflowY = "hidden"
        setIsTerminal(true)
    }

    const closeTerminal = () => {
        setIsTerminal(false)
        document.documentElement.style.overflowY = "auto"
    }

    useEffect(() => {
        props.setActiveProject(currentProject)
    }, [props, currentProject])

    return (
        <div style={{ display: 'flex', flexDirection: "row", width: window.innerWidth * 2, alignItems: "center", justifyContent: 'center' }}>
            {isTerminal && <Terminal isTerminal={isTerminal} closeTerminal={() => closeTerminal()} />}
            <div className="projectMainContainer">
                <p ref={upperRef} className="regularTxt">Projects</p>
                <div className="dnCreateProjectContainer" onClick={() => openProject('DNCREATE')}>
                    <div className={`dncreateHeadLine ${isVisUpper ? 'enterDncreateHeadLine' : 'closeDnCreateHeadLine'}`}>
                        <span>D</span>
                        <span>n</span>
                        <span>C
                        <span className={`d20Container ${isVisUpper ? '' : ''}`}>
                                <img className={`d20Dice ${isVisUpper ? 'enterD20' : 'closeD20'}`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/d20Dice.svg`} alt="dncreate" />
                            </span>
                        </span>
                        <span>r</span>
                        <span className={`${isVisUpper ? 'dncreateColorify' : 'dncreateRemoveColorify'}`}>e</span>
                        <span className={`${isVisUpper ? 'dncreateColorify' : 'dncreateRemoveColorify'}`}>a</span>
                        <span className={`${isVisUpper ? 'dnscreateColorify' : 'dncreateRemoveColorify'}`}>t</span>
                        <span className={`${isVisUpper ? 'dncreateColorify' : 'dncreateRemoveColorify'}`}>e</span>
                    </div>
                    <img className={`constructionDragon ${isVisUpper ? 'enterConstructionDragon' : 'closeConstructionDragon'}`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/constructionDragon.svg`} alt="dncreate" />
                </div>
                <div ref={lowerRef}>
                    <div onClick={() => openProject('SKYSURF')} className={`skySurfProjectContainer ${isVisUpper ? 'enterSkySurfProject' : 'closeSkySurfProject'}`}>
                        <div className={` ${isVisUpper ? 'skySurfMovement' : ''}`}>
                            <p className={`skySurfHeadLine`}>SkySurf</p>
                            <img className={`plane`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/plane.svg`} alt="dncreate" />
                            <img className={`cloud`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/cloud.svg`} alt="dncreate" />
                        </div>
                    </div>
                </div>
                <div onClick={() => openProject('MORBIZ')} className={`morbizProjectContainer ${isVisUpper ? 'enterSkySurfProject' : 'closeSkySurfProject'}`}>
                    <div style={{ position: 'relative' }}>
                        <p className={`skySurfHeadLine`}>Morbiz</p>
                        <img className={`dragonChef`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/chefDragon.svg`} alt="dncreate" />
                        <img className={`burger`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/burger.svg`} alt="dncreate" />
                    </div>
                </div>
                <img className={`deceitDragon ${isVisUpper ? 'deceitDragonEnter' : 'deceitDragonLeave'}`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/deceitDragon.svg`} alt="dragon"
                    onClick={() => openTerminal()} />

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ position: 'absolute', bottom: `${window.innerWidth < 600 ? '-25%' : '-5%'}` }}>
                    <path fill="#1A759F" fill-opacity="1" d="M0,160L60,170.7C120,181,240,203,360,224C480,245,600,267,720,256C840,245,960,203,1080,186.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>
            <div ref={chosenProjectRef} className="chosenProjectContainer" style={{ width: window.innerWidth, height: window.innerHeight }}>
                {currentProject !== '' && <CurrentProject projectName={currentProject} closeProject={() => closeProject()} />}
                {/* {currentProject === "SKYSURF" && <SkySurf closeProject={() => closeProject()} />}
                {currentProject === "MORBIZ" && <Morbiz closeProject={() => closeProject()} />} */}
            </div>
        </div>
    )
}