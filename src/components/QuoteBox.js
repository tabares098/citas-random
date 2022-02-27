import React, { useState } from "react";
import quotes from "../quotes.json";







const getRandom = () => Math.floor(Math.random() * quotes.length);

const colors = [
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#FFC75F",
  "#F9F871"
  
];

const Quote = () => {
  const [quote, setQuote] = useState(quotes[getRandom()]);
  // const user = users[0];

  const changeQuote = () => {
    const random = getRandom();
    setQuote(quotes[random]);
  };

  const color = colors[Math.floor(Math.random() * 6)];

  document.body.style = `background: ${color}`;

  console.log(quote);

  return (
    <div className="card" style={{ color: color }}>
      
       
      <h3><i class="fa-brands fa-readme"></i></h3> 
      <ul>
        <li>
        
          {quote.quote}
        </li>
        <li>
          { quote.author}
        </li>
        <li>
          
        </li>
      </ul>
        
     
      <button onClick={changeQuote} style={{background: color }}>
      <i className="fa-solid fa-angle-right"  ></i>
      </button>
      
      
    </div>
  );
  
  
};

export default Quote;
