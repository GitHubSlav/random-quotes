import React from 'react';
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = { 
      error: "",
      isLoaded: false,
      quoteIdx: 0,
      quotesArr: null
    }
  }

  componentDidMount(){    
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then((response) => response.json())
      .then((response) => {
          this.setState(
            {
              quotesArr: response.quotes, 
              isLoaded: true,
              quoteIdx: Math.floor(Math.random() * response.quotes.length)
            }
          );
        }
      )
      .catch(
        (error) => {
          this.setState({error: "Could not load the quotes"}); 
          console.log(error)
        }
      );
  }

  render(){
    if (this.state.isLoaded){
      let currentQuote = this.state.quotesArr[this.state.quoteIdx].quote;
      let currentAuthor = this.state.quotesArr[this.state.quoteIdx].author;
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
    else {
      return (
        <div style={{color: "white"}}>
          {this.state.error ? this.state.error : "Loading..."}
        </div>
      )
    }
    }
    
}

export default App;