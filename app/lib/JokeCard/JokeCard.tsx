import React from 'react';
import StartTag, { EndTag } from "../../Utils/QouteIcon";

const JokeCard = ({ joke, handleGetAnotherJoke }: { joke: string, handleGetAnotherJoke: React.MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <div className='min-w-96 md:w-50% w-96 flex flex-col items-center py-4 px-4'>
      <div className="p-4 border rounded-2xl border-solid ">
        <div className="flex flex-row justify-start">
          <StartTag />
        </div>
        <p className='p-8 min-w-inherit text-lg font-mono font-semibold'>{joke}</p>

        <div className="flex flex-row justify-end">
          <EndTag />
        </div>
      </div>
      <button
        className="mt-4 p-2 bg-black text-white hover:border font-mono hover:border-solid rounded-md hover:bg-white hover:text-black transition-colors duration-300"
        onClick={handleGetAnotherJoke}
      >
        Get Another Joke
      </button>
    </div>
  );
};

export default JokeCard;
