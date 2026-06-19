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

  const [year, month, day] = date.toISOString().slice(0, 10).split('-');

  return `${day}-${month}-${year}`;
}

export function fromDateInput(value?: string) {
  const trimmedValue = value?.trim();

  if (!trimmedValue) {
    return null;
  }

  const [day, month, year] = trimmedValue.split('-');

  return new Date(`${year}-${month}-${day}T12:00:00.000Z`).toISOString();
}

export function maskDateInput(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  const parts = [digits.slice(0, 2), digits.slice(2, 4), digits.slice(4, 8)].filter(
    Boolean,
  );

  return parts.join('-');
}

export function isDateInputValid(value?: string) {
  const trimmedValue = value?.trim();

  if (!trimmedValue) {
    return true;
  }

  const match = /^(\d{2})-(\d{2})-(\d{4})$/.exec(trimmedValue);

  if (!match) {
    return false;
  }

  const [, day, month, year] = match;
  const date = new Date(`${year}-${month}-${day}T12:00:00.000Z`);

  if (Number.isNaN(date.getTime())) {
    return false;
  }

  return (
    date.getUTCFullYear() === Number(year) &&
    date.getUTCMonth() + 1 === Number(month) &&
    date.getUTCDate() === Number(day)
  );
}
