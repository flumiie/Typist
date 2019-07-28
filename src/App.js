import React from 'react'
import $ from 'jquery';
// import logo from './logo.svg';
import './assets/css/App.css'
// import WordAnim from 'react-random-word';

var randomWord = require('random-words')
var gens = ''

export default class Main extends React.Component {
  constructor(props)
  {
    super(props)
    this.wordRenderer = this.wordRenderer.bind(this)

    gens = randomWord({ exactly: 21, min: 1, max: 9, join: ' ' })
    while(gens.length !== 117)
      gens = randomWord({ exactly: 21, min: 1, max: 9, join: ' ' })
      
    this.state = {
      generator: gens
    }
  }

  wordRenderer = () =>
  {
    gens = randomWord({ exactly: 21, min: 1, max: 9, join: ' ' })
    while(gens.length !== 117)
      gens = randomWord({ exactly: 21, min: 1, max: 9, join: ' ' })
    
    this.setState({ generator: gens })
  }
  
  render() {
    return (
      <div className="container">
        <header className="header">
          <div className="whole-bag-of-jellybean">
            <div className="options">
              Options
            </div>
            <div className="typing-container">
              <div className="to-type">
                {/* <WordAnim
                  word={ rando }
                  speed={75}
                  rounds={5}
                  letters="0123456789~!@#$%^&*()_+ &nbsp;"
                /> */}
                <span>{ this.state.generator }</span>
              </div>
              <div id="typing-box">
                <input type="text" />&nbsp;
                <button id="redo" onClick={ this.wordRenderer }>↻</button>
              </div>
              
            </div>
          </div>
        </header>
        {
          // window.addEventListener('DOMContentLoaded', function()
          // {
          //   var counter = 1;
          //   if($('.to-type span p#' + counter).offset().top)
          //   if($('.to-type span p#' + counter).offset().top != $('.to-type span p#1').offset().top)
          //     console.log('changed')
          // })
        }
      </div>
    );
  }
}
