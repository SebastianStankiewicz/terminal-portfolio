import React from 'react'
import { IoLogoJavascript, IoLogoPython } from "react-icons/io5";
import { SiFlask } from "react-icons/si";
import { TbCurrencySolana } from "react-icons/tb";

function Projects() {
  return (
    <div>
        <div className="text-gray-300" key="projects">
            <div>
                <div className='text-cyan-200'>
                    <span className='font-bold'>Image Aggregator </span>
                    <span className='italic'> — a tool for retrieving verified images of items for sale on Chinese shopping websites.</span>
                </div>
                <span>Published early February 2023 and by April 2023 gained 60K users with over 600K user requested images aggregated.</span>
                <div className='flex text-2xl'><IoLogoPython/> <SiFlask /></div>
            </div>

            <div>
                <div className='text-cyan-200'>
                    <span className='font-bold'>A Blockchain Provably Fair Gaming Platform </span>
                </div>
                <span>A web-based gambling platform that uses the Solana Blockchain for transactions between the customer and the House and verifies gaming outcomes using provable fairness. Programmed between 2022 and 2023 for A Level Computer Science.</span>
                <div className='flex text-2xl'><IoLogoJavascript /> <IoLogoPython/> <SiFlask /> <TbCurrencySolana /></div>
            </div>

            <div>
                <div className='text-cyan-200'>
                    <span className='font-bold'>Furby Hacking </span>
                    <span className='italic'> — an exploration of the intersection between creative dance and computer science.</span>
                </div>
                <span> I examined the vulnerabilities of the Internet of Things and paid homage to the creative dance of avantgarde artist Moon Ribas, by making a Furby dance in real time to earthquakes around the world.  Programmed between 2022 and 2023 for A Level EPQ.</span>
                <div className='flex text-2xl'><IoLogoPython/></div>
            </div>

            <div>
                <div className='text-cyan-200'>
                    <span className='font-bold'>DJ Requests Paid Using Solana Blockchain </span>
                    <span className='italic'> nightclub patrons pay for song requests via the Solana blockchain.</span>
                </div>
                <span>  Made in collaboration with a teammate for my first 24-hour hackathon in 2024.</span>
                <div className='flex text-2xl'><IoLogoPython/> <SiFlask /> <TbCurrencySolana/> </div>
            </div>


        </div>
    </div>
  )
}

export default Projects