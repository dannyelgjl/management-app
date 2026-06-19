export function formatDate(value?: string | null) {
  if (!value) {
    return 'Sem prazo';
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return 'Sem prazo';
  }

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function toDateInput(value?: string | null) {
  if (!value) {
    return '';
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return date.toISOString().slice(0, 10);
}

export function fromDateInput(value?: string) {
  if (!value?.trim()) {
    return null;
  }

  return new Date(`${value}T12:00:00.000Z`).toISOString();
}
