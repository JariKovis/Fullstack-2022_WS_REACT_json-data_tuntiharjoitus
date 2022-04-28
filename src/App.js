import React, { useState, useEffect } from "react";
import './index.css'


const App = () => {

  const [quotes, setQuotes] = useState([]);
  const [variable, setVariable] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/b/5e9ef7272940c704e1dc1099")
      .then((result) => {
        console.log(result)
        return result.json();
      })
      .then((data) => {
        console.log(data.quotes)
        setQuotes(data.quotes)
      });

  }, []);



  const QuotePrint = (props) => {
    return (
      <>
        <h3>{props.quote}</h3>
        <p>{props.author}</p>
      </>
    )
  }

  const HandleChange = (props) => {
    console.log("Napataan muutokset Formista: " + props.target.value);
    setVariable(props.target.value);

  }

  useEffect(() => {
    let quotesCopy = [...quotes]
    quotesCopy = quotesCopy.filter(data => data.quote.includes(variable))
    setQuotes(quotesCopy)

  }, [variable]);


  const getData = () => {
    fetch("https://api.jsonbin.io/b/5e9ef7272940c704e1dc1099")
      .then((result) => {
        console.log(result)
        return result.json();
      })
      .then((data) => {

        setQuotes(data.quotes)
      });
  }
  return (
    <>
      <div>
        <h1>Quote List</h1>
        <form>

          <input value={variable} type="text" onChange={HandleChange} /><br></br>

        </form>

        {
          quotes ?
            quotes.map((data, index) => <QuotePrint author={data.author} quote={data.quote} />)
            : <div>Nothing here.Fething data...</div>
        }
        <button onClick={getData}>Hae</button>
      </div>
    </>
  )
}

export default App;
