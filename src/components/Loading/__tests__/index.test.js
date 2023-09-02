import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingComponent from '..';

describe('LoadingComponent', () => {
  it('check component not render loading when isLoading is true', () => {
    render(<LoadingComponent isLoading={true} />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toBeInTheDocument();
  });

  it('check component not render loading when isLoading is false', () => {
    render(<LoadingComponent isLoading={false} />);
    const spinnerElement = screen.queryByRole('status');
    expect(spinnerElement).not.toBeInTheDocument();
  });
});