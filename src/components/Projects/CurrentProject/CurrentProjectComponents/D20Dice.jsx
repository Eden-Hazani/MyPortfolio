export function D20Dice(props) {
    return (
        <div className={`${props.glassContainerEquipped && 'd20DnCreateProjectContainer'}`}>
            <img className={`${props.glassContainerEquipped && 'd20DnCreateProject'}`} style={{ width: '12vh', height: '12vh' }} src={`${process.env.PUBLIC_URL}/imgs/backgrounds/d20Dice.svg`} alt="dncreate" />
        </div>
    )
}