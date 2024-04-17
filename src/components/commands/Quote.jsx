import React, { useEffect, useState } from 'react';


//Getting CORS related errors so will come back and implement in the future
function Quote() {
    const [quote, setQuote] = useState('');
    

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch('https://zenquotes.io/api/random');
                const data = await response.json();
                setQuote(data);
                const newQuote = data[0]
                setQuote(newQuote);
            } catch (error) {
                setQuote("wampwamp");
            }
        };
        fetchQuote();
    }, []);


  return (
    <div>
        <div>
            {quote}
        </div>
    </div>
  )
}

export default Quote