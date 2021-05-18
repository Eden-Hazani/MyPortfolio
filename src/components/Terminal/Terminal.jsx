import { render } from "@testing-library/react";
import { useEffect, useRef, useState } from "react";
import { About } from "../About/About";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";
import { FaPowerOff, FaChevronRight } from "react-icons/fa";
import './terminalStyles.css'
import { DnCreateProject } from "../DnCreateProject/DnCreateProject";
import { TurnOff } from "../TurnOff/TurnOff";
import { SkySurfProject } from "../SkySurfProject/SkySurfProject";
import { Home } from "../Home/Home";
import { MorbizProject } from "../MorbizProject/MorbizProject";

export function Terminal(props) {
    const [currentTerminal, setCurrentTerminal] = useState('TERMINAL')
    const [loading, setLoading] = useState(false)
    const [turnOff, setTurnOff] = useState(false)

    const screenSwitch = (value) => {
        setLoading(true)
        setCurrentTerminal(value)
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }


    const handleTerminalClick = () => screenSwitch("TERMINAL");

    return (
        <div style={{ height: window.innerHeight }}>
            {turnOff ? <TurnOff close={() => props.scroll()} /> :
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
                        {currentTerminal === 'ABOUT' && <About switch={(value) => screenSwitch(value)} />}
                        {currentTerminal === 'DNCREATE' && <DnCreateProject />}
                        {currentTerminal === 'SKYSURF' && <SkySurfProject />}
                        {currentTerminal === 'MORBIZ' && <MorbizProject />}
                    </div>
            }


        </div>
    )
}