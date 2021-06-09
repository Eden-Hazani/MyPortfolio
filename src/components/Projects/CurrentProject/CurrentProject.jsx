import { useEffect, useRef, useState } from "react"
import useOnScreen from "../../../hooks/useOnScreen"
import { ExternalLinks } from "../Shared/ExternalLinks"
import './currentProject.css'
import { ImageWall } from "./CurrentProjectComponents/ImageWall"
import { ReviewWall } from "./CurrentProjectComponents/ReviewWall"
import { projectJsxInfo } from '../../../utility/ProjectContents'
import { D20Dice } from "./CurrentProjectComponents/D20Dice"
import { list } from '../../../utility/imageInformation.json'

export function CurrentProject(props) {
    const [currentImage, setCurrentImg] = useState(null)
    const [projectStatus, setProjectStatus] = useState('terminalOpening')
    const projectBodyRef = useRef(null)
    const isBottom = useOnScreen(projectBodyRef)

    useEffect(() => {
        console.log(isBottom)
        if (isBottom) {
            setProjectStatus('terminalClosing');
            props.closeProject()
        }
    }, [isBottom, props]);

    useEffect(() => {
        if (props.projectName !== '') {
            headLineRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [props])



    const headLineRef = useRef(null)
    const glassContainerRef = useRef(null)
    const firstImageRef = useRef(null)
    const secondImageRef = useRef(null)
    const thirdImageRef = useRef(null)

    const firstImgEquipped = useOnScreen(firstImageRef, '0px', .5)
    const secondImgEquipped = useOnScreen(secondImageRef, '0px', .5)
    const thirdImgEquipped = useOnScreen(thirdImageRef, '0px', .5)
    const headLineEquipped = useOnScreen(headLineRef, '0px', .5)
    const glassContainerEquipped = useOnScreen(glassContainerRef, '0px', .7)

    const changeCurrentImg = (value) => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 600) {
            setCurrentImg(value)
        }
    }

    const marginTopSwitch = () => {
        let marginTop = ''
        switch (true) {
            case props.projectName === "DNCREATE":
                marginTop = '0vh'
                break;
            case props.projectName === "SWEETBASH":
                marginTop = '70vh'
                break;
            case props.projectName === "SKYSURF":
                marginTop = '130vh'
                break;
            case props.projectName === "MORBIZ":
                marginTop = '190vh'
                break;
            default: marginTop = '0vh'
        }
        return marginTop
    }

    return (
        <div style={{ marginTop: marginTopSwitch() }} className={`currentProjectContainer ${projectStatus}`}>
            <div style={{ overflowX: 'hidden', width: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', height: '100%', opacity: projectStatus === "terminalClosing" ? 0 : 1 }}>
                {currentImage && <div className="currentProjectImageContainer">
                    <img onClick={() => setCurrentImg(null)} alt="currentImg" className="mainImage" src={`${process.env.PUBLIC_URL}/imgs/${currentImage}`} />
                </div>}
                <div ref={headLineRef} className={` dnCreateHeader ${headLineEquipped ? 'dnCreateHeaderEnter' : 'dnCreateHeaderExit'}`}>
                    {projectJsxInfo[props.projectName].header}
                </div>
                <div ref={glassContainerRef} className={`dncreateGlassShardContainer ${glassContainerEquipped ? 'dncreateGlassShardContainerEnter' : 'dncreateGlassShardContainerLeave'}`}>
                    {projectJsxInfo[props.projectName].d20Dice &&
                        <D20Dice glassContainerEquipped={glassContainerEquipped} />
                    }
                    <div className={`dncreateGlassShard ${glassContainerEquipped ? 'dncreateGlassShardEnter' : 'dncreateGlassShardLeave'}`}>
                    </div>
                    <img className={`wizardDragon ${glassContainerEquipped ? 'enterWizardDragon' : 'leaveWizardDragon'}`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/${projectJsxInfo[props.projectName].headerDragon}`} alt="dncreate" />
                    <div className={`dnCreateFirstSection ${glassContainerEquipped ? 'dnCreateFirstSectionEnter' : 'dnCreateFirstSectionLeave'}`}>
                        {projectJsxInfo[props.projectName].mainText}
                    </div>
                </div>
                <div className="dncreateImgMainContainer" style={{ flex: 1 }}>
                    <div ref={firstImageRef} className="dncreateImgContainer" onClick={() => changeCurrentImg(projectJsxInfo[props.projectName].firstImg)}>
                        <img style={{ flex: .1, width: projectJsxInfo[props.projectName].mobileImgs === true ? '13vw' : '30vw' }} className={`photoGalleryImage ${firstImgEquipped ? 'photoGalleryImageEnter' : 'photoGalleryImageLeave'}`} src={`${process.env.PUBLIC_URL}/imgs/${projectJsxInfo[props.projectName].firstImg}`} alt="dncreate1" />
                        <div className={`${firstImgEquipped ? 'photoGalleryTxtEnter' : 'photoGalleryTxtLeave'}`} style={{ flex: .4 }}>
                            {projectJsxInfo[props.projectName].firstImgWording}
                        </div>
                    </div>
                    <div ref={secondImageRef} className="dncreateImgContainer" style={{ flex: 1 }} onClick={() => changeCurrentImg(projectJsxInfo[props.projectName].secondImg)}>
                        <img style={{ flex: .1, width: projectJsxInfo[props.projectName].mobileImgs === true ? '13vw' : '30vw' }} className={`photoGalleryImage ${secondImgEquipped ? 'photoGalleryImageEnter' : 'photoGalleryImageLeave'}`} src={`${process.env.PUBLIC_URL}/imgs/${projectJsxInfo[props.projectName].secondImg}`} alt="dncreate2" />
                        <div className={`${secondImgEquipped ? 'photoGalleryTxtEnter' : 'photoGalleryTxtLeave'}`} style={{ flex: .4 }}>
                            {projectJsxInfo[props.projectName].secondImgWording}
                        </div>
                    </div>
                    <div ref={thirdImageRef} className="dncreateImgContainer" style={{ flex: 1 }} onClick={() => changeCurrentImg(projectJsxInfo[props.projectName].thirdImg)}>
                        <img style={{ flex: .1, width: projectJsxInfo[props.projectName].mobileImgs === true ? '13vw' : '30vw' }} className={`photoGalleryImage ${thirdImgEquipped ? 'photoGalleryImageEnter' : 'photoGalleryImageLeave'}`} src={`${process.env.PUBLIC_URL}/imgs/${projectJsxInfo[props.projectName].thirdImg}`} alt="dncreate2" />
                        <div className={`${thirdImgEquipped ? 'photoGalleryTxtEnter' : 'photoGalleryTxtLeave'}`} style={{ flex: .4 }}>
                            {projectJsxInfo[props.projectName].thirdImgWording}
                        </div>
                    </div>
                </div>
                {projectJsxInfo[props.projectName].reviewWall && <ReviewWall />}
                {projectJsxInfo[props.projectName].imageWall && <ImageWall />}
                <ExternalLinks back={() => {
                    setProjectStatus('terminalClosing');
                    props.closeProject()
                }}
                    git={list[props.projectName].gitLink}
                    playStore={list[props.projectName].googleLink}
                    site={list[props.projectName].webLink}
                />
                <div ref={projectBodyRef} className="dncreateEnd"><p>end</p></div>
            </div>
        </div>
    )
}