const projectJsxInfo = {
    DNCREATE: {
        header: <div><p>Bringing table top gaming</p><p>Into your smartphone</p></div>,
        headerDragon: 'wizardDragon.svg',
        d20Dice: true,
        mobileImgs: true,
        mainText: <div>
            <p>DnCreate is a web based React native application</p>
            <p>designed to serve as a community hub for table top gamers</p>
            <p>I have spent the majorly of 2020 working and updating DnCreate making it into a one of a kind application</p>
            <p>With features such as group photo share and party chat, race and class creation and publishing, and a full party system with the ability to issue and share quests</p>
        </div>,
        firstImg: 'dnCreateImgs/photoGallery.jpeg',
        secondImg: 'dnCreateImgs/characterPage.jpeg',
        thirdImg: 'dnCreateImgs/chatImg.jpeg',
        firstImgWording: <div>
            <p className="dncreatePicDesc">Group photo galleries</p>
            <p className="dncreatePicDesc"> share anything with your party!</p>
        </div>,
        secondImgWording: <div>
            <p className="dncreatePicDesc">Tons of options to customize your character</p>
            <p className="dncreatePicDesc">from a customizable character sheet</p>
        </div>,
        thirdImgWording: <div>
            <p className="dncreatePicDesc">Chat with your party members in app with adventure chat.</p>
            <p className="dncreatePicDesc">including notifications and instant messaging</p>
        </div>,
        reviewWall: true,
        imageWall: true
    },

    SKYSURF: {
        header: <div><p>Go Sky High</p><p>Demo Vacation Site</p></div>,
        headerDragon: 'pilotDragon.svg',
        d20Dice: false,
        mainText: <div>
            <p>My final project at John bryce, a complete vacation site built with ReactTS and NodeJs mySql server</p>
            <p>This site features a full back office admin zone with the ability to change or remove any item on the site.</p>
            <p>The changes on the site are instant for all users with the use of SocketUi</p>
        </div>,
        firstImg: 'skySurfImgs/skysurf1.JPG',
        secondImg: 'skySurfImgs/skysurf2.JPG',
        thirdImg: 'skySurfImgs/skysurf3.JPG',
        firstImgWording: <div>
            <p className="dncreatePicDesc">Complete site registration forms saved into MySql database</p>
            <p className="dncreatePicDesc">Forms saved into MySql database</p>
        </div>,
        secondImgWording: <div>
            <p className="dncreatePicDesc">Intractable vacation dashboard with the ability to</p>
            <p className="dncreatePicDesc">follow and track different vacations</p>
        </div>,
        thirdImgWording: <div>
            <p className="dncreatePicDesc">Full admin back-office with the tools to</p>
            <p className="dncreatePicDesc">add, remove, and change any vacation in real time</p>
        </div>,
        reviewWall: false,
        imageWall: false
    },

    MORBIZ: {
        header: <div><p>BURGERS</p><p>FOR EVERYONE!</p></div>,
        d20Dice: false,
        headerDragon: 'chefDragon.svg',
        mainText: <div>
            <p>Local restaurant website, my first project involving react and redux.</p>
            <p>During the height of the corona virus I have self studied how to use React and redux.</p>
            <p>This project shows my learning curve since the start of 2020.</p>
            <p>from writing very basic react components with no server side elements</p>
            <p>To the complexity of DnCreate with many components and complex functions</p>
        </div>,
        firstImg: 'morbizImgs/morbiz1.JPG',
        secondImg: 'morbizImgs/morbiz2.JPG',
        thirdImg: 'morbizImgs/morbiz3.JPG',
        firstImgWording: <div>
            <p className="dncreatePicDesc">Styled as a 50's diner with a main</p>
            <p className="dncreatePicDesc">focus on a vibrant color pallet</p>
        </div>,
        secondImgWording: <div>
            <p className="dncreatePicDesc">Table reservation system with</p>
            <p className="dncreatePicDesc">dates hours and validations</p>
        </div>,
        thirdImgWording: <div>
            <p className="dncreatePicDesc">Online order system with animations, total cost calculator,</p>
            <p className="dncreatePicDesc">and the ability to customize each item</p>
        </div>,
        reviewWall: false,
        imageWall: false
    },
    SWEETBASH: {
        header: <div><p>For Anyone</p><p>With a sweet tooth</p></div>,
        d20Dice: false,
        headerDragon: 'chefDragon.svg',
        mobileImgs: true,
        mainText: <div>
            <p>Sweet bash is a mobile game developed n React native.</p>
            <p>I wanted to challenge myself and delve into the world of mobile games so I decided to develop Sweet bash</p>
            <p>The main purpose of the game is to create sequences of matching candies and earn points</p>
            <p>There is a chance for spacial item drops that can either help or harm the player</p>
            <p>Developing this game has taught me much in the world of gestures and array indexing</p>
        </div>,
        firstImg: 'sweetBash/gameScreenGif.gif',
        secondImg: 'sweetBash/losingGif.gif',
        thirdImg: 'sweetBash/scoreBoardGif.gif',
        firstImgWording: <div>
            <p className="dncreatePicDesc">Smooth gameplay for matching candy</p>
            <p className="dncreatePicDesc">made with React Native's PanResponder</p>
        </div>,
        secondImgWording: <div>
            <p className="dncreatePicDesc">Limited reset-able timer</p>
            <p className="dncreatePicDesc">You can lose if the timer runs out</p>
        </div>,
        thirdImgWording: <div>
            <p className="dncreatePicDesc">Sweet highscore!</p>
            <p className="dncreatePicDesc">All your scores are saved and viewable from the score menu</p>
        </div>,
        reviewWall: false,
        imageWall: false
    }
}


export { projectJsxInfo }