import { useRef } from 'react'
import useOnScreen from '../../../hooks/useOnScreen';
import './externalLinks.css'

export function ExternalLinks(props) {
    const containerRef = useRef(null);
    const containerEquipped = useOnScreen(containerRef)
    return (
        <div ref={containerRef} className="externalLinkCont">
            <p className={`${containerEquipped ? 'enterLinkText' : 'leaveLinkText'}`}>Links</p>
            <div>
                {props.git && <div className="externalLinkImg" onClick={() => window.open(props.git, "_blank")}>
                    <img alt="logo" className={` ${containerEquipped ? 'enterMorbizSign' : 'leaveMorbizSign'}`} src={`${process.env.PUBLIC_URL}/imgs/logos/gitHubWhite.svg`} />
                </div>}
                {props.playStore && <div className="externalLinkImg" onClick={() => window.open(props.playStore, "_blank")}>
                    <img alt="logo" className={` ${containerEquipped ? 'enterMorbizSign' : 'leaveMorbizSign'}`} src={`${process.env.PUBLIC_URL}/imgs/logos/googlePlayWhite.svg`} />
                </div>}
                {props.site && <div className="externalLinkImg" onClick={() => window.open(props.site, "_blank")}>
                    <img alt="logo" className={` ${containerEquipped ? 'enterMorbizSign' : 'leaveMorbizSign'}`} src={`${process.env.PUBLIC_URL}/imgs/logos/siteLogo.svg`} />
                </div>}
            </div>
        </div>
    )
}