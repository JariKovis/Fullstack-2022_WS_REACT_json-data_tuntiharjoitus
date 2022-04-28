import React, { useState, useEffect } from 'react';

const GetData = () => {
    const [quotes, setQuotes] = useState(null)
    useEffect(() => {
        fetch("https://api.jsonbin.io/b/5e9ef7272940c704e1dc1099")
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                console.log(data.quotes)
                setQuotes(data.quotes)
            });
    }, [])

    return (
        <> // Tässä käytetään ns. fragmentteja, eli palautetaan tulosjoukko ilman ympäröivää DIV-elementtiä
            {
                quotes ?
                    <QuoteArray quotes={quotes} />
                    : <div>Nothing here.Fething data...</div>
            }
        </> // fragmenttien lopetustägi
    );
}

export default App;
