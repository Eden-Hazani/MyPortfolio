import React, { useEffect, useState } from 'react'
import { typeWriterEffect } from '../../utility/utilityFunctions';
import { AboutImageLine } from '../AboutImagLine/AboutImageLine';
import { ContactLogos } from '../ContactLogos/ContactLogos';

import './aboutStyles.css'

export function About(props) {
    const [heading, setHeading] = useState()


    useEffect(() => {
        startType()
    }, [])

    const startType = async () => {
        await typeWriterEffect("We need some UI here...", 'flashBar', 'txt', 30, 220, (val) => { setHeading(val) }, true);
    }




    return (
        <div>
            <div className="aboutText">{heading}</div>
            <div className="aboutContainer" style={{ height: window.innerHeight }}>
                <AboutImageLine />
                <div className="aboutTextBody">
                    <h2 className="aboutHeader">A little bit about myself &nbsp;:)</h2>
                    <p className="aboutTextParagraph">My true passions are sports, programing, and traveling the world to experience nature.
                    Although most of the time you will find me behind a computer screen when I do take time off programing i'm usually at a GYM or
                    running along the Tel-Aviv coastline.</p>

                    <p className="aboutTextParagraph">As a junior programmer my main focus is striving to better my knowledge and improve my coding skills mainly through self-learning and criticism.
                    projects such as DnCreate helped me gain experience with developing and publishing updates continuously to a live user base that reviews my work.
                    </p>

                    <p className="aboutTextParagraph">I am a man of the can-do approach, in january 2020 my health was in extremely poor condition and my coding skills were very basic and limited to HTML and CSS.
                    today, a year and a half later I have dropped around 55KG of fat and I am on my way to running half a marathon as well as developing a fullstack application on its way to 2000 users.
                    </p>
                    <h2 className="aboutHeader">Reach me</h2>
                    <ContactLogos />
                    <div className="aboutEndParagraph" onClick={() => props.switch("TERMINAL")}>
                        <p>Forget this</p>
                        <p>take me back to the 50's...</p>
                    </div>
                </div>
            </div>
        </div >
    )
}