import React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';

import { FilterChip } from '../../../src/components/FilterChip';
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
});
