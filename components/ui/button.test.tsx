import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies the correct class for default variant', () => {
    render(<Button>Default</Button>);
    const btn = screen.getByText('Default');
    expect(btn).toHaveClass('inline-flex');
  });
}); 