import { useEffect, useState } from "react"
import useIsMounted from "../../hooks/useIsMounted"
import { typeWriterEffect, typeWriterImageEffect } from "../../utility/utilityFunctions"
import { LinkInformation } from "../LinkInformaion/LinkInformation"

export function MorbizProject() {
    const isMounted = useIsMounted()
    const [heading, setHeading] = useState('')
    const [textBody, setTextBody] = useState('')
    const [lowerTextBody, setLowerTextBody] = useState('')

    useEffect(() => {
        startType()
        startBottomType()
    }, [])
    const startType = async () => {
        await typeWriterEffect("Project Morbiz", 'flashBar', 'headText', 20, 220, (val) => changeState(setHeading, val));
        await typeWriterEffect('ReactTS project created as a self learning project.', 'flashBarPurple', 'purpleTxt', 20, 220, (val) => changeDeepState(setTextBody, 'firstRow', val));
        await typeWriterEffect('This was my first try with the react framework. this project features front side only, without a connected DB', 'flashBarPurple', 'purpleTxt', 20, 220, (val) => changeDeepState(setTextBody, 'secondRow', val));
        await typeWriterEffect('The idea behind morbiz was to create a full front end website for a local restaurant', 'flashBarPurple', 'purpleTxt', 20, 220, (val) => changeDeepState(setTextBody, 'thirdRow', val));
        await typeWriterEffect('As this was my first react project my learning curve since than has greatly improved.', 'flashBarPurple', 'purpleTxt', 20, 220, (val) => changeDeepState(setTextBody, 'forthRow', val));
    }

    const startBottomType = async () => {
        await typeWriterEffect('includedTech = {', 'flashBar', 'txt', 20, 220, (val) => changeDeepState(setLowerTextBody, 'firstRow', val));
        await typeWriterImageEffect('React: ', 'imgs/logos/react.svg', 'txt', 'flashBar', 20, (val) => changeDeepState(setLowerTextBody, 'secondRow', val))
        await typeWriterImageEffect('Redux: ', 'imgs/logos/redux.svg', 'txt', 'flashBar', 20, (val) => changeDeepState(setLowerTextBody, 'thirdRow', val))
        await typeWriterImageEffect('Bootstrap: ', 'imgs/logos/bootstrap.svg', 'txt', 'flashBar', 20, (val) => changeDeepState(setLowerTextBody, 'fourthRow', val))
        await typeWriterEffect('}', 'flashBar', 'txt', 20, 220, (val) => changeDeepState(setLowerTextBody, 'fifthRow', val), true);
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
                            <div style={{ marginLeft: '5%' }}>{lowerTextBody.thirdRow}</div>
                            <div style={{ marginLeft: '5%' }}>{lowerTextBody.fourthRow}</div>
                            <div style={{ marginLeft: '2%' }}>{lowerTextBody.fifthRow}</div>
                        </div>
                        <LinkInformation links={'MORBIZ'} />
                    </div>
                </div>
            </div>
        </>
    )
}