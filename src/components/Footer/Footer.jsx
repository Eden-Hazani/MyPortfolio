import './footer.css'

export function Footer() {
    return (
        <div className="footerContainer">
            <p className="allRightsText">&#169; Eden Hazani all rights reserved</p>
            <img className={`anglerFish`} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/anglerFish.svg`} alt="dncreate" />
        </div>
    )
}