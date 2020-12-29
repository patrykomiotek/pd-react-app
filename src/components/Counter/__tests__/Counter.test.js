// import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from '../Counter';

describe('Counter component', () => {
  test('should display initial value', () => {
    // const wrapper = render(<Counter />);
    render(<Counter />);
    // screen.debug();

    // expect(screen.getByText(/current value: 1/i)).toBeInTheDocument();
    expect(screen.getByText('Current value: 1')).toBeInTheDocument();
    expect(screen.queryByText('Current value: 🐼')).not.toBeInTheDocument();

    // userEvent.click(screen.getByRole('button', { name: /\+/i }
    userEvent.click(screen.getByRole('button', { name: /➕/i }));
    // screen.debug()
    expect(screen.getByText('Current value: 2')).toBeInTheDocument();

  });
});
