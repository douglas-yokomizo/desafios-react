import { useState } from 'react'

const RegisterForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target // aqui pega o 'name' do input e o 'value'
        setValues({ ...values, [name]: value }) //esse nome é usado para atualizar as propriedades dinamicamente com o valor do input, por isso é importante ter a propriedade 'name' definida no input
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(values)
    }

    return (
        <>
            <h2>1- Formulário de Registro</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginTop: '1rem' }}>
                <label htmlFor="nameInput">Name:</label>
                <input name='name' value={values.name} onChange={handleChange} type="text" id='nameInput' placeholder='Insira seu nome' />
                <label htmlFor="emailInput">E-mail:</label>
                <input name='email' value={values.email} onChange={handleChange} type="email" id='emailInput' placeholder='Insira seu email' />
                <label htmlFor="passwordInput">Password:</label>
                <input name='password' value={values.password} onChange={handleChange} type="password" id='passwordInput' placeholder='Insira sua senha' />
                <button type='submit' >Entrar</button>
            </form>
        </>
    )
}

export default RegisterForm