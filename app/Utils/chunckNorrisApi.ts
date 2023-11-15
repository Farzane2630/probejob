import axios from 'axios';
import prisma from './Prisma';

export const fetchAndInsertJoke = async () => {
  try {
    const response = await axios.get('https://api.chucknorris.io/jokes/random?category=dev');
    const jokeData = response.data;
    return jokeData;
  } catch (error) {
    console.error('Error fetching or inserting Chuck Norris joke:', error);
    throw new Error('Internal Server Error');
  } finally {
    await prisma.$disconnect();
  }
};
