/**
 * @format
 */

import React from 'react';

import { TaskCard } from '../../../src/components/TaskCard';
import { Task } from '../../../src/services/types';
import { renderComponent } from '../../../test-utils/renderComponent';

const task: Task = {
  id: '7a2465c4-a3d8-4cf9-9b62-e626fc7be1f1',
  title: 'Criar API REST',
  description: 'Implementar contrato de times e tarefas.',
  status: 'PENDING',
  dueDate: '2026-07-01T12:00:00.000Z',
  createdAt: '2026-06-18T12:00:00.000Z',
  updatedAt: '2026-06-18T12:00:00.000Z',
  teams: [
    {
      id: '8a2465c4-a3d8-4cf9-9b62-e626fc7be1f1',
      name: 'Engenharia',
      colorHex: '#16A34A',
      description: 'Time de engenharia.',
      tasksCount: 2,
      createdAt: '2026-06-18T12:00:00.000Z',
      updatedAt: '2026-06-18T12:00:00.000Z',
    },
  ],
};

describe('TaskCard', () => {
  it('renders a task card with status and team chip', async () => {
    const renderer = await renderComponent(<TaskCard task={task} onPress={jest.fn()} />);

    expect(renderer.getByText('Criar API REST')).toBeTruthy();
    expect(renderer.getByText('Pendente')).toBeTruthy();
    expect(renderer.getByText('Engenharia')).toBeTruthy();
    expect(renderer.getByText(/1 time/)).toBeTruthy();
  });

  it('renders empty team state when no team is linked', async () => {
    const renderer = await renderComponent(
      <TaskCard task={{ ...task, teams: [] }} onPress={jest.fn()} />,
    );

    expect(renderer.getByText(/Sem time/)).toBeTruthy();
  });
});
