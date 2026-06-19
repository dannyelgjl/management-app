import { nextStatus, statusLabel, TASK_STATUS_OPTIONS } from '../../src/utils/status';

describe('status utils', () => {
  it('returns the next status in the task flow', () => {
    expect(nextStatus('PENDING')).toBe('IN_PROGRESS');
    expect(nextStatus('IN_PROGRESS')).toBe('DONE');
    expect(nextStatus('DONE')).toBe('PENDING');
  });

  it('keeps status labels aligned with the options list', () => {
    expect(TASK_STATUS_OPTIONS).toEqual([
      { label: statusLabel.PENDING, value: 'PENDING' },
      { label: statusLabel.IN_PROGRESS, value: 'IN_PROGRESS' },
      { label: statusLabel.DONE, value: 'DONE' },
    ]);
  });
});
