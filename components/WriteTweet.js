import React from 'react';

const TweetSend = () => {
  return (
    <div className="bg-zinc-900 mb-7 p-4 rounded-lg shadow-md flex flex-col">
      <div className="flex items-center mb-4">
        <img
          src="user-avatar.png"
          alt="Tweet Button"
          className="w-8 h-8 rounded-full"
        />
        <input
          type="text"
          placeholder="What's happening?"
          className="bg-zinc-800 rounded-full py-2 px-4 ml-2 w-full"
        />
      </div>
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
      Tweet
    </button>
    </div>
  );
};

export default TweetSend;
