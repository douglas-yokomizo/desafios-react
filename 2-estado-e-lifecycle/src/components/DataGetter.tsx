import { useState, useEffect } from 'react'

interface User {
    name: string
    id: number
    email: string
}

const DataGetter = () => {
    const [userList, setUserList] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setTimeout(() => {
                    setUserList(data)
                    setIsLoading(false)
                }, 2000)
            })
    }, [])

    return (
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {isLoading ? (
                <p>Carregando...</p>
            ) : (
                userList.map((user) =>
                    <li key={user.id}>{user.name}
                        <div>{user.email}</div>
                    </li>
                )
            )}
        </ul>
    )
}


export default DataGetter
