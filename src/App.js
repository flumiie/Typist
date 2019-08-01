import React from 'react'
import $ from 'jquery'
// import logo from './logo.svg';
// import './assets/js/scripts'
import './assets/css/App.css'
// import WordAnim from 'react-random-word';

var randomWord = require('random-words')

export default class Main extends React.Component
{
  constructor(props)
  {
    super(props)
    this.wordRenderer = this.wordRenderer.bind(this)

    this.cnt = 1
    this.type = ''
    this.gens = ''
    this.totalWordsPerMinute = 400
    this.gens = randomWord({ exactly: this.totalWordsPerMinute, min: 1, max: 9, join: ' ' })
    this.state = {
      generator: this.gens
    }
  }

  componentDidMount()
  {
    $('#typing-box input').keypress(function()
    {
      setTimeout(function()
      {
        this.type = $('#typing-box input').val()
      }, 70)
    })
  }
  
  wordRenderer = () =>
  {
    this.gens = randomWord({ exactly: this.totalWordsPerMinute, min: 1, max: 9, join: ' ' })
    this.setState({ generator: this.gens })
  }

  timer15sec = () =>
  {
    localStorage.setItem('timer', 15)
  }

  timer30sec = () =>
  {
    localStorage.setItem('timer', 30)
  }

  timer60sec = () =>
  {
    localStorage.setItem('timer', 60)
  }

  timer2min = () =>
  {
    localStorage.setItem('timer', 120)
  }

  timerCustom = () =>
  {
    console.log('set custom time')
  }

  render() {
    $(document).ready(function()
    {
      $('#typing-box input').keypress(function(event)
      {
        setTimeout(function()
        {
          this.type = $('#typing-box input').val()
          if(event.which === 32 || event.keyCode === 32)
            if(this.type !== '')
              this.cnt++
        }, 70)

        if($('.to-type p').length < 14)
        {
          if(event.which === 32 || event.keyCode === 32)
            this.gens = randomWord({ exactly: this.totalWordsPerMinute, min: 1, max: 9, join: ' ' })
        }
      })
    })

    return (
      <div className="container">
        <header className="header">
          <div className="whole-bag-of-jellybean">
            <div className="top-container">
              <div className="options">
                Typist
              </div>
              <div className="timer-container">
                <div className="timer-options">
                  <button onClick={ this.timer15sec }>15</button>&nbsp;
                  <button onClick={ this.timer30sec }>30</button>&nbsp;
                  <button onClick={ this.timer60sec }>60</button>&nbsp;
                  <button onClick={ this.timer2min }>120</button>&nbsp;
                  <button onClick={ this.timerCustom }>Custom</button>
                </div>
                &nbsp;
                <div className="timer"></div>
              </div>
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
            </div>
            <div id="typing-box">
              <input type="text"/>
              {/* <input type="text" disabled placeholder="Still under maintenance, stay updated!" style={{textAlign:'center',textTransform:'uppercase'}}/> */}
              <button id="redo" onClick={ this.wordRenderer }>↻</button>
            </div>
          </div>
          {/* <div className="hidden-elements"></div> */}
        </header>
        <div className="footer">
          Made by <a href="http://github.com/fralyx" target="_blank" rel="noopener noreferrer">fralyx</a> with ❤ in <a href="http://reactjs.org" target="_blank" rel="noopener noreferrer">React.JS</a>
        </div>
      </div>
    );
  }
}
