import { useEffect, useState } from "react";
import useIsMounted from "../../hooks/useIsMounted";
import { typeWriterEffect, typeWriterImageEffect } from "../../utility/utilityFunctions";
import { LinkInformation } from "../LinkInformaion/LinkInformation";
import { PhotoBar } from "../PhotoBar/PhotoBar";


export function SkySurfProject() {
    const isMounted = useIsMounted()
    const [heading, setHeading] = useState('');
    const [textBody, setTextBody] = useState('');
    const [lowerTextBody, setLowerTextBody] = useState('');

    useEffect(() => {
        startType()
        startBottomType()
    }, [])

    const startType = async () => {
        await typeWriterEffect("Project SkySurf", 'flashBar', 'headText', 20, 220, (val) => changeState(setHeading, val));
        await typeWriterEffect('React website, created as a final project for my studies at John Bryce', 'flashBarPurple', 'purpleTxt', 20, 220, (val) => changeDeepState(setTextBody, 'firstRow', val));
        await typeWriterEffect('Using features such as redux, socketIO, MYSQL database, nodeJS and more', 'flashBarPurple', 'purpleTxt', 20, 220, (val) => changeDeepState(setTextBody, 'secondRow', val));
        await typeWriterEffect('Featuring admin/user site roles, with admins being able to completely manage the site', 'flashBarPurple', 'purpleTxt', 20, 220, (val) => changeDeepState(setTextBody, 'thirdRow', val));
    }

    const startBottomType = async () => {
        await typeWriterEffect('includedTech = {', 'flashBar', 'txt', 20, 220, (val) => changeDeepState(setLowerTextBody, 'firstRow', val));
        await typeWriterImageEffect('React: ', '/imgs/logos/react.svg', 'txt', 'flashBar', 20, (val) => changeDeepState(setLowerTextBody, 'secondRow', val))
        await typeWriterImageEffect('Redux: ', '/imgs/logos/redux.svg', 'txt', 'flashBar', 20, (val) => changeDeepState(setLowerTextBody, 'thirdRow', val))
        await typeWriterImageEffect('MySQL: ', '/imgs/logos/mySql.svg', 'txt', 'flashBar', 20, (val) => changeDeepState(setLowerTextBody, 'fourthRow', val))
        await typeWriterImageEffect('SocketIO: ', '/imgs/logos/socketIO.svg', 'txt', 'flashBar', 20, (val) => changeDeepState(setLowerTextBody, 'fifthRow', val))
        await typeWriterImageEffect('NodeJs: ', '/imgs/logos/nodeJS.svg', 'txt', 'flashBar', 20, (val) => changeDeepState(setLowerTextBody, 'sixthRow', val))
        await typeWriterEffect('}', 'flashBar', 'txt', 20, 220, (val) => changeDeepState(setLowerTextBody, 'seventhRow', val), true);
    }

    const changeDeepState = (func, row, val) => isMounted.current && func(prevState => ({ ...prevState, [row]: val }));
    const changeState = (func, val) => isMounted.current && func(val);


    return (
        <div>
            <div className="dncreateContainer" style={{ height: window.innerHeight }}>
                <div className="dncreateInnerContainer">
                    <div style={{ width: window.innerWidth / 1.1, marginBottom: '5%', minHeight: '150px' }}>
                        {heading}
                        <div className="txtContainerDiv">{textBody.firstRow}</div>
                        <br />
                        <div className="txtContainerDiv">{textBody.secondRow}</div>
                        <br />
                        <div className="txtContainerDiv">{textBody.thirdRow}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: window.innerWidth / 1.5 }}>
                            {lowerTextBody.firstRow}
                            <div style={{ marginLeft: '5%' }}>{lowerTextBody.secondRow}</div>
                            <div style={{ marginLeft: '5%' }}>{lowerTextBody.thirdRow}</div>
                            <div style={{ marginLeft: '5%' }}>{lowerTextBody.fourthRow}</div>
                            <div style={{ marginLeft: '5%' }}>{lowerTextBody.fifthRow}</div>
                            <div style={{ marginLeft: '5%' }}>{lowerTextBody.sixthRow}</div>
                            <div style={{ marginLeft: '2%' }}>{lowerTextBody.seventhRow}</div>
                        </div>
                        <LinkInformation links={'SkySurf'} />
                    </div>
                </div>
            </div>
            <PhotoBar imagePicked={"SkySurf"} />
        </div>
    )
}