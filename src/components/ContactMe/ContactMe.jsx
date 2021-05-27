import { useRef, useState } from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import './contactMe.css'

export function ContactMe() {
    const aboutMeInnerRef = useRef(null)
    const aboutMeInnerEquipped = useOnScreen(aboutMeInnerRef, '0px', .5)

    return (
        <div style={{ height: '100%', minHeight: window.innerHeight, backgroundColor: '#1E6091', zIndex: 15 }}>
            <p className={`contactMeHeadline`}>Reach Me</p>
            <p className={`contactMeSubLine`}>Thanks for checking out my portfolio!</p>
            <p className={`contactMeSubLine`}>If you liked what you've seen feel free to contact me from the links below</p>
            <div ref={aboutMeInnerRef} className={`contactMeInnerContainer`}>

                <a href="https://wa.me/9720542503225" target="_blank" rel="noreferrer" className="aboutLink">
                    <div className={`reachMeContainer ${aboutMeInnerEquipped ? 'enterAboutMeDragon' : 'leaveAboutMeDragon'}`}>
                        <img className={`contactDragon`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/whatsAppDragon.svg`} alt="dncreate" />
                        <p className={`${aboutMeInnerEquipped ? 'enterAboutMeHeadLine' : 'leaveAboutMeHeadLine'}`}>WhatsApp</p>
                    </div>
                </a>


                <a href={`${process.env.PUBLIC_URL}/files/cvEdenHazani.pdf`} rel="noreferrer" target="_blank" className="aboutLink" download>
                    <div className={`reachMeContainer ${aboutMeInnerEquipped ? 'enterAboutMeDragon' : 'leaveAboutMeDragon'}`}>
                        <img className={`contactDragon`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/cvDragon.svg`} alt="dncreate" />
                        <p className={`${aboutMeInnerEquipped ? 'enterAboutMeHeadLine' : 'leaveAboutMeHeadLine'}`}>CV</p>
                    </div>
                </a>

                <a href="https://www.linkedin.com/in/eden-hazani-963082163/" target="_blank" rel="noreferrer" className="aboutLink">
                    <div className={`reachMeContainer ${aboutMeInnerEquipped ? 'enterAboutMeDragon' : 'leaveAboutMeDragon'}`}>
                        <img className={`contactDragon`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/linkedInDragon.svg`} alt="dncreate" />
                        <p className={`${aboutMeInnerEquipped ? 'enterAboutMeHeadLine' : 'leaveAboutMeHeadLine'}`}>LinkedIn</p>
                    </div>
                </a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ position: 'absolute', bottom: `0%` }}>
                <path fill="#184E77" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,224C384,235,480,181,576,170.7C672,160,768,192,864,202.7C960,213,1056,203,1152,192C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
    )
}