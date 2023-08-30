import { useState } from 'react'

const Toggle = () => {
    const [isOn, setIsOn] = useState(true)
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setIsOn(!isOn)
        setCount(count + 1)
    }

    return (
        <>
            <h2>1- Usando múltiplos estados</h2>
            <button onClick={handleClick}>
                {isOn ? 'ON' : 'OFF'}
            </button>
            <p>Clicado <strong>{count}</strong> vezes</p>
        </>
    )
}

export default Toggle