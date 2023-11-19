import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from "./Header";

describe('show Logo in Dom', () => {
  it('should render the logo', () => {
    render(<Header />);

    const logo = screen.getByAltText('Logo') as HTMLElement;

    expect(logo).toBeInTheDocument();
  });
});
