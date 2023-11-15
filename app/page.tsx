"use client"
import React, { useEffect, useState } from 'react';
import { fetchAndInsertJoke } from './Utils/chunckNorrisApi';

interface JokeCardProps {
  joke: string;
}

interface FooterProps {
  visitCount: number;
}

const JokeCard: React.FC<JokeCardProps> = ({ joke }) => {
  return (
    <div className="p-4 border rounded-md">
      <p>{joke}</p>
    </div>
  );
};

const Footer: React.FC<FooterProps> = ({ visitCount }) => {
  return <footer className="text-center p-4">Visitors: {visitCount}</footer>;
};

const Home: React.FC = () => {
  const [joke, setJoke] = useState<string>('');
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    // Fetch Chuck Norris joke and update state
    fetchAndInsertJoke()
      .then((joke) =>setJoke( joke.value))
      
  }, []);

  const handleGetAnotherJoke = async () => {
    try {
      const insertedJoke = await fetchAndInsertJoke();
      setJoke(insertedJoke.value);
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold mb-4">Chuck Norris Jokes</h1>
      <JokeCard joke={joke} />
      <button onClick={handleGetAnotherJoke} className="mt-4 p-2 bg-blue-500 text-white rounded-md">
        Get Another Joke
      </button>
      <Footer visitCount={visitCount} />
    </div>
  );
};

export default Home;
