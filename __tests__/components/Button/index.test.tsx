import React from 'react';
import { StyleSheet } from 'react-native';
import { fireEvent, screen } from '@testing-library/react-native';

import { Button, getButtonStyle } from '../../../src/components/Button';
import { renderComponent } from '../../../test-utils/renderComponent';

describe('Button', () => {
  it('renders the title and calls onPress', async () => {
    const onPress = jest.fn();
    await renderComponent(<Button title="Salvar" onPress={onPress} />);

    fireEvent.press(screen.getByRole('button'));

    expect(screen.getByText('Salvar')).toBeTruthy();
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('shows loading state and disables the action', async () => {
    const renderer = await renderComponent(<Button title="Salvar" loading />);

    expect(screen.getByRole('button', { disabled: true })).toBeTruthy();
    expect(
      renderer.container.queryAll(instance => instance.type === 'ActivityIndicator'),
    ).toHaveLength(1);
    expect(screen.queryByText('Salvar')).toBeNull();
  });

  it('applies fit content and pressed styles', async () => {
    const renderer = await renderComponent(<Button title="Voltar" fitContent />);
    const button = renderer.getByRole('button');
    const flattenedStyle = StyleSheet.flatten(button.props.style);
    const pressedStyle = StyleSheet.flatten(
      getButtonStyle(
        { pressed: true },
        {
          fitContent: true,
          isDisabled: false,
          size: 'medium',
          variant: 'primary',
        },
      ),
    );

    fireEvent(button, 'pressIn');

    expect(flattenedStyle.alignSelf).toBe('flex-start');
    expect(pressedStyle).toEqual(expect.objectContaining({ opacity: 0.75 }));
    expect(button).toBeTruthy();
  });
});
