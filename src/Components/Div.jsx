import React, { useEffect, useState } from 'react';
import colors from '../randomColors';
import quotes from '../quotes';

function Div() {
  const [color, setColor] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [key, setKey] = useState(0);

  const getQuoteandColor = () => {
    const randomColor = Math.floor(Math.random() * colors.length);
    const randomBackgroundColor = colors[randomColor];
    setColor(randomBackgroundColor);
    console.log(randomBackgroundColor);
    document.getElementById("body").style.backgroundColor = randomBackgroundColor;
    document.getElementById("quote-box").style.color = randomBackgroundColor;
    document.getElementById("new-quote").style.backgroundColor = randomBackgroundColor;
    document.getElementById("new-quote").style.color = "white";
    const quoteValue = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[quoteValue].quote;
    setQuote(randomQuote);
    console.log(randomQuote);
    const randomAuthor = quotes[quoteValue].author;
    setAuthor(randomAuthor);
    console.log(randomAuthor);
    setKey(prevKey => prevKey + 1); 
  };

  useEffect(() => {
    getQuoteandColor();
  }, []);

  return (
    <main id="body">
      <div id='quote-box'>
        <header key={key} style={{ animation: "light 2s both" }} id='text'>{quote}</header>
        <p key={key + 1} style={{ animation: "light 2s both" }} id='author'>- {author}</p>
        <button id='new-quote' onClick={getQuoteandColor}>Change</button>
      </div>
    </main>
  );
}

export default Div;
