import { Component } from 'react'
import $ from 'jquery'
import '../css/modal.css'

var randomWord = require('random-words')

class Modal extends Component
{
    constructor(props)
    {
        super(props)
        this.totalWordsPerMinute = 500
        this.diff = ''
        this.gens = ''
        this.timerElm = ''
        this.diffElm = ''
    }

    componentDidMount()
    {
        if(localStorage.getItem('Generated Words') === null)
            this.diffEasy()
    }

    openModal = () =>
    {
        $('.options-modal').css({
            'z-index': 2,
            'animation': 'showModal 0.25s normal forwards ease'
        })
    }

    closeModal = () =>
    {
        $('.options-modal').css('animation', 'hideModal 0.25s normal forwards ease')
        setTimeout(() =>
        {
            $('.options-modal').css('z-index', -1)
        }, 250)
    }

    resetTimerButtons = () =>
    {
        var tb = document.querySelectorAll('.timer-options button')
        for(var i = 0; i < tb.length; i++)
        {
            tb[i].style.background = 'rgb(156, 144, 120)'
            tb[i].style.color = 'black'
        }
    }

    resetDiffButtons = () =>
    {
        var tb = document.querySelectorAll('.difficulty-options button')
        for(var i = 0; i < tb.length; i++)
        {
            tb[i].style.background = 'rgb(156, 144, 120)'
            tb[i].style.color = 'black'
        }
    }

    timer15sec = () =>
    {
        this.resetTimerButtons()
        localStorage.setItem('timer', 15)
        this.timerElm = document.getElementById('timer-15')
        this.timerElm.style.background = 'orange'
        this.timerElm.style.color = 'white'
    }

    timer30sec = () =>
    {
        this.resetTimerButtons()
        localStorage.setItem('timer', 30)
        this.timerElm = document.getElementById('timer-30')
        this.timerElm.style.background = 'orange'
        this.timerElm.style.color = 'white'
    }

    timer60sec = () =>
    {
        this.resetTimerButtons()
        localStorage.setItem('timer', 60)
        this.timerElm = document.getElementById('timer-60')
        this.timerElm.style.background = 'orange'
        this.timerElm.style.color = 'white'
    }

    timer2min = () =>
    {
        this.resetTimerButtons()
        localStorage.setItem('timer', 120)
        this.timerElm = document.getElementById('timer-120')
        this.timerElm.style.background = 'orange'
        this.timerElm.style.color = 'white'
    }

    diffEasy = () =>
    {
        this.resetDiffButtons()
        this.diffElm = document.getElementById('diff-easy')
        this.diffElm.style.background = 'orange'
        this.diffElm.style.color = 'white'

        this.diff = [3, 4]
        localStorage.setItem('Difficulty', this.diff)
        if(this.diff[1] === 4)
        {
            this.gens = randomWord({ exactly: this.totalWordsPerMinute, min: 3, max: 4, maxLength: 4, join: ' ' })
            localStorage.setItem('Generated Words', this.gens)
        }
    }

    diffMedium = () =>
    {
        this.resetDiffButtons()
        this.diffElm = document.getElementById('diff-medium')
        this.diffElm.style.background = 'orange'
        this.diffElm.style.color = 'white'

        this.diff = [5, 6]
        localStorage.setItem('Difficulty', this.diff)
        if(this.diff[1] === 6)
        {
            this.gens = randomWord({ exactly: this.totalWordsPerMinute, min: 5, max: 6, maxLength: 6, join: ' ' })
            localStorage.setItem('Generated Words', this.gens)
        }
    }

    diffHard = () =>
    {
        this.resetDiffButtons()
        this.diffElm = document.getElementById('diff-hard')
        this.diffElm.style.background = 'orange'
        this.diffElm.style.color = 'white'

        this.diff = [6, 8]
        localStorage.setItem('Difficulty', this.diff)
        if(this.diff[1] === 8)
        {
            this.gens = randomWord({ exactly: this.totalWordsPerMinute, min: 6, max: 8, maxLength: 8, join: ' ' })
            localStorage.setItem('Generated Words', this.gens)
        }
    }

    diffExpert = () =>
    {
        this.resetDiffButtons()
        this.diffElm = document.getElementById('diff-expert')
        this.diffElm.style.background = 'orange'
        this.diffElm.style.color = 'white'

        this.diff = [8, 10]
        localStorage.setItem('Difficulty', this.diff)
        if(this.diff[1] === 10)
        {
            this.gens = randomWord({ exactly: this.totalWordsPerMinute, min: 8, max: 10, maxLength: 10, join: ' ' })
            localStorage.setItem('Generated Words', this.gens)
        }
    }

    // timerCustom = () =>
    // {
    //     this.timerButtonsReset()

    //     var custom = prompt('How many seconds?', '')
    //     while(custom === '' || isNaN(custom))
    //     custom = prompt('That\'s not a number, input seconds in number format', '')
    //     custom = Math.round(custom)
    //     localStorage.setItem('timer', custom)

    //     this.timerElm = document.getElementById('timer-custom')
    //     this.timerElm.style.background = 'orange'
    //     this.timerElm.style.color = 'white'
    // }


}
const modal = new Modal()
export default modal