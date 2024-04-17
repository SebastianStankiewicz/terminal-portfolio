import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import runningImage from '../running.jpeg';

function TopRightContainer() {
  return (
    <div className='max-w-xs max-h-full'>
      <div className='text-cyan-50 flex flex-col items-center'>
        <img
          src={runningImage}
          alt="Photo of me"
          className="mb-4 max-w-full"
        />
        <div className='flex'>
          <div className='ml-auto mr-4'><FaGithub /></div>
          <div className='ml-auto'><FaLinkedin /></div>
        </div>
      </div>
    </div>
  );
}

export default TopRightContainer;
