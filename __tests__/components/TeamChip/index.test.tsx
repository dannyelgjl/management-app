import React from 'react';
import { StyleSheet } from 'react-native';
import { fireEvent, screen } from '@testing-library/react-native';

import { TeamChip } from '../../../src/components/TeamChip';
import { Team } from '../../../src/services/types';
import { renderComponent } from '../../../test-utils/renderComponent';

const team: Team = {
  id: '8a2465c4-a3d8-4cf9-9b62-e626fc7be1f1',
  name: 'Engenharia',
  colorHex: '#16A34A',
  description: 'Time de engenharia.',
  tasksCount: 2,
  createdAt: '2026-06-18T12:00:00.000Z',
  updatedAt: '2026-06-18T12:00:00.000Z',
};

describe('TeamChip', () => {
  it('renders team name and color marker', async () => {
    const renderer = await renderComponent(<TeamChip team={team} />);

    expect(screen.getByText('Engenharia')).toBeTruthy();
    expect(
      renderer.container.queryAll(instance => {
        const style = StyleSheet.flatten(instance.props.style);

        return style?.backgroundColor === team.colorHex;
      }),
    ).toHaveLength(1);
  });

  it('calls onPress when it is interactive', async () => {
    const onPress = jest.fn();
    await renderComponent(<TeamChip team={team} onPress={onPress} />);

    fireEvent.press(screen.getByRole('button'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
