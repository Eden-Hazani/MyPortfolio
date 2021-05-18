import './welcomeRows.css';

export function WelcomeRows() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="openingRow">
                <div className="centerOpenWords">
                    <img className="reduxOpenLogo" src={'/imgs/logos/redux.svg'} width={30} height={30} alt={'reduxLogo'} />
                    <span className="regularTxt myNameOpen">My name is Eden hazani</span>
                </div>

            </div>

            <div className="openingRow">
                <div className="centerOpenWords">
                    <img className="nodeOpenLogo" src={'/imgs/logos/nodeJS.svg'} width={30} height={30} alt={'nodeLogo'} />
                    <span className="regularTxt imOpen">I'm a web developer</span>
                </div>
            </div>


            <div className="openingRow">
                <div className="centerOpenWords">
                    <img className="jsOpenLogo" src={'/imgs/logos/javascript.svg'} width={30} height={30} alt={'jsLogo'} />
                    <span className="regularTxt welcomeOpen">Welcome To My Portfolio</span>
                </div>

            </div>

        </div>
    )
}