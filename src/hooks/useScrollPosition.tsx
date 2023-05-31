import { useState, useEffect } from 'react'

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [scrollPercentage, setScrollPercentage] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight =
                document.documentElement.scrollHeight - window.innerHeight
            const currentScroll = window.scrollY

            setScrollPosition(currentScroll)
            setScrollPercentage((currentScroll / totalHeight) * 100)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return { scrollPosition, scrollPercentage }
}

export default useScrollPosition
