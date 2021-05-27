import { useRef } from 'react'
import useOnScreen from '../../../../../hooks/useOnScreen';
import './imageWall.css'

export function ImageWall() {
    const firstRowRef = useRef(null);
    const firstRowEquipped = useOnScreen(firstRowRef, '0px', .5)

    return (
        <div ref={firstRowRef} className="imageWallCont">
            <div className={`innerImageWallCont ${firstRowEquipped ? 'enterFirstRowImageWallPictures' : 'LeaveImageWallPictures'}`}>
                <img className={`imageWallImage`} style={{ flex: .1 }} src={`${process.env.PUBLIC_URL}/imgs/dncreateImgs/characterPage.jpeg`} alt="dncreate2" />
                <img className={`imageWallImage`} style={{ flex: .1 }} src={`${process.env.PUBLIC_URL}/imgs/dncreateImgs/adventure.png`} alt="dncreate2" />
                <img className={`imageWallImage`} style={{ flex: .1 }} src={`${process.env.PUBLIC_URL}/imgs/dncreateImgs/chatImg.jpeg`} alt="dncreate2" />
                <img className={`imageWallImage`} style={{ flex: .1 }} src={`${process.env.PUBLIC_URL}/imgs/dncreateImgs/photoGallery.jpeg`} alt="dncreate2" />
            </div>
            <div className={`innerImageWallCont ${firstRowEquipped ? 'enterSecondRowImageWallPictures' : 'LeaveImageWallPictures'}`}>
                <img className={`imageWallImage`} style={{ flex: .1 }} src={`${process.env.PUBLIC_URL}/imgs/dncreateImgs/quests.png`} alt="dncreate2" />
                <img className={`imageWallImage`} style={{ flex: .1 }} src={`${process.env.PUBLIC_URL}/imgs/dncreateImgs/raceCreator.png`} alt="dncreate2" />
                <img className={`imageWallImage`} style={{ flex: .1 }} src={`${process.env.PUBLIC_URL}/imgs/dncreateImgs/raceMenu.png`} alt="dncreate2" />
                <img className={`imageWallImage`} style={{ flex: .1 }} src={`${process.env.PUBLIC_URL}/imgs/dncreateImgs/weaponsAndEquipment.png`} alt="dncreate2" />
            </div>
            <div className={`imageWallTxt ${firstRowEquipped ? 'imageWallTxtEnter' : 'imageWallTxtLeave'}`}>
                <p>With over 2000 users sharing</p>
                <p>creations and adventures together</p>
                <p>DnCreate continues to grow and get better each update</p>
            </div>
        </div>
    )
}