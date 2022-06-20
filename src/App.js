import React from 'react';
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.quotesArr = null;
    this.wrapperRef = React.createRef();

    this.generateQuote = this.generateQuote.bind(this);
  }

  generateQuote(){
    const wrapper = this.wrapperRef.current;
    wrapper.classList.add('fadeIn');
    setTimeout(() => wrapper.classList.remove('fadeIn'), 1000);

    this.props.nextQuote(this.quotesArr.length);
  }

  componentDidMount(){    
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then((response) => response.json())
      .then((response) => {
          this.quotesArr = response.quotes;
          this.props.nextQuote(this.quotesArr.length);
          this.props.loadApp();
        }
      )
      .catch(
        (error) => {
          this.props.catchError();
          console.log(error);
        }
      );
  }

  render(){
    if (this.props.isLoaded){
      let currentQuote = this.quotesArr[this.props.quoteIdx].quote;
      let currentAuthor = this.quotesArr[this.props.quoteIdx].author;
      return (
        <div id = 'quote-box' className='fadeIn'>
          <div ref = {this.wrapperRef}>
            <div id = 'text'>{currentQuote}</div>
            <div id = 'author'>- {currentAuthor}</div>
          </div>
          <div id = 'buttons'>
            <div>
              <a id = 'tweet-quote' className='button' href = {'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)}>
                t
              </a>
              <div id = 'new-quote' className='button' onClick={this.generateQuote}>Next Quote</div>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (
        <div style={{color: "white"}}>
          {this.props.error ? this.props.error : "Loading..."}
        </div>
      )
    }
    }
    
}

export default App;