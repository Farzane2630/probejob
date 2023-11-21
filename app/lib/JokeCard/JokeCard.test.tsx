import { render, screen, fireEvent } from '@testing-library/react';
import JokeCard from './JokeCard';
import '@testing-library/jest-dom';
import React from 'react';

describe('JokeCard Component', () => {
  test('renders joke correctly', () => {
    const joke = 'Test Joke';
    const handleGetAnotherJokeMock = jest.fn();

    render(<JokeCard joke={joke} handleGetAnotherJoke={handleGetAnotherJokeMock} />);

    const jokeElement = screen.getByTestId("joke");
    expect(jokeElement).toBeInTheDocument();

    const getAnotherJokeButton = screen.getByTestId('btn');
    expect(getAnotherJokeButton).toBeInTheDocument();
  });

  test('handles click event correctly', () => {
    const joke = 'Test Joke';
    const handleGetAnotherJokeMock = jest.fn();

    render(<JokeCard joke={joke} handleGetAnotherJoke={handleGetAnotherJokeMock} />);

    fireEvent.click(screen.getByText('Get Another Joke'));

    expect(handleGetAnotherJokeMock).toHaveBeenCalledTimes(1);
  });
});
