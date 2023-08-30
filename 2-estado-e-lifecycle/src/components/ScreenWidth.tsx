import { useState, useEffect } from 'react'

const ScreenWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <h2>4- Largura da tela</h2>
            <div>{windowWidth}px</div>
        </>
    )
}

export default ScreenWidth