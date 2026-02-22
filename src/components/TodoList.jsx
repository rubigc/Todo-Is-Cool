function formatDeadline(deadline) {
  if (!deadline) return 'Ohne Termin'
  const date = new Date(deadline)

  if (Number.isNaN(date.getTime())) {
    return deadline
  }

  return date.toLocaleString('de-DE', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

function TodoList({ todos }) {
  return (
    <section className="todo-list-container" aria-label="Todo Liste">
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-list__item">
            <div className="todo-list__title">{todo.title}</div>
            <div className="todo-list__meta">
              <span className="todo-list__label">Deadline:</span>
              <span className="todo-list__deadline">
                {formatDeadline(todo.deadline)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TodoList
