import { useEffect, useState } from "react"
import useIsMounted from "../../hooks/useIsMounted";
import { typeWriterEffect, typeWriterImageEffect } from "../../utility/utilityFunctions";
import { LinkInformation } from "../LinkInformaion/LinkInformation";

export function SweetBashProject() {
    const isMounted = useIsMounted()
    const [heading, setHeading] = useState('')
    const [textBody, setTextBody] = useState('')
    const [lowerTextBody, setLowerTextBody] = useState('')

    useEffect(() => {
        startType()
        startBottomType()
    }, [])
    const startType = async () => {
        await typeWriterEffect("Project SweetBash", 'flashBar', 'headText', 20, 220, (val) => changeState(setHeading, val));
        await typeWriterEffect('Mobile game developed with React native', 'flashBarPurple', 'purpleTxt', 20, 220, (val) => changeDeepState(setTextBody, 'firstRow', val));
        await typeWriterEffect('with complex indexing and item sequence recognition the games main propose is getting the highest score before the timer runs out', 'flashBarPurple', 'purpleTxt', 20, 220, (val) => changeDeepState(setTextBody, 'secondRow', val));
        await typeWriterEffect('This was my first attempt at a mobile game with SFX sounds, animations and a score system', 'flashBarPurple', 'purpleTxt', 20, 220, (val) => changeDeepState(setTextBody, 'thirdRow', val));
        await typeWriterEffect('Developing this project has taught me much regarding indexing and mobile gestures', 'flashBarPurple', 'purpleTxt', 20, 220, (val) => changeDeepState(setTextBody, 'forthRow', val));
    }

    const startBottomType = async () => {
        await typeWriterEffect('includedTech = {', 'flashBar', 'txt', 20, 220, (val) => changeDeepState(setLowerTextBody, 'firstRow', val));
        await typeWriterImageEffect('React Native: ', 'imgs/logos/react.svg', 'txt', 'flashBar', 20, (val) => changeDeepState(setLowerTextBody, 'secondRow', val))
        await typeWriterEffect('}', 'flashBar', 'txt', 20, 220, (val) => changeDeepState(setLowerTextBody, 'thirdRow', val), true);
    }

    const changeDeepState = (func, row, val) => isMounted.current && func(prevState => ({ ...prevState, [row]: val }));
    const changeState = (func, val) => isMounted.current && func(val);

    return (
        <>
            <div className="dncreateContainer" style={{ height: window.innerHeight }}>
                <div className="dncreateInnerContainer">
                    <div style={{ width: window.innerWidth / 1.1, marginBottom: '5%', minHeight: '150px' }}>
                        {heading}
                        <div className="txtContainerDiv">{textBody.firstRow}</div>
                        <div className="txtContainerDiv">{textBody.secondRow}</div>
                        <br />
                        <div className="txtContainerDiv">{textBody.thirdRow}</div>
                        <div className="txtContainerDiv">{textBody.forthRow}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: window.innerWidth / 1.5 }}>
                            {lowerTextBody.firstRow}
                            <div style={{ marginLeft: '5%' }}>{lowerTextBody.secondRow}</div>
                            <div style={{ marginLeft: '2%' }}>{lowerTextBody.thirdRow}</div>
                        </div>
                        <LinkInformation links={'SWEETBASH'} />
                    </div>
                </div>
            </div>
        </>
    )
}