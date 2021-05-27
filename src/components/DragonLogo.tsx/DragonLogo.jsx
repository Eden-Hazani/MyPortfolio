
import { useEffect, useRef } from 'react'
import useOnScreen from '../../hooks/useOnScreen';
import './dragonLogo.css'


export function DragonLogo() {
    const img = useRef(null);
    const containDiv = useRef(null);
    const isVisible = useOnScreen(img, '-80px')

    let transConstrain = 50;
    let moveConstrain = window.innerWidth / 5;



    useEffect(() => {
        document.addEventListener('mousemove', (e) => {
            let xy = [e.clientX, e.clientY];
            let position = xy.concat([img.current]);
            window.requestAnimationFrame(function () {
                transformElement(img.current, containDiv.current, position);
            });
        });
    }, [])

    const transforms = (x, y, el) => {
        let box = el.getBoundingClientRect();
        let calcX = -(y - window.innerHeight / 2) / transConstrain;
        let calcY = (x - window.innerWidth / 2) / transConstrain;

        let mCalcX = -(y - window.innerHeight / 2) / moveConstrain;
        let mCalcY = (x - window.innerWidth / 2) / moveConstrain;

        return ({
            transform: "perspective(500px) "
                + "   rotateX(" + calcX + "deg) "
                + "   rotateY(" + calcY + "deg) ",
            top: mCalcX * 30 + "px",
            right: mCalcY * 30 + "px"
        }
        )
    };

    const transformElement = (el, parentEl, xyEl) => {
        if (parentEl !== null && el !== null) {
            el.style.transform = transforms.apply(null, xyEl).transform;
            parentEl.style.top = transforms.apply(null, xyEl).top;
            parentEl.style.right = transforms.apply(null, xyEl).right;
        }
    }


    return (
        <div ref={containDiv} className={`dragonImgCont ${isVisible ? 'enterDragon' : 'leaveDragon'}`}>
            <img ref={img} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/homeDragon.svg`}
                alt="dragonImg" className={`dragonImg`} />

        </div>
    )
}
