import { useEffect, useState } from "react"

export default function useOnScreen(ref, rootMargin, threshold) {

    const [isIntersecting, setIntersecting] = useState(false)

    let options = {
        root: document.querySelector('#scrollArea'),
        rootMargin,
        threshold: threshold ? threshold : .85
    }

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting), options)
    useEffect(() => {
        observer.observe(ref.current)
        return () => { observer.disconnect() }
    }, [])

    return isIntersecting
}