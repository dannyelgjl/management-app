import React from 'react';
import { StyleSheet } from 'react-native';
import { fireEvent, screen } from '@testing-library/react-native';

import { FilterChip, getFilterChipStyle } from '../../../src/components/FilterChip';
import { renderComponent } from '../../../test-utils/renderComponent';

describe('FilterChip', () => {
  it('renders the label and calls onPress', async () => {
    const onPress = jest.fn();
    await renderComponent(<FilterChip label="Pendentes" onPress={onPress} />);

    fireEvent.press(screen.getByRole('button'));

    expect(screen.getByText('Pendentes')).toBeTruthy();
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('applies selected styles when selected', async () => {
    await renderComponent(<FilterChip label="Todos" selected />);
    const textStyle = screen.getByText('Todos').props.style;

    expect(textStyle).toEqual(expect.arrayContaining([expect.any(Object)]));
  });

  it('applies pressed styles', async () => {
    const renderer = await renderComponent(<FilterChip label="Todos" />);
    const chip = renderer.getByRole('button');
    const flattenedStyle = StyleSheet.flatten(chip.props.style);
    const pressedStyle = StyleSheet.flatten(
      getFilterChipStyle({ pressed: true }, { selected: false }),
    );

    fireEvent(chip, 'pressIn');

    expect(flattenedStyle.borderRadius).toBe(999);
    expect(pressedStyle).toEqual(expect.objectContaining({ opacity: 0.75 }));
    expect(chip).toBeTruthy();
  });
});
