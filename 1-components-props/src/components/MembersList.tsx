import Profile from "./Profile"

interface MembersListProps {
    members:
    { name: string, job: string, age: number }[]
}

const MembersList = ({ members }: MembersListProps) => {

    return members.map((member, index) => (
        <Profile key={index} name={member.name} job={member.job} age={member.age} />
    ))
}

export default MembersList