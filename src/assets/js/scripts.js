import React from 'react'
import $ from 'jquery'

let typedWord, typedChar, toType, lineCount = 1, counter = 1
let correctWords = [], wrongWords = [], userTyped = [], spl, temp = []
let typedOncePerRedo = false, timerInterval = null, timer = 60

export class Scripts extends React.Component
{
    constructor(props)
    {
        super(props)

        this.scripts = this.scripts.bind(this)
    }

    scripts = () =>
    {
        document.querySelector('.timer').addEventListener('clcik', function(){ console.log('test hv') })
        $('.timer').on('click', function(){
            console.log('hover')
        })
    }
}