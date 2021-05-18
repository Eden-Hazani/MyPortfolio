import { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { saveSession, typeWriterEffect } from "../../utility/utilityFunctions";
import { list } from '../../utility/imageInformation.json';
import './photoBar.css'

export function PhotoBar(props) {
    const [isOpen, setIsOpen] = useState('');
    const [headline, setHeadline] = useState({ firstRow: '', secondRow: "" });
    const [pickedImage, setPickedImage] = useState(null);
    const [isTutorial, setIsTutorial] = useState(sessionStorage.getItem('isTutorial') ? JSON.parse(sessionStorage.getItem('isTutorial')) : null)

    useEffect(() => {
        isOpen && startType()
    }, [isOpen])

    const startType = async () => {
        await typeWriterEffect('Click on images to enlarge.', 'flashBarPurple', 'imageText', 20, 220, (val) => setHeadline(prevState => ({ ...prevState, firstRow: val })));
        await typeWriterEffect('Press again to close', 'flashBarPurple', 'imageText', 20, 220, (val) => setHeadline(prevState => ({ ...prevState, secondRow: val })), true);
    }

    const handleClick = () => {
        const result = saveSession('photos')
        setIsTutorial(result)
    }

    return (
        <div className={`sideMenuPosition ${isOpen}`} >
            <FaChevronUp onClick={() => setIsOpen('opened')} className="sideMenuIcon" />
            <p className="photoText">Photos</p>
            <div className="photoModelContainer" style={{ height: window.innerHeight, width: window.innerWidth }}>
                <div style={{ flex: '.1' }}>
                    <FaChevronDown onClick={() => setIsOpen('closed')} className="sideMenuIcon" />
                </div>
                <div className="innerImageContainer">
                    <img onClick={() => setPickedImage(list[props.imagePicked].img1)} className="photoGalleryImage" src={list[props.imagePicked].img1} width={250} height={450} alt="dncreate1" />
                    <img onClick={() => setPickedImage(list[props.imagePicked].img2)} className="photoGalleryImage" src={list[props.imagePicked].img2} width={250} height={450} alt="dncreate1" />
                    <img onClick={() => setPickedImage(list[props.imagePicked].img3)} className="photoGalleryImage" src={list[props.imagePicked].img3} width={250} height={450} alt="dncreate1" />
                    <img onClick={() => setPickedImage(list[props.imagePicked].img4)} className="photoGalleryImage" src={list[props.imagePicked].img4} width={250} height={450} alt="dncreate1" />
                </div>
                {!isTutorial?.photos && isOpen === "opened" && <div className="ImageTutorialContainer" style={{ height: window.innerHeight, width: window.innerWidth }}>
                    <div style={{ minHeight: '100px', paddingTop: '15px' }}>
                        {headline.firstRow}
                        <br />
                        {headline.secondRow}
                    </div>
                    <div className="tutorialImgInnerContainer">
                        <img src={'/imgs/logos/mouseClick.svg'} width={50} height={50} alt={'mouseClick'} className="mouseClickImg" />
                        <img onClick={() => handleClick()} className="photoGalleryImage" src={list[props.imagePicked].img1} width={250} height={450} alt="dncreate1" />
                    </div>
                </div>}
                {pickedImage ? <div className="mainImageContainer">
                    <img onClick={() => setPickedImage(null)} className="mainImage" src={pickedImage} alt="dncreate1" />
                </div> : null}
            </div>
        </div>
    )
}