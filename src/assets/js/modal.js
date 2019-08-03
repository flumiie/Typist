// eslint-disable-next-line
import React, { Component } from 'react'
import $ from 'jquery'
import '../css/modal.css'

// var randomWord = require('./wordGenerator')

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
        if(localStorage.getItem('Difficulty') === null)
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

    showMessage = () =>
    {
        $('.to-type').css('height', '')
        if($('.options-innerds .message').css('opacity') === '0')
        {
            document.querySelector('.options-innerds .message').style.animation = 'showMessage 0.25s normal forwards ease'
            setTimeout(() =>
            {
                document.querySelector('.options-innerds .message').style.animation = 'hideMessage 0.25s normal forwards ease'
            }, 3000)
        }
    }

    timer15sec = () =>
    {
        this.resetTimerButtons()
        localStorage.setItem('timer', 15)
        this.timerElm = document.getElementById('timer-15')
        this.timerElm.style.background = 'orange'
        this.timerElm.style.color = 'white'

        this.showMessage()
    }

    timer30sec = () =>
    {
        this.resetTimerButtons()
        localStorage.setItem('timer', 30)
        this.timerElm = document.getElementById('timer-30')
        this.timerElm.style.background = 'orange'
        this.timerElm.style.color = 'white'

        this.showMessage()
    }

    timer60sec = () =>
    {
        this.resetTimerButtons()
        localStorage.setItem('timer', 60)
        this.timerElm = document.getElementById('timer-60')
        this.timerElm.style.background = 'orange'
        this.timerElm.style.color = 'white'

        this.showMessage()
    }

    timer2min = () =>
    {
        this.resetTimerButtons()
        localStorage.setItem('timer', 120)
        this.timerElm = document.getElementById('timer-120')
        this.timerElm.style.background = 'orange'
        this.timerElm.style.color = 'white'

        this.showMessage()
    }

    timer4min = () =>
    {
        this.resetTimerButtons()
        localStorage.setItem('timer', 240)
        this.timerElm = document.getElementById('timer-240')
        this.timerElm.style.background = 'orange'
        this.timerElm.style.color = 'white'

        this.showMessage()
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