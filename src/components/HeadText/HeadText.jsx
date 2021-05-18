import { useEffect, useRef } from "react";
import constants from "../../utility/constants";
import { FaChevronDown } from "react-icons/fa";
import './headText.css'
import { WelcomeRows } from "../WelcomeRows/WelcomeRows";


export function HeadText(props) {
    const canvas1 = useRef(null)
    const ctx = useRef(null)
    const textCoordinatesData = useRef(null)
    const canvasPosition = useRef(null)
    const mousePosition = { x: null, y: null, radius: 250 }
    let particleArray = [];
    let adjustX = 20;
    let adjustY = -10;

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = constants.ballRadius;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 30) + 1;
        }

        draw() {
            ctx.current.fillStyle = 'white';
            ctx.current.beginPath()
            ctx.current.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.current.closePath();
            ctx.current.fill();
        }
        update() {
            let dx = mousePosition.x - this.x;
            let dy = mousePosition.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mousePosition.radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;
            if (distance < mousePosition.radius) {
                this.x -= directionX;
                this.y -= directionY;
            } else {
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx / 10;
                }
                if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy / 10;
                }
            }
        }
    }

    useEffect(() => {
        ctx.current = canvas1.current.getContext('2d');
        canvas1.current.width = window.innerWidth;
        canvas1.current.height = window.innerHeight;
        canvasPosition.current = canvas1.current.getBoundingClientRect();

        document.addEventListener('mousemove', (e) => {
            if (!canvasPosition) return;
            mousePosition.x = e.x;
            mousePosition.y = e.y;
        });
        window.addEventListener('resize', function () {
            if (canvas1.current) {
                canvasPosition.current = canvas1.current.getBoundingClientRect();
            }
        });

        ctx.current.fillStyle = 'white';
        ctx.current.font = '18px Verdana';
        ctx.current.textAlign = 'center'

        ctx.current.fillText('EH', 25, 45);
        textCoordinatesData.current = ctx.current.getImageData(0, 0, canvas1.current.width, canvas1.current.height);
        init()
        animate(particleArray)
    }, []);



    const init = () => {
        for (let y = 0, y2 = textCoordinatesData.current.height; y < y2; y++) {
            for (let x = 0, x2 = textCoordinatesData.current.width; x < x2; x++) {
                if (textCoordinatesData.current.data[(y * 4 * textCoordinatesData.current.width + (x + 4) + 3)] > 128) {
                    let positionX = x + adjustX;
                    let positionY = y + adjustY;
                    particleArray.push(new Particle(positionX * 5, positionY * 15))
                }
            }
        }
    }


    const animate = () => {
        if (canvas1.current) {
            ctx.current.clearRect(0, 0, canvas1.current.width, canvas1.current.height);
            for (let i = 0; i < particleArray.length; i++) {
                particleArray[i].draw();
                particleArray[i].update();
            }
            connect();
        }
        requestAnimationFrame(animate)
    }

    const connect = () => {
        let opacityVal = 1;
        for (let a = 0; a < particleArray.length; a++) {
            for (let b = a; b < particleArray.length; b++) {
                let dx = particleArray[a].x - particleArray[b].x;
                let dy = particleArray[a].y - particleArray[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 17) {
                    opacityVal = 1 * (distance / 17);
                    if (distance > mousePosition.radius - 234) {
                        particleArray[a].size = 2;
                        ctx.current.strokeStyle = 'rgba(30 , 109, 255,' + opacityVal + ')';
                    }
                    else {
                        particleArray[a].size = constants.ballRadius;
                        ctx.current.strokeStyle = 'rgba(255,255,255,' + opacityVal + ')';
                    }
                    ctx.current.lineWidth = .5;
                    ctx.current.beginPath();
                    ctx.current.moveTo(particleArray[a].x, particleArray[a].y);
                    ctx.current.lineTo(particleArray[b].x, particleArray[b].y);
                    ctx.current.stroke();
                }
            }
        }
    }




    return (

        <div className="headerContainer" style={{ height: window.innerHeight }}>
            <div className="backGroundTxt">
                <p>Hello</p>
            </div>
            <div className="startRowContainer" style={{ width: window.innerWidth / 2 }}>
                <WelcomeRows />
            </div>
            <canvas className="canvasWrapper" style={{ position: 'absolute' }} ref={canvas1}></canvas>
            <div className="learnMore" style={{ width: window.innerWidth }}>
                <p style={{ color: 'white', fontSize: '4vh', margin: 0 }}>Learn More?</p>
                <p style={{ color: 'white', fontSize: '2.5vh', margin: 0, marginTop: '5px', textAlign: 'center' }}>Kick back and let's open the terminal...</p>
                <FaChevronDown onClick={() => props.scroll()} className="frontIcon" />
            </div>
        </div>

    );
}

