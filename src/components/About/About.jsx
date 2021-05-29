import React, { useEffect, useRef, useState } from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import { AboutBall } from './AboutBall'
import './aboutStyles.css'

export function About(props) {
    const aboutRef = useRef(null)
    const bubblesRef = useRef(null)
    const bubblesEquipped = useOnScreen(bubblesRef, '0px', .1)
    const aboutEquipped = useOnScreen(aboutRef, '0px', .4);
    const [currentOpen, setCurrentOpen] = useState([])
    const [randomBubble, setRandomBubble] = useState([Math.floor(Math.random() * 5) + 4, Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 2) + 1])

    useEffect(() => {
        if (!aboutEquipped) {
            setRandomBubble([])
        } else {
            setRandomBubble([Math.floor(Math.random() * 5) + 4, Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 2) + 1])
        }
    }, [aboutEquipped])

    const handleClick = (value) => {
        const updatedState = [...currentOpen]
        if (!updatedState[value]) {
            updatedState[value] = true
            setCurrentOpen(updatedState)
        } else {
            updatedState[value] = false
            setCurrentOpen(updatedState)
        }
    }

    return (
        <div className="aboutContainer" style={{ height: '100%', width: '100%' }}>
            <div ref={aboutRef} style={{ width: '100%', height: '100%' }}>
                <div style={{ marginBottom: '2%' }} className={`${aboutEquipped ? 'enterAboutHeadline' : 'leaveAboutHeadline'}`}>
                    <p className="aboutHeader">A little bit about me :)</p>
                    <p className="aboutSubHeader">click on a bubble to read more</p>
                </div>
                <img className={`scubaDragon ${aboutEquipped ? 'enterScubaDragon' : 'leaveScubaDragon'}`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/scubaDragon.svg`} alt="dncreate" />
                <div ref={bubblesRef} className={`${aboutEquipped ? 'enterDragonBubble' : 'leaveDragonBubble'}`}>
                    <div className={`aboutTextBody ${aboutEquipped ? 'enterDragonBubble' : ''}`}>
                        <div className={`${bubblesEquipped ? 'enterDragonBubble' : ''}`} style={{
                            opacity: 0,
                            position: 'relative',
                            paddingTop: window.innerWidth > 600 ? `${randomBubble[0]}%` : '0px'
                        }}>
                            <div className="sideBubbleLeft"></div>
                            <AboutBall
                                currentOpen={currentOpen[0]}
                                dragonName={'runningDragon'}
                                isVisible={bubblesEquipped}
                                index={0}
                                headLine={'Lifestyle'}
                                handleClick={() => handleClick(0)}
                                innerText={
                                    <div>
                                        <p className="InfoCircleTxtBody">
                                            Although most of the time you will find me behind a computer screen when I do take time off programing i'm usually at a GYM or
                                            running along the Tel-Aviv coastline.
                                        </p>
                                        <p className="InfoCircleTxtBody">
                                            in january 2020 my health was in extremely poor condition and I have decided to make a change in my lifestyle and so
                                            today, after a year and a half of training and diet <br /><br /> I have dropped around 55KG of fat and I am on my way to running half a marathon
                                        </p>
                                    </div>} />
                        </div>
                        <div className={`${bubblesEquipped ? 'enterDragonBubble' : ''}`} style={{
                            opacity: 0,
                            animationDelay: '.7s',
                            position: 'relative',
                            paddingTop: window.innerWidth > 600 ? `${randomBubble[1]}%` : '0px'
                        }}>
                            <div className="sideBubbleRight"></div>
                            <AboutBall
                                currentOpen={currentOpen[1]}
                                isVisible={bubblesEquipped}
                                dragonName={'404Dragon'}
                                index={1}
                                headLine={'Programing'}
                                handleClick={() => handleClick(1)}
                                innerText={
                                    <div>
                                        <p className="InfoCircleTxtBody">
                                            As a junior programmer my main focus is striving to better my knowledge and improve my coding skills
                                            mainly through self-learning and criticism.
                                        </p>
                                        <p className="InfoCircleTxtBody">
                                            Projects such as DnCreate helped me gain experience with developing and publishing updates continuously to a live user base that reviews my work.
                                            delivering on user requests and addressing bugs on different devices<br /><br /> I love searching for new ways on how to better my skills and I'm always eager to learn.
                                        </p>
                                    </div>} />
                        </div>
                    </div>
                    <div className={`${bubblesEquipped ? 'enterDragonBubble' : 'staticDragon'}`} style={{
                        animationDelay: '1.1s',
                        position: 'relative',
                        opacity: 0,
                        paddingTop: window.innerWidth > 600 ? `${randomBubble[2]}%` : '0px',
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '15%',
                    }}>
                        <div className="sideBubbleBottom"></div>
                        <AboutBall
                            currentOpen={currentOpen[2]}
                            dragonName={'edenDragon'}
                            isVisible={bubblesEquipped}
                            index={2}
                            headLine={'Myself'}
                            handleClick={() => handleClick(2)}
                            innerText={
                                <div>
                                    <p className="InfoCircleTxtBody">
                                        My name is Eden and I'm 25 years old, I live in Tel Aviv and my favorite place in Israel is Jaffa.
                                    </p>
                                    <p className="InfoCircleTxtBody">
                                        I am a man of the can do approach, I set goals for myself and then strive to achieve them.
                                        Most of my friends and coworkers tell me that I am an optimistic person who enjoys team-play.
                                    </p>
                                </div>} />
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ position: 'absolute', bottom: `0%` }}>
                <path fill="#1E6091" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>


        </div>
    )
}