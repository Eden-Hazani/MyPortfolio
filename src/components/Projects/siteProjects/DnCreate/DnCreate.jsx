import { useEffect, useRef } from "react"
import useOnScreen from "../../../../hooks/useOnScreen"
import { ExternalLinks } from "../../Shared/ExternalLinks"
import './dncreate.css'
import { ImageWall } from "./DncreateComponents/ImageWall"
import { ReviewWall } from "./DncreateComponents/ReviewWall"

export function DnCreate(props) {
    const projectBodyRef = useRef(null)
    const isBottom = useOnScreen(projectBodyRef)
    useEffect(() => {
        if (isBottom) props.closeProject()
    }, [isBottom, props]);


    const headLineRef = useRef(null)
    const glassContainerRef = useRef(null)
    const firstImageRef = useRef(null)
    const secondImageRef = useRef(null)
    const thirdImageRef = useRef(null)

    const firstImgEquipped = useOnScreen(firstImageRef, '0px', .5)
    const secondImgEquipped = useOnScreen(secondImageRef, '0px', .5)
    const thirdImgEquipped = useOnScreen(thirdImageRef, '0px', .5)
    const headLineEquipped = useOnScreen(headLineRef)
    const glassContainerEquipped = useOnScreen(glassContainerRef, '0px', .7)
    return (
        <div className="dncreateMainContainer" style={{ width: window.innerWidth }}>
            <div ref={headLineRef} className={` dnCreateHeader ${headLineEquipped ? 'dnCreateHeaderEnter' : 'dnCreateHeaderExit'}`}>
                <p >Bringing table top gaming</p>
                <p >Into your smartphone</p>
            </div>
            <div ref={glassContainerRef} className={`dncreateGlassShardContainer ${glassContainerEquipped ? 'dncreateGlassShardContainerEnter' : 'dncreateGlassShardContainerLeave'}`}>
                <div className={`${glassContainerEquipped && 'd20DnCreateProjectContainer'}`}>
                    <img className={`${glassContainerEquipped && 'd20DnCreateProject'}`} style={{ width: '12vh', height: '12vh' }} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/d20Dice.svg`} alt="dncreate" />
                </div>
                <div className={`dncreateGlassShard ${glassContainerEquipped ? 'dncreateGlassShardEnter' : 'dncreateGlassShardLeave'}`}></div>
                <img className={`wizardDragon ${glassContainerEquipped ? 'enterWizardDragon' : 'leaveWizardDragon'}`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/wizardDragon.svg`} alt="dncreate" />
                <div className={`dnCreateFirstSection ${glassContainerEquipped ? 'dnCreateFirstSectionEnter' : 'dnCreateFirstSectionLeave'}`}>
                    <p >DnCreate is a React native application</p>
                    <p >designed to serve as a community hub for table top gamers</p>
                    <p>Featuring group photo galleries shared by parties  </p>
                    <p>of players and a live party chat mode (using socketIO)</p>
                </div>
            </div>
            <div className="dncreateImgMainContainer" style={{ flex: 1 }}>
                <div ref={firstImageRef} className="dncreateImgContainer">
                    <img style={{ flex: .1 }} className={`photoGalleryImage ${firstImgEquipped ? 'photoGalleryImageEnter' : 'photoGalleryImageLeave'}`} src={`${process.env.PUBLIC_URL}/imgs/dnCreateImgs/photoGallery.jpeg`} alt="dncreate1" />
                    <div className={`${firstImgEquipped ? 'photoGalleryTxtEnter' : 'photoGalleryTxtLeave'}`} style={{ flex: .3 }}>
                        <p className="dncreatePicDesc">Group photo galleries</p>
                        <p className="dncreatePicDesc"> share anything with your party!</p>
                    </div>
                </div>
                <div ref={secondImageRef} className="dncreateImgContainer" style={{ flex: 1 }}>
                    <img style={{ flex: .1 }} className={`photoGalleryImage ${secondImgEquipped ? 'photoGalleryImageEnter' : 'photoGalleryImageLeave'}`} src={`${process.env.PUBLIC_URL}/imgs/dnCreateImgs/characterPage.jpeg`} alt="dncreate2" />
                    <div className={`${secondImgEquipped ? 'photoGalleryTxtEnter' : 'photoGalleryTxtLeave'}`} style={{ flex: .3 }}>
                        <p className="dncreatePicDesc">Tons of options to customize your character</p>
                        <p className="dncreatePicDesc">from a customizable character sheet</p>
                    </div>
                </div>
                <div ref={thirdImageRef} className="dncreateImgContainer" style={{ flex: 1 }}>
                    <img style={{ flex: .1 }} className={`photoGalleryImage ${thirdImgEquipped ? 'photoGalleryImageEnter' : 'photoGalleryImageLeave'}`} src={`${process.env.PUBLIC_URL}/imgs/dnCreateImgs/chatImg.jpeg`} alt="dncreate2" />
                    <div className={`${thirdImgEquipped ? 'photoGalleryTxtEnter' : 'photoGalleryTxtLeave'}`} style={{ flex: .3 }}>
                        <p className="dncreatePicDesc">Chat with your party members in app with adventure chat.</p>
                        <p className="dncreatePicDesc">including notifications and instant messaging</p>
                    </div>
                </div>
            </div>
            <ReviewWall />
            <ImageWall />
            <ExternalLinks back={() => props.closeProject()} git={'https://github.com/Eden-Hazani/DnCreate'} playStore={'https://play.google.com/store/apps/details?id=com.DnCreate'} />
            <div ref={projectBodyRef} className="dncreateEnd"><p>end</p></div>
        </div>
    )
}