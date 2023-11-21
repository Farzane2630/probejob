import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';
import React from 'react';

describe('Footer Component', () => {
  test('renders visit count correctly', () => {
    const visitCount = 42;

    render(<Footer visitCount={visitCount} />);

    const visitCountElement = screen.getByText(`We've got ${visitCount} visitors until now!`);
    expect(visitCountElement).toBeInTheDocument();
  });

  test('renders attribution message correctly', () => {
    const visitCount = 42;

    render(<Footer visitCount={visitCount} />);

    const attributionElement = screen.getByTestId("footer");
    expect(attributionElement).toBeInTheDocument();
  });
});
