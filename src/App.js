import React from 'react';
// import logo from './logo.svg';
import './assets/css/App.css';
import WordAnim from 'react-random-word';

var randomWord = require('random-words');
var rando = randomWord({ exactly: 18, min: 1, max: 9, join: ' ' });
while(rando.length != 117)
{
  rando = randomWord({ exactly: 18, min: 1, max: 9, join: ' ' });
}

function Main() {
  return (
    <div className="container">
      <header className="header">
        <div className="whole-bag-of-jellybean">
          <div className="options">
            Options
          </div>
          <div className="typing-container">
            <div className="to-type">
              <WordAnim
                word={ rando }
                speed={75}
                rounds={5}
                letters="0123456789~!@#$%^&*()_+ &nbsp;"
              />
            </div>
            <div id="typing-box">
              <input type="text" />&nbsp;
              <button id="redo">↻</button>
            </div>
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default Main;
