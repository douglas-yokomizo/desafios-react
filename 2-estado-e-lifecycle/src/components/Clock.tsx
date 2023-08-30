import { useState, useEffect } from 'react'
const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <>
            <h2>2- Relógio em tempo real</h2>
            <div>{time.toLocaleTimeString()}</div>
        </>
    )
}

export default Clock