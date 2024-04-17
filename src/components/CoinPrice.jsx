import React, {useState, useEffect} from 'react'


const CoinPrice = ({ coin }) => {

    const [coinPrice, setCoinPrice] = useState('');
    // eslint-disable-next-line 
    const [textColor, setTextColor] = useState('text-green-500');

    const fetchPrice = async () => {
        try {
            setTextColor('text-red-500');
            const ids = coin; 
            const vsCurrencies = 'usd';
            const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vsCurrencies}`);
            const data = await response.json(); // Parse response body as JSON
            let newPrice = data[coin]['usd'];

            if (coinPrice !== '' && newPrice > coinPrice) {
              setTextColor('text-green-500');
            } else {
              setTextColor('text-red-500');
            }
            
            setCoinPrice(newPrice);
            
          } catch (error) {
            console.error('Error:', error);
            setCoinPrice("Rate Limited");
          };
    };

    useEffect(() => {
        fetchPrice();
    
        const intervalId = setInterval(() => {
          fetchPrice();
          console.log("should have changed")
        }, 60000);
    
        return () => clearInterval(intervalId);
        // eslint-disable-next-line 
      }, []);


    return (
        <div>
            <div className={textColor}> 
                {coinPrice}
            </div>
        </div>
      )

}

export default CoinPrice