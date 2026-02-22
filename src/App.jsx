import { useMemo, useState } from 'react'
import TodoList from './components/TodoList.jsx'
import { getInitialTodos } from './services/todoService.js'
import './styles/todo.css'

const EMPTY_FORM = {
  title: '',
  date: '',
  time: '',
}

function App() {
  const initialTodos = useMemo(() => getInitialTodos(), [])
  const [todos, setTodos] = useState(initialTodos)
  const [form, setForm] = useState(EMPTY_FORM)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.title.trim() || !form.date || !form.time) {
      return
    }

    const newTodo = {
      id: Date.now(),
      title: form.title.trim(),
      deadline: `${form.date}T${form.time}`,
    }

    setTodos((prev) => [newTodo, ...prev])
    setForm(EMPTY_FORM)
  }

  return (
    <main className="app">
      <h1 className="app__title">Todo Liste</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <label className="todo-form__field">
          <span className="todo-form__label">Aufgabe</span>
          <input
            className="todo-form__input"
            type="text"
            name="title"
            placeholder="Neue Aufgabe"
            value={form.title}
            onChange={handleChange}
            required
          />
        </label>
        <label className="todo-form__field">
          <span className="todo-form__label">Datum</span>
          <input
            className="todo-form__input"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </label>
        <label className="todo-form__field">
          <span className="todo-form__label">Uhrzeit</span>
          <input
            className="todo-form__input"
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />
        </label>
        <button className="todo-form__button" type="submit">
          Hinzufügen
        </button>
      </form>
      <TodoList todos={todos} />
    </main>
  )
}

export default App
