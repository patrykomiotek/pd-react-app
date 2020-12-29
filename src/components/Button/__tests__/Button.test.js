import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '../Button';


describe('Button component', () => {
  test('should render Button', () => {
    const container = render(
      <Button className="test">Hi!</Button>
    );

    const button = container.getByRole('button');

    expect(button).toHaveTextContent('Hi!');
    expect(button).toHaveClass('Button');
    expect(button).toHaveClass('test');
  });

  test('should render Button with badge', () => {
    render(<Button badge={12}>Hi!</Button>);

    expect(screen.getByTestId('button-badge')).toBeInTheDocument();

    const badgeComponent = screen.getByTestId('button-badge');
    expect(badgeComponent).toHaveTextContent('12');

  });
});
