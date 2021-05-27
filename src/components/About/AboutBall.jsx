import { FaChevronDown } from "react-icons/fa";
import './aboutBallStyles.css'

export function AboutBall(props) {
    return (
        <div className={`infoCircle ${props.currentOpen ? 'expandedInfoCircle' : 'retractedInfoCircle'}`} onClick={() => props.handleClick()}>
            <div className="smallBubbleLine"></div>
            <div className="smallBubble"></div>
            <div className={`${props.currentOpen ? 'expandedInfoDragon' : 'retractedInfoDragon'}`}>
                <img className={`circleDragon ${props.isVisible ? `enterDragonRoll${props.index}` : `leaveDragonRoll${props.index}`}`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/${props.dragonName}.svg`} alt="dncreate" />
                <p className="infoCircleHeadline">{props.headLine}</p>
                <FaChevronDown size={'3vw'} color={'rgb(26, 117, 159)'} />
            </div>
            {props.currentOpen && <div>
                {props.innerText}
            </div>
            }
        </div>
    )
}