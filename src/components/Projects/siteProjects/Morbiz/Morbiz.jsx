import { useEffect, useRef, useState } from 'react'
import useOnScreen from '../../../../hooks/useOnScreen'
import { ExternalLinks } from '../../Shared/ExternalLinks'
import './morbiz.css'

export function Morbiz(props) {
    const [currentImage, setCurrentImg] = useState(null)

    const headerRef = useRef(null)
    const firstImgRef = useRef(null)
    const secondImgRef = useRef(null)
    const thirdImgRef = useRef(null)
    const headerEquipped = useOnScreen(headerRef)
    const firstImgEquipped = useOnScreen(firstImgRef, '0px', .5)
    const secondImgEquipped = useOnScreen(secondImgRef, '0px', .5)
    const thirdImgEquipped = useOnScreen(thirdImgRef, '0px', .5)

    const changeCurrentImg = (value) => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 600) {
            setCurrentImg(value)
        }
    }

    const projectBodyRef = useRef(null)
    const isBottom = useOnScreen(projectBodyRef)
    useEffect(() => {
        if (isBottom) props.closeProject()
    }, [isBottom, props]);

    return (
        <div className="morbizContainer" style={{ width: window.innerWidth }}>
            <div ref={headerRef} className={` morbizHeader `}>
                <p className={`${headerEquipped ? 'enterMorbizHeader' : 'leaveMorbizHeader'}`}>Morbiz</p>
            </div>
            <div className="morbizSubTxtContainer">
                <div className={`${headerEquipped ? 'morbizSubTxtEnter' : 'morbizSubTxtLeave'}`}>
                    <p>Local restaurant website, my first project involving react and redux.</p>
                    <p>During the height of the corona virus I have self studied how to use React and redux.</p>
                    <p>This project shows my learning curve since the start of 2020.</p>
                    <p>from writing very basic react components with no server side elements</p>
                    <p>To the complexity of DnCreate with many components and complex functions</p>
                </div>
                <img alt="morbizSign" className={`morbizSign ${headerEquipped ? 'enterMorbizSign' : 'leaveMorbizSign'}`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/morbizSign.svg`} />
            </div>
            {currentImage && <div className="skySurfCurrentImageContainer">
                <img onClick={() => setCurrentImg(null)} alt="currentImg" className="mainImage" src={`${process.env.PUBLIC_URL}/imgs/morbizImgs/${currentImage}`} />
            </div>}
            <div className="skySurfImgMainContainer">
                <div ref={firstImgRef}>
                    <div className={`skySurfImgContainer`}>
                        <img onClick={() => changeCurrentImg('morbiz1.JPG')} className={`skySurfImg ${firstImgEquipped ? 'skySurfImgEnter' : 'skySurfImgLeave'}`} src={`${process.env.PUBLIC_URL}/imgs/morbizImgs/morbiz1.JPG`} alt="cloud" />
                        <p className={`${firstImgEquipped ? 'skySurfTxtEnter' : 'skySurfTxtLeave'}`}>styled as a 50's diner with a main focus on a vibrant color pallet </p>
                    </div>
                </div>
                <div ref={secondImgRef}>
                    <div className={`skySurfImgContainer`}>
                        <img onClick={() => changeCurrentImg('morbiz2.JPG')} className={`skySurfImg ${secondImgEquipped ? 'skySurfImgEnter' : 'skySurfImgLeave'}`} src={`${process.env.PUBLIC_URL}/imgs/morbizImgs/morbiz2.JPG`} alt="cloud" />
                        <p className={`${secondImgEquipped ? 'skySurfTxtEnter' : 'skySurfTxtLeave'}`}>Table reservation system with dates hours and validations</p>
                    </div>
                </div>
                <div ref={thirdImgRef}>
                    <div className={`skySurfImgContainer`}>
                        <img onClick={() => changeCurrentImg('morbiz3.JPG')} className={`skySurfImg ${thirdImgEquipped ? 'skySurfImgEnter' : 'skySurfImgLeave'}`} src={`${process.env.PUBLIC_URL}/imgs/morbizImgs/morbiz3.JPG`} alt="cloud" />
                        <p className={`${thirdImgEquipped ? 'skySurfTxtEnter' : 'skySurfTxtLeave'}`}>Online order system with animations, total cost calculator, and the ability to customize each item.</p>
                    </div>
                </div>
            </div>
            <ExternalLinks git={'https://github.com/Eden-Hazani/Morbiez'} site={'https://eden-hazani.github.io/home'} />
            <div ref={projectBodyRef} className="dncreateEnd"><p>end</p></div>
        </div>
    )
}