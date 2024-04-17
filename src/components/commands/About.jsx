import React from 'react'

function About({clickCommand}) {
  return (
    <div className="text-gray-300">
        <div key="about">
            <span >Hello! 👋 Im currently a first year student studying at Royal Holloway univeristy of london.</span>
            <br />
            <br />
            <span>
                <ul>
                    <li>Im a keen runner 🏃🏻‍♂️</li>
                    <li>With a new found love of hackathons 👨🏻‍💻</li>
                </ul>
            </span>
            <br />
            <span>Im always learning new skills and love tackling a challenge.</span>
            <br />
            <span>If you have any questions or want to chat </span>
            <span className="text-cyan-200 hover:bg-blue-500 " onClick={() => clickCommand("contact")}>contact</span>
            <span> me!</span>
        </div>   
    </div>
  )
}

export default About