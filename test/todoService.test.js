import test from 'node:test'
import assert from 'node:assert/strict'
import { getInitialTodos } from '../src/services/todoService.js'

test('getInitialTodos returns the expected starter todos', () => {
  assert.deepEqual(getInitialTodos(), [
    {
      id: 1,
      title: 'Projektstruktur erstellen',
      deadline: '2026-02-28T09:00',
    },
    {
      id: 2,
      title: 'Erste Todo Ansicht anzeigen',
      deadline: '2026-03-01T15:30',
    },
  ])
})

test('getInitialTodos keeps todo data shape stable', () => {
  const todos = getInitialTodos()

  assert.equal(Array.isArray(todos), true)
  assert.equal(todos.length > 0, true)

  todos.forEach((todo) => {
    assert.equal(typeof todo.id, 'number')
    assert.equal(typeof todo.title, 'string')
    assert.equal(typeof todo.deadline, 'string')
  })
})
