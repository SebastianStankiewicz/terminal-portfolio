import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function TopRightContainer() {
  return (
    <div className='max-w-xs max-h-full'>
      <div className='text-cyan-50 flex flex-col items-center'>
        
        <div className='flex'>
          <div className='ml-auto mr-4'><FaGithub /></div>
          <div className='ml-auto'><FaLinkedin /></div>
        </div>
      </div>
    </div>
  );
}

export default TopRightContainer;
