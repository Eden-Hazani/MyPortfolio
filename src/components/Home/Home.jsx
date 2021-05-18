import { useEffect, useState } from "react";
import { saveSession, typeWriterButtonEffect, typeWriterEffect } from "../../utility/utilityFunctions";
import useIsMounted from '../../hooks/useIsMounted'
import './home.css'

export function Home(props) {
    const isMounted = useIsMounted()
    const [upperTextBody, setUpperTextBody] = useState({
        firstRow: '',
        secondRow: '',
        thirdRow: '',
        fourthRow: '',
    })
    const [lowerTextBody, setLowerTextBody] = useState({
        firstRow: '',
        secondRow: '',
        thirdRow: '',
        fourthRow: '',
        fifthRow: '',
    })

    const [aboutTextBody, setAboutTextBody] = useState({
        firstRow: '',
        secondRow: '',
    })

    const [isAboutTutorial, setIsAboutTutorial] = useState(sessionStorage.getItem('isTutorial') ? JSON.parse(sessionStorage.getItem('isTutorial')) : null)

    const handleClick = () => {
        const result = saveSession('aboutClick');
        setIsAboutTutorial(result)
    }

    const startType = async () => {
        await typeWriterEffect('interface Home {', 'flashBar', 'mainHeader', 30, 220, (val) => changeState(setUpperTextBody, 'firstRow', val));
        await typeWriterEffect("Whoa... seems like we went a bit far in time, this place looks like the 50's", 'flashBarPurple', 'purpleTxt', 30, 220, (val) => changeState(setUpperTextBody, 'secondRow', val));
        await typeWriterEffect("Try to Click on the different text lines, thats probably the way to navigate this old terminal", 'flashBarPurple', 'purpleTxt', 30, 220, (val) => changeState(setUpperTextBody, 'thirdRow', val));


        await typeWriterEffect('projects = () => {', 'flashBar', 'txt', 30, 220, (val) => changeState(setLowerTextBody, 'firstRow', val));
        await typeWriterButtonEffect('Project: DnCreate', 'flashBar', 30, 220, (val) => changeState(setLowerTextBody, 'secondRow', val), () => props.switch('DNCREATE'));
        await typeWriterButtonEffect('Project: SkySurf', 'flashBar', 30, 220, (val) => changeState(setLowerTextBody, 'thirdRow', val), () => props.switch('SKYSURF'));
        await typeWriterButtonEffect('Project: Morbiz', 'flashBar', 30, 220, (val) => changeState(setLowerTextBody, 'fourthRow', val), () => props.switch('MORBIZ'));
        await typeWriterEffect('}', 'flashBar', 'txt', 30, 220, (val) => changeState(setLowerTextBody, 'fifthRow', val));


        await typeWriterEffect("Like what you see? get in touch :)", 'flashBarPurple', 'purpleTxt', 30, 220, (val) => changeState(setAboutTextBody, 'firstRow', val));
        await typeWriterButtonEffect('ClickMe = () => About me', 'flashBar', 30, 220, (val) => changeState(setAboutTextBody, 'secondRow', val), () => props.switch('ABOUT'));
        await typeWriterEffect('}', 'flashBar', 'mainHeader', 30, 220, (val) => changeState(setUpperTextBody, 'fourthRow', val), true);
    }

    const changeState = (func, row, val) => isMounted.current && func(prevState => ({ ...prevState, [row]: val }));




    useEffect(() => {
        startType()
    }, [])

    return (
        <div className="homeContainer" style={{ height: window.innerHeight, display: "flex", alignItems: "flex-start" }}>
            <div className="txtWrapper">
                <div style={{ marginLeft: '1%' }}>{upperTextBody.firstRow}</div>
                <br />
                <div style={{ marginLeft: '5%' }}>{upperTextBody.secondRow}</div>
                <div style={{ marginLeft: '5%' }}>{upperTextBody.thirdRow}</div>

                <br />
                <div style={{ marginLeft: '5%' }}>

                    <div style={{ marginLeft: '2%' }} >{lowerTextBody.firstRow}</div>
                    <br />
                    <div className="dnCreateAboutContainer">
                        <div onClick={() => handleClick()} className={`${!isAboutTutorial?.aboutClick && 'dnCreateProjectClick'}`}>{lowerTextBody.secondRow}</div>
                        {!isAboutTutorial?.aboutClick && <img src={'imgs/logos/mouseClick.svg'} width={50} height={50} alt={'mouseClick'} className="homeMeMouseClick" />}
                    </div>
                    <br />
                    <div className="dnCreateAboutContainer">
                        <div >{lowerTextBody.thirdRow}</div>
                    </div>
                    <br />
                    <div className="dnCreateAboutContainer">
                        <div >{lowerTextBody.fourthRow}</div>
                    </div>
                    <br />
                    <div style={{ marginLeft: '2%' }}>{lowerTextBody.fifthRow}</div>
                    <br />
                    <br />
                    <div >{aboutTextBody.firstRow}</div>
                    <br />
                    <div >{aboutTextBody.secondRow}</div>
                </div>
                <br />

                <div style={{ marginLeft: '1%' }}>{upperTextBody.fourthRow}</div>
            </div>
        </div>
    )
}