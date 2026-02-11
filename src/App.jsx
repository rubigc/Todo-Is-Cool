import TodoList from './components/TodoList.jsx'
import { getInitialTodos } from './services/todoService.js'
import './styles/todo.css'

function App() {
  const todos = getInitialTodos()

  return (
    <main className="app">
      <h1 className="app__title">Todo Liste</h1>
      <TodoList todos={todos} />
    </main>
  )
}

export default App
