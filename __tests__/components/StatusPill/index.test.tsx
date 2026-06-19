import React from 'react';

import { StatusPill } from '../../../src/components/StatusPill';
import { TASK_STATUS_OPTIONS } from '../../../src/utils/status';
import { renderComponent } from '../../../test-utils/renderComponent';

describe('StatusPill', () => {
  it('renders the label for each task status', async () => {
    for (const option of TASK_STATUS_OPTIONS) {
      const renderer = await renderComponent(<StatusPill status={option.value} />);

      expect(renderer.getByText(option.label)).toBeTruthy();
      await renderer.unmount();
    }
  });
});
