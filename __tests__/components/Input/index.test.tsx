import React from 'react';
import { screen } from '@testing-library/react-native';

import { Input } from '../../../src/components/Input';
import { renderComponent } from '../../../test-utils/renderComponent';

describe('Input', () => {
  it('renders label, value and error message', async () => {
    await renderComponent(
      <Input
        label="Título"
        value="Criar tarefa"
        error="Campo obrigatório"
        onChangeText={jest.fn()}
      />,
    );

    expect(screen.getByText('Título')).toBeTruthy();
    expect(screen.getByDisplayValue('Criar tarefa')).toBeTruthy();
    expect(screen.getByText('Campo obrigatório')).toBeTruthy();
  });

  it('calls onChangeText and aligns multiline input to the top', async () => {
    const onChangeText = jest.fn();
    const renderer = await renderComponent(
      <Input multiline value="Descrição atual" onChangeText={onChangeText} />,
    );
    const input = renderer.getByDisplayValue('Descrição atual');

    input.props.onChangeText('Nova descrição');

    expect(input.props.textAlignVertical).toBe('top');
    expect(onChangeText).toHaveBeenCalledWith('Nova descrição');
  });
});
