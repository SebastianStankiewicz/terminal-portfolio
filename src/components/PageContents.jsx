import React from 'react'
import NameLogo from './NameLogo';
import RightSide from './RightSide';
import Terminal from './Terminal';

function PageContents() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-gray-900 bg-fixed" >
        <div className="flex flex-col lg:flex-row justify-between h-full">
          <NameLogo />
          <div className="hidden lg:flex lg:flex-col lg:items-end mt-10 lg:mt-15 lg:mr-10">
            <RightSide />
          </div>
        </div>
        <Terminal />
      </div>
    </div>
  )
}

export default PageContents