
interface Todo {
    id: string
    title: string
    complete: boolean
  }
  type ListofTodos = Todo[]

export const Todos: React.FC = ({ todos}) => {
    return(
        <ul>
            {todos.map(todos => (
                <li key={todos.id}>
                    {todos.title}
                </li>
            ))}
        </ul>
    )
}