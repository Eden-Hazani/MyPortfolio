
import './aboutImageLine.css';

export function AboutImageLine() {
    const width = window.innerWidth;
    return (
        <>
            {width < 600 ?
                <img className="singleAboutImg" src={'imgs/aboutPics/edenNature.jpg'} width={150} height={150} alt={'code'} />
                :
                <div className="innerImgContainer">
                    <img className="aboutImg" src={'imgs/aboutPics/code.jpg'} width={150} height={150} alt={'code'} />
                    <img className="aboutImg" src={'imgs/aboutPics/edenNature.jpg'} width={150} height={150} alt={'code'} />
                    <img className="aboutImg" src={'imgs/aboutPics/watch.jpg'} width={150} height={150} alt={'code'} />
                </div>
            }
        </>
    )
}