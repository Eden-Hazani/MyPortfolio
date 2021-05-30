import { useEffect, useRef, useState } from 'react'
import useOnScreen from '../../../../hooks/useOnScreen'
import './reviewWall.css'
import { FaStar } from 'react-icons/fa'

export function ReviewWall() {
    const [currentImg, setCurrentImg] = useState(null)
    const [jsxArray, setJsxArray] = useState([])
    const reviewRef = useRef(null)
    const innerReviewRef = useRef(null)
    const reviewEquipped = useOnScreen(reviewRef, '0px', .5)
    const innerReviewEquipped = useOnScreen(innerReviewRef, '0px', .1)


    useEffect(() => {
        const isMobile = window.innerWidth < 600
        const randomizer = () => {
            const numberArray = [];
            const jsxArray = [];
            while (numberArray.length < 10) {
                const randomNumber = Math.floor(Math.random() * 10) + 1;
                if (!numberArray.includes(randomNumber) && numberArray.length < 10) {
                    numberArray.push(randomNumber)
                }
            }
            let index = 0;
            for (let number of numberArray) {
                jsxArray.push(<img alt="morbizSign" src={`${process.env.PUBLIC_URL}/imgs/dncreateReviews/${number}.jpg`}
                    onClick={() => setCurrentImg(`${number}.jpg`)}
                    className={`reviewImg  ${innerReviewEquipped ? 'enterReviewImg' : 'leaveReviews'}`}
                    style={{
                        animationDelay: `${index === 0 ? 0 : number / 2.5}s`,
                        margin: '2.5%',
                        width: `${isMobile ? (Math.floor(Math.random() * 5) + 10) * 3.5 : (Math.floor(Math.random() * 5) + 3.2) * 3.5}%`,
                        height: 'auto',
                        [Math.random() > .5 ? 'marginLeft' : 'marginRight']:
                            `${isMobile ? (Math.floor(Math.random() * 10) + 1) * 1.5 : (Math.floor(Math.random() * 5) + 2) * 2}%`
                    }} />)
                index++
            }
            setJsxArray(jsxArray)
        }
        randomizer()
    }, [innerReviewEquipped])

    return (
        <div className="reviewWallCont" ref={reviewRef}>
            <p className={`reviewWallHeader ${reviewEquipped ? 'enterReviews' : 'leaveReviews'}`}>Constant Feedback</p>
            <p className={`reviewWallSubHeader ${reviewEquipped ? 'enterReviews' : 'leaveReviews'}`}>Throughout the development of DnCreate I have put my main focus at addressing feedback</p>
            <p style={{ margin: 0 }} className={`reviewWallSubHeader ${reviewEquipped ? 'enterReviews' : 'leaveReviews'}`}>Click on a review to enlarge it</p>
            <div ref={innerReviewRef} className={`${reviewEquipped ? 'enterReviews' : 'leaveReviews'}`}>
                {jsxArray.map((item, index) => {
                    if (index <= 6) return item
                    return null
                })}
                <div className="topLayerReviews">
                    {jsxArray.map((item, index) => {
                        if (index >= 6) return item
                        return null
                    })}
                </div>
            </div>
            <div className={`currentScore ${reviewEquipped ? 'enterCurrentScore' : 'leaveCurrentScore'}`}>
                <p>4.3</p>
                <FaStar size={'25%'} color={'white'} />
            </div>
            {currentImg && <div className="mainReviewImageContainer">
                <img onClick={() => setCurrentImg(null)} alt="currentImg" className="mainReviewImage" src={`${process.env.PUBLIC_URL}/imgs/dncreateReviews/${currentImg}`} />
            </div>}
        </div>
    )
}