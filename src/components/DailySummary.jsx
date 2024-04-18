import React, { useEffect, useState } from 'react';
import { FaSun, FaCloudRain } from 'react-icons/fa';

function DailySummary() {


    const [temp, setTemp] = useState('');
    const [icon, setIcon] = useState('');
    

    useEffect(() => {
      const fetchWeather = async () => {
          try {
              const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=0.1276&current=temperature_2m,rain&forecast_days=1');
              const data = await response.json();
              const temperature = data.current.temperature_2m;
              const rain = data.current.rain;

              if(rain > 0){
                setIcon(<FaCloudRain className='text-4xl'/>);
              } else{
                setIcon(<FaSun className='text-4xl'/>);
              }
              setTemp(temperature);
          } catch (error) {
              setTemp("Rate Limit");
          }
      };
      fetchWeather();
  }, []);



  return (
    <div>
        <div className='flex items-center border border-gray-500 rounded-md p-4 text-cyan-50'>
            <div className=' mr-4'>
                    {icon}
            </div>
            <div>
                <span>London</span>
                <br></br>
                <span className="text-xl">{temp} °C </span>
            </div>
    </div>
    </div>
  )
}

export default DailySummary