import { useState } from 'react'

interface Todo {
    id: number
    task: string
}

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [task, setTask] = useState<string>('')

    const taskLowerCase = task.toLowerCase();

    const filteredItems = todos.filter((todo) => todo.task.toLowerCase().includes(taskLowerCase))

    const addTodo = () => {
        setTodos([...todos, { id: Math.random(), task: task }])
        setTask('')
    }

    return (
        <>
            <h2>3- Todo List</h2>
            <input value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder="Insira sua tarefa..." />
            <button onClick={addTodo}>Adicionar tarefa</button>
            <ul>
                {filteredItems.map((todo) => (
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </>
    )
}

export default TodoList