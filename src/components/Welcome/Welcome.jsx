import { useRef } from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import { WelcomeRows } from '../WelcomeRows/WelcomeRows'
import './welcome.css'

export function Welcome() {

    const containerRef = useRef(null)
    const glassRef = useRef(null)
    const isGlassVis = useOnScreen(containerRef, window.innerWidth < 600 ? '0px' : '0px', .8)


    return (
        <div className="startRowContainer" style={{ height: window.innerHeight }}>
            <div ref={containerRef}></div>
            <img className={`${isGlassVis ? "openWelcomeDragon" : "closeWelcomeDragon"}`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/beachDragon.svg`} alt="dragon" />
            <div ref={glassRef} className={`glassShard ${isGlassVis ? 'openWelcomeGlass' : 'closeWelcomeGlass'}`}></div>
            <WelcomeRows />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ position: 'absolute', bottom: '0%' }}>
                <path fill="#34A0A4" fill-opacity="1" d="M0,96L120,117.3C240,139,480,181,720,192C960,203,1200,181,1320,170.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
        </div>
    )
}