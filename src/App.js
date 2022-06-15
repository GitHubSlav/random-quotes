import React from 'react';
import './App.css'

class App extends React.Component{  
  render(){
    let currentQuote = 'Remember no one can make you feel inferior without your consent.';
    let currentAuthor = 'Eleanor Roosevelt';
    return (
      <div id = 'quote-box'>
        <div id = 'text'>{currentQuote}</div>
        <div id = 'author'>- {currentAuthor}</div>

        <div>
          <a id = 'tweet-quote' className='button' href = {'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)}>
            t
          </a>
          <div id = 'new-quote' className='button'>Next Quote</div>
        </div>

      </div>
     );
   }
}

export default App;