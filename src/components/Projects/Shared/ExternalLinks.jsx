import { useRef } from 'react'
import { FaChevronRight } from 'react-icons/fa';
import useOnScreen from '../../../hooks/useOnScreen';
import './externalLinks.css'

export function ExternalLinks(props) {
    const containerRef = useRef(null);
    const containerEquipped = useOnScreen(containerRef)
    return (
        <div ref={containerRef} className="externalLinkCont">
            <div>
                <div className="externalLinkImg" onClick={() => props.back()}>
                    <p>Back</p>
                    <FaChevronRight size={window.innerWidth > 600 ? '2vw' : '8vw'} color={'white'} />
                </div>
                {props.git && <div className="externalLinkImg" onClick={() => window.open(props.git, "_blank")}>
                    <img alt="logo" className={`logoStatic ${containerEquipped ? 'enterLogo' : 'leaveLogo'}`} src={`${process.env.PUBLIC_URL}/imgs/logos/gitHubWhite.svg`} />
                </div>}
                {props.playStore && <div className="externalLinkImg" onClick={() => window.open(props.playStore, "_blank")}>
                    <img alt="logo" className={`logoStatic ${containerEquipped ? 'enterLogo' : 'leaveLogo'}`} src={`${process.env.PUBLIC_URL}/imgs/logos/googlePlayWhite.svg`} />
                </div>}
                {props.site && <div className="externalLinkImg" onClick={() => window.open(props.site, "_blank")}>
                    <img alt="logo" className={`logoStatic ${containerEquipped ? 'enterLogo' : 'leaveLogo'}`} src={`${process.env.PUBLIC_URL}/imgs/logos/siteLogo.svg`} />
                </div>}
            </div>
        </div>
    )
}