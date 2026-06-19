import React from 'react';
import { StyleSheet } from 'react-native';
import { fireEvent, screen } from '@testing-library/react-native';

import { TeamChip, getTeamChipStyle } from '../../../src/components/TeamChip';
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

  it('applies selected and pressed styles when interactive', async () => {
    await renderComponent(<TeamChip team={team} selected onPress={jest.fn()} />);
    const chip = screen.getByRole('button');
    const flattenedChipStyle = StyleSheet.flatten(chip.props.style);
    const pressedStyle = StyleSheet.flatten(getTeamChipStyle({ pressed: true }, true));
    const labelStyle = screen.getByText('Engenharia').props.style;

    fireEvent(chip, 'pressIn');

    expect(flattenedChipStyle.borderColor).toBeTruthy();
    expect(pressedStyle).toEqual(expect.objectContaining({ opacity: 0.75 }));
    expect(chip).toBeTruthy();
    expect(labelStyle).toEqual(expect.arrayContaining([expect.any(Object)]));
  });
});
