import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../Home';

describe('Home component', () => {
  test('should fill and validate form', async () => {
    render(<Home />);

    await act(async () => {
      const firstName = screen.getByTestId('first_name');
      userEvent.type(firstName, 'Mruczysław 🐈');
    });

    await act(async () => {
      userEvent.click(screen.getByRole('button', { name: /submit/i }));
    });

    // screen.debug();
    const lastName = screen.getByTestId('last_name');
    expect(lastName).toHaveClass('error');

  });
});
