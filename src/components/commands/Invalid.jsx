import React from 'react'

function Invalid() {
  return (
    <div>
        <span className="text-red-500">Invalid command!</span> 
        <span> Try using the </span> 
        <span className="text-cyan-200 hover:bg-blue-500" > help </span>
        <span>command</span>
    </div>
  )
}

export default Invalid