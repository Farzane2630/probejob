import { render, screen, fireEvent, act } from '@testing-library/react';
import Page from './page';
import * as chunckNorrisApi from './Utils/chunckNorrisApi/chunckNorrisApi';
import React from 'react';
import '@testing-library/jest-dom';


jest.mock('./Utils/chunckNorrisApi/chunckNorrisApi');

describe('Page Component', () => {
   beforeEach(() => {
      jest.clearAllMocks();
   });

   test('renders page component with initial joke', async () => {
      const mockJoke = 'Mocked Chuck Norris joke';
      (chunckNorrisApi.fetchAndInsertJoke as jest.Mock).mockResolvedValueOnce({ value: mockJoke });

      render(<Page />);

      await screen.findByText(mockJoke);

      expect(screen.getByText(mockJoke)).toBeInTheDocument();
   });

   test('handles error during fetch', async () => {
      const errorMessage = 'Mocked fetch error';
      
      const mockedFetchAndInsertJoke = chunckNorrisApi.fetchAndInsertJoke as jest.Mock;
      mockedFetchAndInsertJoke.mockRejectedValueOnce(new Error(errorMessage));
   })  

   test('handles "Get Another Joke" button click', async () => {
      const initialJoke = 'Initial joke';
      const newJoke = 'New joke';
      (chunckNorrisApi.fetchAndInsertJoke as jest.Mock)
         .mockResolvedValueOnce({ value: initialJoke })
         .mockResolvedValueOnce({ value: newJoke });

      render(<Page />);

      await screen.findByText(initialJoke);

      fireEvent.click(screen.getByText('Get Another Joke'));

      await screen.findByText(newJoke);

      expect(screen.getByText(newJoke)).toBeInTheDocument();
   });

   test('handles error during "Get Another Joke" button click', async () => {
      const errorMessage = 'Mocked fetch error';
      (chunckNorrisApi.fetchAndInsertJoke as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

      render(<Page />);

      await screen.getByTestId('joke');

      fireEvent.click(screen.getByText('Get Another Joke'));

      expect(console.error).toHaveBeenCalledWith('Error fetching Chuck Norris joke:', expect.any(Error));
   });
});
