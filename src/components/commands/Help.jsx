import React from 'react';

const Help = ({clickCommand}) => {
  return (
    <div>

      <div key="about">
        <span className="text-cyan-200 hover:bg-blue-500 " onClick={() => clickCommand("about")}>about</span> - <span className="text-gray-300">👋 A bit about me</span>
      </div>
      <div key="projects">
        <span className="text-cyan-200 hover:bg-blue-500" onClick={() => clickCommand("projects")}>projects</span> - <span className="text-gray-300">🧪 What I've been working on</span>
      </div>
      <div key="cv">
        <span className="text-cyan-200 hover:bg-blue-500" onClick={() => clickCommand("cv")}>cv</span> - <span className="text-gray-300">📄 Download my CV</span>
      </div>
      <div key="contact">
        <span className="text-cyan-200 hover:bg-blue-500" onClick={() => clickCommand("contact")}>contact</span> - <span className="text-gray-300">📧 Send me an email</span>
      </div>
      <div key="social">
        <span className="text-cyan-200 hover:bg-blue-500" onClick={() => clickCommand("social")}>social</span> - <span className="text-gray-300">🗣️ Social media</span>
      </div>
      <div key="clear">
        <span className="text-cyan-200 hover:bg-blue-500" onClick={() => clickCommand("clear")}>clear</span> - <span className="text-gray-300">🧼 Clear the screen</span>
      </div>
      <div>
        <br></br>
        <span>Tab to auto complete - Try clicking a command</span>
      </div>
      

    </div>
  );
};

export default Help;