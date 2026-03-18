import test from 'node:test'
import assert from 'node:assert/strict'
import { formatDeadline } from '../src/utils/formatDeadline.js'

test('formatDeadline returns a fallback label when no deadline is provided', () => {
  assert.equal(formatDeadline(''), 'Ohne Termin')
  assert.equal(formatDeadline(null), 'Ohne Termin')
  assert.equal(formatDeadline(undefined), 'Ohne Termin')
})

test('formatDeadline returns the original value for invalid dates', () => {
  assert.equal(formatDeadline('not-a-date'), 'not-a-date')
})

test('formatDeadline formats valid dates in German locale output', () => {
  const formatted = formatDeadline('2026-03-18T14:30')

  assert.match(formatted, /18/)
  assert.match(formatted, /03|M[aä]rz/)
  assert.match(formatted, /2026/)
  assert.match(formatted, /14:30/)
})
