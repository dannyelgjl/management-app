import {
  getTeamDeleteMessage,
  getTeamPreviewColor,
  getTeamTaskCountLabel,
} from '../../src/utils/team';

describe('team utils', () => {
  it('formats task count labels for teams', () => {
    expect(getTeamTaskCountLabel()).toBe('0 tarefas vinculadas');
    expect(getTeamTaskCountLabel(1)).toBe('1 tarefa vinculada');
    expect(getTeamTaskCountLabel(3)).toBe('3 tarefas vinculadas');
  });

  it('returns a safe preview color', () => {
    expect(getTeamPreviewColor('#2563EB')).toBe('#2563EB');
    expect(getTeamPreviewColor('#abc123')).toBe('#abc123');
    expect(getTeamPreviewColor('blue')).toBe('#71717A');
  });

  it('builds delete confirmation messages', () => {
    expect(getTeamDeleteMessage()).toBe('Esse time será removido da API.');
    expect(getTeamDeleteMessage(1)).toBe(
      'Esse time está vinculado a 1 tarefa. As tarefas continuam existindo, mas perdem esse vínculo.',
    );
    expect(getTeamDeleteMessage(2)).toBe(
      'Esse time está vinculado a 2 tarefas. As tarefas continuam existindo, mas perdem esse vínculo.',
    );
  });
});
