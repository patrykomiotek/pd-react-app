import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../Home';

describe('Home component', () => {
  test('should fill and validate form', async () => {
    render(<Home />);

    const firstName = screen.getByTestId('first_name');
    userEvent.type(firstName, 'Mruczysław 🐈');

    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    const lastName = screen.getByTestId('last_name');
    expect(lastName).toHaveClass('error');
  });
});
