function TodoList({ todos }) {
  return (
    <section className="todo-list-container" aria-label="Todo Liste">
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-list__item">
            {todo.title}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TodoList
