import Counter from "./components/Counter"
import HelloWorld from "./components/HelloWorld"
import MembersList from "./components/MembersList"
import Profile from "./components/Profile"

const members = [
  { name: 'Joao', job: 'jogador', age: 30 },
  { name: 'Ana', job: 'modelo', age: 20 },
  { name: 'Pedro', job: 'fotógrafo', age: 34 }
]

function App() {

  return (
    <>
      <HelloWorld />
      <Profile name="Douglas" job="Desenvolvedor Front-end" age={28} />
      <MembersList members={members} />
      <Counter />
    </>
  )
}

export default App
