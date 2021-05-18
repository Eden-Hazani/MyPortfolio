
import { useEffect, useState } from 'react'
import { typeWriterEffect } from '../../utility/utilityFunctions';

export function TurnOff(props) {
    const [text, setText] = useState()
    useEffect(() => {
        getText()
    }, [])

    const getText = async () => {
        await typeWriterEffect("Offline...", 'flashBar', 'loading', 50, 250, (val) => { setText(val) }, true);
        props.close()
    };
    return (
        <div style={{ height: window.innerHeight, display: 'flex' }}>
            {text}
        </div>
    )
}