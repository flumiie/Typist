import React, { Component } from 'react'
import $ from 'jquery'

let typedWord, typedChar, toType, lineCount = 1, counter = 1
let correctWords = [], wrongWords = [], userTyped = [], spl, temp = []
let typedOncePerRedo = false, timerInterval = null, timer = 60

class Scripts extends Component
{
    constructor(props)
    {
        super(props)
        
        this.init()
        this.scripts = this.scripts.bind(this)
    }

    init = () =>
    {
        var tCache = localStorage.getItem('timer')
        if(tCache == null || isNaN(tCache))
        {
            timer = 60
            localStorage.setItem('timer', timer)
        }
        else
            timer = tCache
    }

    scripts = () =>
    {
        document.querySelector('.timer').addEventListener('clcik', function(){ console.log('test hv') })
        $('.timer').on('click', function(){
            console.log('hover')
        })
    }
}