import {
  fromDateInput,
  formatDate,
  isDateInputValid,
  maskDateInput,
  toDateInput,
} from '../../src/utils/date';

describe('date utils', () => {
  it('formats empty or invalid dates as no due date', () => {
    expect(formatDate()).toBe('Sem prazo');
    expect(formatDate(null)).toBe('Sem prazo');
    expect(formatDate('invalid-date')).toBe('Sem prazo');
  });

  it('converts API dates to date input values', () => {
    expect(toDateInput('2026-07-01T12:00:00.000Z')).toBe('01-07-2026');
    expect(toDateInput('invalid-date')).toBe('');
    expect(toDateInput(null)).toBe('');
  });

  it('converts date input values to API dates', () => {
    expect(fromDateInput('01-07-2026')).toBe('2026-07-01T12:00:00.000Z');
    expect(fromDateInput('')).toBeNull();
    expect(fromDateInput('   ')).toBeNull();
  });

  it('applies a day-month-year mask while typing', () => {
    expect(maskDateInput('1')).toBe('1');
    expect(maskDateInput('1605')).toBe('16-05');
    expect(maskDateInput('16051997')).toBe('16-05-1997');
    expect(maskDateInput('16-05-1997')).toBe('16-05-1997');
    expect(maskDateInput('16/05/1997123')).toBe('16-05-1997');
  });

  it('validates date input values in day-month-year order', () => {
    expect(isDateInputValid('01-07-2026')).toBe(true);
    expect(isDateInputValid('2026-07-01')).toBe(false);
    expect(isDateInputValid('99-99-9999')).toBe(false);
    expect(isDateInputValid('31-02-2026')).toBe(false);
    expect(isDateInputValid('')).toBe(true);
  });
});
