import React from 'react';
import { screen } from '@testing-library/react-native';

import { Skeleton } from '../../../src/components/Skeleton';
import { renderComponent } from '../../../test-utils/renderComponent';

describe('Skeleton', () => {
  it('renders a progress placeholder with custom dimensions', async () => {
    await renderComponent(<Skeleton width={120} height={24} borderRadius={12} />);
    const skeleton = screen.getByRole('progressbar');

    expect(skeleton.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ backgroundColor: expect.any(String) }),
        expect.objectContaining({ borderRadius: 12, height: 24, width: 120 }),
      ]),
    );
  });

  it('uses default dimensions when none are provided', async () => {
    await renderComponent(<Skeleton />);
    const skeleton = screen.getByRole('progressbar');

    expect(skeleton.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ borderRadius: 8, height: 16, width: '100%' }),
      ]),
    );
  });
});
