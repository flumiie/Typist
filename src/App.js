import React from 'react'
import $ from 'jquery'
// import logo from './logo.svg';
import './assets/css/App.css'
// import WordAnim from 'react-random-word';

var randomWord = require('random-words')

export default class Main extends React.Component {
  constructor(props)
  {
    super(props)
    this.wordRenderer = this.wordRenderer.bind(this)
    this.counter = 1
    this.type = ''
    this.gens = ''

    this.gens = randomWord({ exactly: 21, min: 1, max: 9, join: ' ' })
    while(this.gens.length !== 117)
      this.gens = randomWord({ exactly: 21, min: 1, max: 9, join: ' ' })
      
    this.state = {
      generator: this.gens
    }
  }

  wordRenderer = () =>
  {
    this.gens = randomWord({ exactly: 21, min: 1, max: 9, join: ' ' })
    while(this.gens.length !== 117)
      this.gens = randomWord({ exactly: 21, min: 1, max: 9, join: ' ' })
    
    this.setState({ generator: this.gens })
  }

  componentDidMount()
  {
    $('#typing-box input').keypress(function(event)
    {
      setTimeout(function()
      {
        this.type = $('#typing-box input').val()
      }, 70)

      if(event.which === 32 || event.keyCode === 32)
      {
        // if($('.to-type p').length < 15)
        //   this.gens = randomWord({ exactly: 21, min: 1, max: 9, join: ' ' })
      }
    })

    // this.setState({ generator: this.gens })
  }
  
  render() {
    $(document).ready(function()
    {
      var counter = 1, type = ''
      $('#typing-box input').keypress(function(event)
      {
        setTimeout(function()
        {
          type = $('#typing-box input').val()
          if(event.which === 32 || event.keyCode === 32)
            if(type !== '')
              counter++
        }, 70)

        if($('.to-type p').length < 14)
        {
          if(event.which === 32 || event.keyCode === 32)
          {
            this.gens = randomWord({ exactly: 21, min: 1, max: 9, join: ' ' })
            // this.setState({ generator: this.gens })
          }
        }
      })
    })

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
      </div>
    );
  }
}
