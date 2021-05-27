import { render } from "@testing-library/react";
import { useEffect, useRef, useState } from "react";
import { About } from "../About/About";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";
import { FaPowerOff, FaChevronRight } from "react-icons/fa";
import './terminalStyles.css'
import { TurnOff } from "../TurnOff/TurnOff";
import { SkySurfProject } from "../SkySurfProject/SkySurfProject";
import { Home } from "../Home/Home";
import { MorbizProject } from "../MorbizProject/MorbizProject";
import { DnCreateProject } from "../DnCreateProject/DnCreateProject";

export function Terminal(props) {
    const [currentTerminal, setCurrentTerminal] = useState('TERMINAL')
    const [terminalStatus, setTerminalStatus] = useState('terminalOpening')
    const [loading, setLoading] = useState(true)
    const [turnOff, setTurnOff] = useState(false)
    const terminalRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])



    const screenSwitch = (value) => {
        setLoading(true)
        setCurrentTerminal(value)
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }

    useEffect(() => {
        if (props.isTerminal) {
            terminalRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [props])

    const handleTerminalClick = () => screenSwitch("TERMINAL");

    return (
        <div ref={terminalRef} className={`terminal ${terminalStatus}`} style={{ height: window.innerHeight, backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/backgrounds/pleaseStandBy.jpg)` }} >
            {turnOff ? <TurnOff closeTerminal={() => {
                setTerminalStatus('terminalClosing')
                setTimeout(() => {
                    props.closeTerminal()
                }, 1800);
            }} /> :
                loading ? <LoadingScreen /> :
                    <div style={{ position: 'relative', height: window.innerHeight }}>
                        <FaPowerOff onClick={() => {
                            setTurnOff(true)
                        }} className="backIcon" />
                        {currentTerminal !== "TERMINAL" &&
                            <div className="toTerminalIcon" onClick={() => handleTerminalClick()}>
                                <p className="txt">Back</p>
                                <FaChevronRight className="terminalIcon" />
                            </div>
                        }
                        {currentTerminal === 'TERMINAL' && <Home switch={(value) => screenSwitch(value)} />}
                        {currentTerminal === 'DNCREATE' && <DnCreateProject />}
                        {currentTerminal === 'SKYSURF' && <SkySurfProject />}
                        {currentTerminal === 'MORBIZ' && <MorbizProject />}
                    </div>
            }


        </div>
    )
}