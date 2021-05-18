const typeWriterEffect = (text, flashBarClass, textClass, textTimer, flashBarStayTimer, resultCallback, stopFlashBar) => {
    return new Promise((resolve, reject) => {
        let currentText = null;
        let current = null
        const interval = setInterval(() => {
            if (currentText && text.length === currentText.length) {
                clearInterval(interval)
                setTimeout(() => {
                    current = stopFlashBar ? <span className={`${textClass}`}>{currentText ? currentText : null}<span className={`${flashBarClass}`}>_</span></span> : <span className={`${textClass}`}>{currentText ? currentText : null}</span>
                    resultCallback(current)
                    resolve('ENDED_INTERVAL')
                }, flashBarStayTimer);
                return;
            }
            const splitText = text.split('');
            if (currentText) {
                const currentLength = currentText.length;
                currentText = currentText + splitText[currentLength]
            }
            else if (!currentText) {
                currentText = splitText[0]
            }
            current = <span className={`${textClass}`}>{currentText ? currentText : null}<span className={`${flashBarClass}`}>_</span></span>;
            resultCallback(current)
        }, textTimer);
    })
}

const typeWriterButtonEffect = (text, flashBarClass, textTimer, flashBarStayTimer, resultCallback, onClickEvent) => {
    return new Promise((resolve, reject) => {
        let currentText = null;
        const interval = setInterval(() => {
            if (currentText && text.length === currentText.length) {
                clearInterval(interval)
                setTimeout(() => {
                    let current = <span onClick={() => onClickEvent()} className={'terminalButton'}>{currentText ? currentText : null}</span>;
                    resultCallback(current)
                    resolve('ENDED_INTERVAL')
                }, flashBarStayTimer);
                return;
            }
            const splitText = text.split('');
            if (currentText) {
                const currentLength = currentText.length;
                currentText = currentText + splitText[currentLength]
            }
            else if (!currentText) {
                currentText = splitText[0]
            }
            let current = <span className={'txt'}>{currentText ? currentText : null}<span className={`${flashBarClass}`}>_</span></span>;
            resultCallback(current)
        }, textTimer);
    })
}


const typeWriterImageEffect = (text, iconSrc, textClass, flashBarClass, textTimer, resultCallback, stopFlashBar) => {
    return new Promise((resolve, reject) => {
        let currentText = null;
        const interval = setInterval(() => {
            if (currentText && text.length === currentText.length) {
                clearInterval(interval)
                setTimeout(() => {
                    let current = stopFlashBar ? <div className={'typeWriterImgDiv'}><span className={`${textClass}`}>{currentText ? currentText : null}</span><img src={iconSrc} alt="icon" width={30} height={30} /><span className={`${flashBarClass}`}>_</span></div> :
                        <div className={'typeWriterImgDiv'}><span className={`${textClass}`}>{currentText ? currentText : null}</span><img src={iconSrc} alt="icon" width={30} height={30} /></div>
                    resultCallback(current)
                    resolve('ENDED_INTERVAL')
                }, 500);
                return;
            }
            const splitText = text.split('');
            if (currentText) {
                const currentLength = currentText.length;
                currentText = currentText + splitText[currentLength]
            }
            else if (!currentText) {
                currentText = splitText[0]
            }
            let current = <span className={'txt'}>{currentText ? currentText : null}<span className={`${flashBarClass}`}>_</span></span>;
            if (currentText && text.length === currentText.length) {
                current = <div className={'typeWriterImgDiv'}><span className={`${textClass}`}>{currentText ? currentText : null}</span><img src={iconSrc} alt="icon" width={30} height={30} /><span className={`${flashBarClass}`}>_</span></div>
            }
            resultCallback(current)
        }, textTimer);
    })
}


const createWhitespace = (numberOfWhiteSpace) => {
    let spaceArray = []
    for (let i = 0; i < numberOfWhiteSpace; i++) {
        spaceArray.push(<span>&nbsp;</span>)
    }

    return spaceArray.map((item) => item)
}

const saveSession = (saveType) => {
    let storage = sessionStorage.getItem('isTutorial');
    if (!storage) {
        storage = {}
    }
    else if (storage) {
        storage = JSON.parse(storage)
    }
    storage[saveType] = true
    sessionStorage.setItem('isTutorial', JSON.stringify(storage))
    return storage
}

export { typeWriterEffect, createWhitespace, typeWriterButtonEffect, typeWriterImageEffect, saveSession }