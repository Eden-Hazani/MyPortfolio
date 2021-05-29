
import { useState } from 'react'
import './menu.css'

export function Menu(props) {
    const [toggleMenu, setToggleMenu] = useState('')


    const handleClick = () => {
        if (toggleMenu === 'close' || toggleMenu === '') {
            setToggleMenu('open')
        } else {
            setToggleMenu('close')
        }
    }
    const handleMenuClick = (val) => {
        setToggleMenu('close')
        props.move(val)
    }

    return (
        <div className="menuContainer">
            <div>
                <div className="menuLeftBubble"></div>
                <div className="innerMenuContainer">
                    <div className={`${toggleMenu === 'open' && 'pressMenu'} ${toggleMenu === 'close' && 'closeMenu'}`} onClick={() => handleClick()}>
                        <p>MENU</p>
                    </div>
                </div>
                <div className="menuRightBubble"></div>
            </div>
            <div onClick={() => handleMenuClick('projects')} className={`projectsOption ${toggleMenu === 'open' && 'openMenuOption immediateAniDelay'} ${toggleMenu === 'close' && 'closeMenuOption immediateAniDelay'} `}><p className="menuOptionText">PROJECTS</p></div>
            <div onClick={() => handleMenuClick('about')} className={`aboutMeOption ${toggleMenu === 'open' && 'openMenuOption midAniDelay'} ${toggleMenu === 'close' && 'closeMenuOption immediateAniDelay'} `}><p className="menuOptionText">ABOUT</p></div>
            <div onClick={() => handleMenuClick('contact')} className={`contactMeOption ${toggleMenu === 'open' && 'openMenuOption longAniDelay'} ${toggleMenu === 'close' && 'closeMenuOption immediateAniDelay'}`}><p className="menuOptionText">CONTACT</p></div>
        </div>
    )
}