"use client"
import React, { useEffect, useState } from 'react';
import { fetchAndInsertJoke } from './Utils/chunckNorrisApi/chunckNorrisApi';
import Header from './lib/Header/Header';
import Footer from './lib/Footer/Footer';
import JokeCard from './lib/JokeCard/JokeCard';
import Image from 'next/image';

const Home: React.FC = () => {
  const [joke, setJoke] = useState<string>('');
  const [visitCount, setVisitCount] = useState<number>(0);

  useEffect(() => {
    // Fetch random joke and update state
    fetchAndInsertJoke()
      .then((joke) => setJoke(joke.value))

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
    <div
      className="w-full min-h-screen flex flex-col justify-between items-stretch relative">
      <Header />
      <div className="w-full h-full flex flex-col justify-start items-center md:flex-row md:justify-center md-items-start md:space-x-16">
        <Image
          src="/images/coder.jpg"
          width={500}
          height={500}
          alt="W & S agentur home"
          priority
          placeholder={`data:image/${'W&S'}`} />
        <JokeCard joke={joke} handleGetAnotherJoke={handleGetAnotherJoke} />
      </div>
      <Footer visitCount={visitCount} />
    </div>
  );
};

export default Home;
