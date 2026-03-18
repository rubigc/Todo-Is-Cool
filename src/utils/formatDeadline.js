export function formatDeadline(deadline) {
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
