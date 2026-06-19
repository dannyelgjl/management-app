/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import { TaskCard } from '../src/components/TaskCard';
import { Task } from '../src/services/types';

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

test('renders a task card with status and team chip', async () => {
  let renderer: ReactTestRenderer.ReactTestRenderer | undefined;

  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(<TaskCard task={task} onPress={jest.fn()} />);
  });

  const json = JSON.stringify(renderer?.toJSON());

  expect(json).toContain('Criar API REST');
  expect(json).toContain('Pendente');
  expect(json).toContain('Engenharia');
});
