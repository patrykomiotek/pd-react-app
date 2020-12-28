import * as React from 'react';
import { render } from '@testing-library/react';

import Button from '../Button';

describe('Button component', () => {
  test('should render Button', () => {
    const container = render(<Button className="test">Hi!</Button>);
    const button = container.getByRole('button');

    expect(button).toHaveTextContent('Hi!');
    expect(button).toHaveClass('Button');
    expect(button).toHaveClass('test');
  });
});
