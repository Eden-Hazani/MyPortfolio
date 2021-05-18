
import { useEffect, useState } from 'react'
import { typeWriterEffect } from '../../utility/utilityFunctions';
import './loadingScreenStyles.css'

export function LoadingScreen() {
    const [text, setText] = useState()
    useEffect(() => {
        getText()
    }, [])

    const getText = async () => {
        await typeWriterEffect("Loading", 'flashBar', 'loading', 50, 250, (val) => { setText(val) }, true);
    };
    return (
        <div style={{ height: window.innerHeight, display: 'flex' }}>
            {text}
        </div>
    )
}