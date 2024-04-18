import React from 'react'
import CoinPrice from './CoinPrice'
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import DailySummary from './DailySummary';

function RightSide() {
  return (
    <div >
        
        <div className='flex items-center border border-gray-500 rounded-md p-4'>
                <div className='text-cyan-50 mr-4'>
                    <FaBitcoin className='text-4xl' />
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-2 text-cyan-50'>Bitcoin Price</h2>
                    <CoinPrice coin="bitcoin" />
            </div>
            
        </div>

            <div className='flex items-center border border-gray-500 rounded-md p-4'>
                <div className='text-cyan-50 mr-4'>
                    <FaEthereum className='text-4xl' />
                </div>
                <div>
                    <h2 className='text-xl font-semibold mb-2 text-cyan-50'>Ethereum Price</h2>
                    <CoinPrice coin="ethereum" />
            </div>
        </div>
        <DailySummary/>
    </div>
  )
}

export default RightSide