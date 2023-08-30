import { useState } from 'react'

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(name, email, password)
    }

    return (
        <>
            <h2>1- Formulário de Registro</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginTop: '1rem' }}>
                <label htmlFor="nameInput">Name:</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id='nameInput' placeholder='Insira seu nome' />
                <label htmlFor="emailInput">E-mail:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='emailInput' placeholder='Insira seu email' />
                <label htmlFor="passwordInput">Password:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id='passwordInput' placeholder='Insira sua senha' />
                <button type='submit' >Entrar</button>
            </form>
        </>
    )
}

export default RegisterForm