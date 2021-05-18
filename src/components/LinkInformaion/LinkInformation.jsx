import { useState } from 'react';
import './linkInformation.css';
import { list } from '../../utility/imageInformation.json';


export function LinkInformation(props) {

    return (
        <div className="linkingContainer">
            {list[props.links].gitLink && <img className="linkingLogo" src={'imgs/logos/gitHub.svg'} alt="icon" onClick={() => window.open(list[props.links].gitLink, "_blank")} />}
            {list[props.links].googleLink && <img className="linkingLogo" src={'imgs/logos/google.svg'} alt="icon" onClick={() => window.open(list[props.links].googleLink, "_blank")} />}
            {list[props.links].webLink && <img className="linkingLogo" src={'imgs/logos/website.svg'} alt="icon" onClick={() => window.open(list[props.links].webLink, "_blank")} />}

        </div>
    )
}