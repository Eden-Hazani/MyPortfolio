import { useEffect, useRef, useState } from 'react'
import useOnScreen from '../../../../hooks/useOnScreen'
import { ExternalLinks } from '../../Shared/ExternalLinks'
import './skysurf.css'


export function SkySurf(props) {
    const [currentImage, setCurrentImg] = useState(null)

    const projectBodyRef = useRef(null)
    const isBottom = useOnScreen(projectBodyRef)
    useEffect(() => {
        if (isBottom) props.closeProject()
    }, [isBottom, props]);

    const upperPageRef = useRef(null)
    const firstImgRef = useRef(null)
    const secondImgRef = useRef(null)
    const thirdImgRef = useRef(null)
    const upperPageEquipped = useOnScreen(upperPageRef)
    const firstImgEquipped = useOnScreen(firstImgRef, '0px', .5)
    const secondImgEquipped = useOnScreen(secondImgRef, '0px', .5)
    const thirdImgEquipped = useOnScreen(thirdImgRef, '0px', .5)


    const changeCurrentImg = (value) => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 600) {
            setCurrentImg(value)
        }
    }

    return (
        <div className="skySurfContainer" style={{ width: window.innerWidth }}>
            {currentImage && <div className="skySurfCurrentImageContainer">
                <img onClick={() => setCurrentImg(null)} alt="currentImg" className="mainImage" src={`${process.env.PUBLIC_URL}/imgs/skySurfImgs/${currentImage}`} />
            </div>}
            <div ref={upperPageRef} className="skySurfHeadTextContainer">
                <div className={`skySurfHeadText ${upperPageEquipped ? 'skySurfHeadTextEnter' : 'skySurfHeadTextLeave'}`}>
                    <p>My final project at John bryce, a complete vacation site built with ReactTS and NodeJs mySql server</p>
                    <p>This site features a full back office admin zone with the ability to change or remove any item on the site.</p>
                    <p>The changes on the site are instant for all users with the use of SocketUi</p>
                </div>
                <div className={`cloudContainer1 ${upperPageEquipped ? 'skySurfCloudEnter' : 'skySurfCloudLeave'}`}>
                    <img className={`skySurfCloud1`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/cloud.svg`} alt="cloud" />
                </div>
                <div className={`cloudContainer2 ${upperPageEquipped ? 'skySurfCloudEnter' : 'skySurfCloudLeave'}`}>
                    <img className={`skySurfCloud2`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/cloud.svg`} alt="cloud" />
                </div>
            </div>
            <img className={`vacationDragon ${upperPageEquipped ? 'enterVacationDragon' : 'leaveVacationDragon'}`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/vacationDragon.svg`} alt="vacationDragon" />
            <div className="skySurfImgMainContainer">
                <div ref={firstImgRef}>
                    <div className={`skySurfImgContainer`}>
                        <img onClick={() => changeCurrentImg('skysurf1.JPG')} className={`skySurfImg ${firstImgEquipped ? 'skySurfImgEnter' : 'skySurfImgLeave'}`} src={`${process.env.PUBLIC_URL}/imgs/skySurfImgs/skysurf1.JPG`} alt="cloud" />
                        <p className={`${firstImgEquipped ? 'skySurfTxtEnter' : 'skySurfTxtLeave'}`}>Complete site registration forms saved into a MySql database</p>
                    </div>
                </div>
                <div ref={secondImgRef}>
                    <div className={`skySurfImgContainer`}>
                        <img onClick={() => changeCurrentImg('skysurf2.JPG')} className={`skySurfImg ${secondImgEquipped ? 'skySurfImgEnter' : 'skySurfImgLeave'}`} src={`${process.env.PUBLIC_URL}/imgs/skySurfImgs/skysurf2.JPG`} alt="cloud" />
                        <p className={`${secondImgEquipped ? 'skySurfTxtEnter' : 'skySurfTxtLeave'}`}>Intractable vacation dashboard with the ability to follow and track different vacations</p>
                    </div>
                </div>
                <div ref={thirdImgRef}>
                    <div className={`skySurfImgContainer`}>
                        <img onClick={() => changeCurrentImg('skysurf3.JPG')} className={`skySurfImg ${thirdImgEquipped ? 'skySurfImgEnter' : 'skySurfImgLeave'}`} src={`${process.env.PUBLIC_URL}/imgs/skySurfImgs/skysurf3.JPG`} alt="cloud" />
                        <p className={`${thirdImgEquipped ? 'skySurfTxtEnter' : 'skySurfTxtLeave'}`}>Full admin back-office with the tools to add, remove, and change any vacation in real time</p>
                    </div>
                </div>
            </div>
            <ExternalLinks site={'https://skysurf.herokuapp.com'} git={'https://github.com/Eden-Hazani/SkySurf'} />
            <div ref={projectBodyRef} className="dncreateEnd"><p>end</p></div>
        </div>
    )
}