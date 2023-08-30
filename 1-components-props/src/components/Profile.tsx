
interface ProfileProps {
    name: string
    job: string
    age: number
}

const Profile = ({ name, job, age }: ProfileProps) => {
    return (
        <>
            <h1>Olá {name}</h1>
            <p>Idade: {age}</p>
            <p>Profissão: {job}</p>
        </>
    )
}

export default Profile