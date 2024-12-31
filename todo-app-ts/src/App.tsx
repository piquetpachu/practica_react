import { useState } from "react"


const NockToDo = [
  {
    id:'1',
    title:'todo 1',
    completed: false
  },
  {
    id:'2',
    title:'todo 2',
    completed: false
  },
  {
    id:'3',
    title:'todo 3',
    completed: false
  }
]

const App =(): JSX.Element=>{
  const [todos, setTodos] = useState(NockToDo)
  return(
    <Todos todos={todos} />
    <h1>To-DO</h1>
  )
}

export default App
