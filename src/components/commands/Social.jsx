import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Social({clickCommand}) {
  return (
    <>
      <div key="github" className='flex'>
        <span className="text-cyan-200 flex" >Github ‎  <FaGithub/> </span> ‎ - <span className="text-gray-300 hover:bg-blue-700 " onClick={() => clickCommand("github")}> ‎ https://github.com/SebastianStankiewicz</span>
      </div>
      <div key="linkedin" className='flex'>
        <span className="text-cyan-200 flex" >LinkedIn ‎ <FaLinkedin/> </span>‎ - <span className="text-gray-300 hover:bg-blue-700" onClick={() => clickCommand("linkedin")}>‎ www.linkedin.com/in/-sebastian-stankiewicz</span>
      </div>
      <div key="email">
        <span className="text-cyan-200" >Email ‎</span> - <a href="mailto:sebstankiewicz23@gmail.com" className="text-gray-300 hover:bg-blue-700 " onClick={() => clickCommand("contact")}>sebstankiewicz23@gmail.com</a>
      </div>
    </>
  )
}

export default Social