import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from "./Header";
import React from 'react';

describe('show Logo in Dom', () => {
  it('should render the logo', () => {
    render(<Header />);

    const logo = screen.getByAltText('W & S agentur home') as HTMLElement;

    expect(logo).toBeInTheDocument();
  });
});
