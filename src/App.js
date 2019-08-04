import React, { Component } from 'react'
import $ from 'jquery'

// import WordAnim from 'react-random-word';
// import logo from './logo.svg';
// import './assets/js/scripts'
import modal from './assets/js/modal'

import './assets/css/App.css'

var randomWord = require('./assets/js/wordGenerator')

export default class Main extends Component
{
  constructor(props)
  {
    super(props)
    
    this.cnt = 1
    this.type = ''
    this.diff = 0
    this.gens = ''
    this.totalWordsPerMinute = 500
    this.elm = ''

    if(localStorage.getItem('Difficulty') == null)
    {
      this.diff = [1, 3]
      localStorage.setItem('Difficulty', this.diff)
    }
    else
      this.diff = localStorage.getItem('Difficulty').split(',')
    
    this.gens = randomWord({ exactly: this.totalWordsPerMinute, min: this.diff[0], maxLength: this.diff[1], join: ' ' })
    // localStorage.setItem('Generated Words', this.gens)

    this.state = {
      generator: this.gens
    }

    this.wordRenderer = this.wordRenderer.bind(this)
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
    this.diff = localStorage.getItem('Difficulty').split(',')
    this.gens = randomWord({ exactly: this.totalWordsPerMinute, min: this.diff[0], maxLength: this.diff[1], join: ' ' })
    this.setState({ generator: this.gens })
  }

  diffEasy = () =>
  {
    modal.resetDiffButtons()
    this.diffElm = document.getElementById('diff-easy')
    this.diffElm.style.background = 'orange'
    this.diffElm.style.color = 'white'

    this.diff = [1, 3]
    localStorage.setItem('Difficulty', this.diff)
    if(this.diff[1] === 3)
    {
        this.gens = randomWord({ exactly: this.totalWordsPerMinute, min: this.diff[0], maxLength: this.diff[1], join: ' ' })
        // localStorage.setItem('Generated Words', this.gens)
        this.setState({ generator: this.gens })
    }

    modal.showMessage()
    return this.gens
  }

  diffMedium = () =>
  {
    modal.resetDiffButtons()
    this.diffElm = document.getElementById('diff-medium')
    this.diffElm.style.background = 'orange'
    this.diffElm.style.color = 'white'

    this.diff = [4, 6]
    localStorage.setItem('Difficulty', this.diff)
    if(this.diff[1] === 6)
    {
        this.gens = randomWord({ exactly: this.totalWordsPerMinute, min: this.diff[0], maxLength: this.diff[1], join: ' ' })
        // localStorage.setItem('Generated Words', this.gens)
        this.setState({ generator: this.gens })
    }

    modal.showMessage()
  }

  diffHard = () =>
  {
    modal.resetDiffButtons()
    this.diffElm = document.getElementById('diff-hard')
    this.diffElm.style.background = 'orange'
    this.diffElm.style.color = 'white'

    this.diff = [7, 9]
    localStorage.setItem('Difficulty', this.diff)
    if(this.diff[1] === 9)
    {
        this.gens = randomWord({ exactly: this.totalWordsPerMinute, min: this.diff[0], maxLength: this.diff[1], join: ' ' })
        // localStorage.setItem('Generated Words', this.gens)
        this.setState({ generator: this.gens })
    }

    modal.showMessage()
  }

  diffExpert = () =>
  {
    modal.resetDiffButtons()
    this.diffElm = document.getElementById('diff-expert')
    this.diffElm.style.background = 'orange'
    this.diffElm.style.color = 'white'

    this.diff = [10, 12]
    localStorage.setItem('Difficulty', this.diff)
    if(this.diff[1] === 12)
    {
        this.gens = randomWord({ exactly: this.totalWordsPerMinute, min: this.diff[0], maxLength: this.diff[1], join: ' ' })
        // localStorage.setItem('Generated Words', this.gens)
        this.setState({ generator: this.gens })
    }

    modal.showMessage()
  }

  diffRandom = () =>
  {
    modal.resetDiffButtons()
    this.diffElm = document.getElementById('diff-random')
    this.diffElm.style.background = 'orange'
    this.diffElm.style.color = 'white'

    let min = Math.round(Math.random() * 10)
    let rand = Math.round(Math.random() * 100)
    localStorage.setItem('Difficulty', rand)
    this.gens = randomWord({ min: min, max: this.totalWordsPerMinute, maxLength: rand, join: ' ' })
    // localStorage.setItem('Generated Words', this.gens)
    this.setState({ generator: this.gens })

    setTimeout(function()
    {
      $('#typing-box button').click()
    }, 75)

    modal.showMessage()
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
            this.gens = randomWord({ exactly: this.totalWordsPerMinute, min: this.diff[0], maxLength: this.diff[1], join: ' ' })
        }
      })
    })

    return (
      <div className="container">

        <div className="options-modal">
          <div className="options-innerds">
            <div className="options-title">
              <h2>Settings</h2>
              <span className="close" onClick={ modal.closeModal }>&times;</span>
            </div>
            <div className="options-content">
              <div className="timer-options">
                <h3>Timer:</h3>
                <button id="timer-15" onClick={ modal.timer15sec }>15</button>&nbsp;
                <button id="timer-30" onClick={ modal.timer30sec }>30</button>&nbsp;
                <button id="timer-60" onClick={ modal.timer60sec }>60</button>&nbsp;
                <button id="timer-120" onClick={ modal.timer2min }>120</button>&nbsp;
                <button id="timer-240" onClick={ modal.timer4min }>240</button>&nbsp;
              </div>
              <div className="difficulty-options">
                <h3>Difficulty:</h3>
                <button id="diff-easy" onClick={ this.diffEasy }>Easy</button>&nbsp;
                <button id="diff-medium" onClick={ this.diffMedium }>Medium</button>&nbsp;
                <button id="diff-hard" onClick={ this.diffHard }>Hard</button>&nbsp;
                <button id="diff-expert" onClick={ this.diffExpert }>Expert</button>&nbsp;
                <br/>
                <button id="diff-random" onClick={ this.diffRandom }>Randomize</button>
                {/* <button id="timer-custom" onClick={ this.timerCustom }>Custom</button> */}
              </div>
            </div>
            <div className="message">The timer has been reset</div>
          </div>
        </div>

        <header className="header">
          <div className="whole-bag-of-jellybean">
            <div className="top-container">
              <div className="title">
                Typist
              </div>
              <div className="timer-container">
                <div className="timer">
                  <p id="1"></p>
                  <p id="2"></p>
                  <p id="3"></p>
                </div>
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
            <div className="bottom-row-container">
              <div className="options" onClick={ modal.openModal }>
                <img src="assets/img/settings.svg" width="25px" alt=""/>
              </div>
              <div className="wpm-container">Errors: <span id="errors">0</span> | WPM: <span id="net-wpm">0</span></div>
            </div>
          </div>
          {/* <div className="hidden-elements"></div> */}
        </header>
        <div className="footer">
          <a id="page-stats" href="https://clustrmaps.com/site/1au3h" title="Visit tracker"><img src="//www.clustrmaps.com/map_v2.png?d=FEZshgi7p2WTv9NT8wV70ywi6B6Czxapj0Blqypr1AY&cl=ffffff" alt=""/></a>
          <br/>
          Made by <a href="http://github.com/fralyx" target="_blank" rel="noopener noreferrer">fralyx</a> with ❤ in <a href="http://reactjs.org" target="_blank" rel="noopener noreferrer">React.JS</a>
        </div>
      </div>
    );
  }
}
