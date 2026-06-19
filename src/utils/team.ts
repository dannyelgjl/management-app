const FALLBACK_TEAM_COLOR = '#71717A';

export function getTeamTaskCountLabel(tasksCount?: number) {
  const count = tasksCount ?? 0;

  if (count === 1) {
    return '1 tarefa vinculada';
  }

  return `${count} tarefas vinculadas`;
}

export function getTeamPreviewColor(colorHex: string) {
  if (/^#[0-9A-Fa-f]{6}$/.test(colorHex)) {
    return colorHex;
  }

  return FALLBACK_TEAM_COLOR;
}

export function getTeamDeleteMessage(tasksCount?: number) {
  const count = tasksCount ?? 0;

  if (!count) {
    return 'Esse time será removido da API.';
  }

  const taskLabel = count === 1 ? 'tarefa' : 'tarefas';

  return `Esse time está vinculado a ${count} ${taskLabel}. As tarefas continuam existindo, mas perdem esse vínculo.`;
}
