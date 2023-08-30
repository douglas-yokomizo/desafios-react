import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const incrementar = () => {
        setCount(count + 1)
    }
    const decrementar = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <>
            <h3 style={{ marginTop: '16px' }}>Contador: {count}</h3>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
            <button onClick={reset}>reset</button>
        </>
    )
}

export default Counter