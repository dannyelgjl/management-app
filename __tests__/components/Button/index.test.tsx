import React from 'react';
import { fireEvent, screen } from '@testing-library/react-native';

import { Button } from '../../../src/components/Button';
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
});
