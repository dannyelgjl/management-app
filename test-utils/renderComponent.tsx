import React from 'react';
import { render } from '@testing-library/react-native';

export async function renderComponent(element: React.ReactElement) {
  return await render(element);
}
