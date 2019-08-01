let typedWord, typedChar, toType, lineCount = 1, counter = 1
let correctWordList = [], wrongWordList = [], grossWords = [], userTyped = [], spl, temp = []
let typedOncePerRedo = false, timerInterval = null, newLineInterval = null, timer = 0, res = 0
var elm = ''

function initTimer()
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
initTimer()

/**
 * WPM Calculator
 * Start calculate for each 1 second
 */
function startTimer()
{
    if(timerInterval == null)
    {
        timerInterval = setInterval(() =>
        {
            if(timer >= 2)
            {
                timer -= 1
                $('.timer').html(timer)
            }
            else
            {
                clearInterval(timerInterval)
                timerInterval = null
                calculateResult()
                timer = 0
                $('.timer').html(timer)
                $('.to-type span p').remove()
                $('.typing-container').css('height', '1em')
                $('#typing-box input').val('').attr('disabled', true)
            }
        }, 1000)
    }
    else
    {
        clearInterval(timerInterval)
        timerInterval = null
    }
}

// Shift paragraph up by one and generate new second line paragraph
function shifter()
{
    if(newLineInterval == null)
    {
        setInterval(() =>
        {
            if(document.body.contains(document.querySelector('.to-type span p')))
            {
                if($('.to-type p#' + counter).offset().top > $('.to-type p#' + lineCount).offset().top)
                {
                    for(var i = lineCount; i < counter; i++) { $('.to-type p#' + i).remove() }
                    lineCount = counter
                }
            }
        }, 50)
    }
    else
    {
        clearInterval(newLineInterval)
        newLineInterval = null
    }
}

function calculateResult()
{
    let wrongWords = []
    for(var i = 0; i < wrongWordList.length; i++)
    {
        if(wrongWordList[i] != '')
            wrongWords.push(wrongWordList[i])
    }
    
    let timer = localStorage.getItem('timer')
    if(timer < 60)
        var minute = (timer / 60)
    else
    {
        var minute = (timer - timer % 60) / 60
        var second = timer - minute
    }

    var grossWPM = (grossWords.join(' ').length / 5) / minute
    var netWPM = grossWPM - (wrongWords.length / minute)
    grossWPM = Math.round(grossWPM)
    netWPM = Math.round(netWPM)

    $('.wpm-container span').html(netWPM)
}

function timerButtons()
{
    timer = localStorage.getItem('timer')
    if(timer == 15)
        elm = document.getElementById('timer-' + timer)
    else if(timer == 30)
        elm = document.getElementById('timer-' + timer)
    else if(timer == 60)
        elm = document.getElementById('timer-' + timer)
    else if(timer == 120)
        elm = document.getElementById('timer-' + timer)
    else
        elm = document.getElementById('timer-custom')

    elm.style.background = 'orange'
    elm.style.color = 'white'
}

function resetAll()
{
    $('.to-type span').css('opacity', '0')

    correctWordList = []
    wrongWordList = []
    grossWords = []
    userTyped = []
    lineCount = 1
    counter = 1
    timer = localStorage.getItem('timer')
    typedOncePerRedo = false
    $('.timer').html(timer)

    clearInterval(timerInterval)
    timerInterval = null
    clearInterval(newLineInterval)
    newLineInterval = null

    // $('.to-type p').css(
    // {
    //     'color': 'gray',
    //     'background-color': 'gray'
    // })

    $('.typing-container').css('height', '3.35em')
    toType = $('.to-type p#' + counter).html()
    $('#typing-box input').css('text-align', '').removeAttr('disabled').val('').css('background', 'white').focus()
    typedWord = $('#typing-box input').val().trim().split(' ')
    typedChar = $('#typing-box input').val().trim().split('')

    setTimeout(() =>
    {
        $('.to-type span').css('opacity', '1')
        spl = $('.to-type span').html().split(' ')
        temp = []

        for(var i = 0; i < spl.length; i++)
        { temp.push('<p id="' + (i+1) + '">' + spl[i] + '</p>') }// + ' ')

        $('.to-type span').html(temp)
        $('.to-type p#1').css('background-color', '#0CC')
        toType = $('.to-type p#' + counter).html()
        $('#typing-box button').removeAttr('disabled')

        shifter()
    }, 50)
}

$(document).ready(function()
{
    $('.timer').html(timer)
    timerButtons()

    $('#typing-box input').focus()
    spl = $('.to-type span').html().split(' ')

    for(var i = 0; i < spl.length; i++)
    { temp.push('<p id="' + (i+1) + '">' + spl[i] + '</p>') }// + ' ')

    $('.to-type span').html(temp)
    $('.to-type p#1').css('background-color', '#0CC')
    toType = $('.to-type p#' + counter).html()

    newLineInterval = shifter()

    $('#typing-box input').keypress(function()
    {
        if(event.which == 32 || event.keyCode == 32)
        {
            $('#typing-box input').val('')
            toType = $('.to-type p#' + counter).html()

            if(typedWord == ''){}
            else
            {
                if(typedWord != undefined)
                {
                    $('.to-type p#' + (counter+1)).css('background-color', '#0CC')
                    grossWords.push(typedWord)
                    if(typedWord == $('.to-type p#' + counter).html())
                    {
                        $('.to-type p#' + counter).css('color', '#8BC34A')
                        $('.to-type p#' + counter).css('background-color', '')
                        correctWordList.push(toType)
                        wrongWordList.push('')
                        // userTyped.push(typedWord)
                    }
                    else
                    {
                        $('.to-type p#' + counter).css('color', 'white')
                        $('.to-type p#' + counter).css('color', '#E91E63')
                        $('.to-type p#' + counter).css('background-color', '')
                        correctWordList.push('')
                        wrongWordList.push(toType)

                        // userTyped.push(typedWord)
                        // if(userTyped.length >= 8)
                        // {
                        //     for(var i = 0; i <= 7; i++)
                        //     {
                        //         if(toType == userTyped[i])
                        //             break
                        //         else if(i === 7)
                        //         {
                        //             $('#typing-box input').css({'background-color': '', 'text-align': 'center'}).val('Whoops, let\'s try that again').attr('disabled', true)
                        //         }
                        //     }
                        // }
                    }
                    counter++
                }
            }
        }
    })

    $('#typing-box input').on('input', function()
    {
        if(typedOncePerRedo == false)
        {
            startTimer()
            typedOncePerRedo = true
        }
        typedWord = $('#typing-box input').val().trim()
        typedChar = $('#typing-box input').val().trim().split('')
        toType = $('.to-type p#' + counter).html()

        if(typedChar.length == 0)
        {
            $('.to-type p#' + counter).css('background-color', '#0CC')
            $('#typing-box input').css('background-color', '')
        }
        else
        {
            if(toType.match(typedWord))
            {
                $('.to-type p#' + counter).css('background-color', '#0CC')
                $('#typing-box input').css('background-color', '')
            }
            else
            {
                $('.to-type p#' + counter).css('background-color', '#E91E63')
                $('#typing-box input').css('background-color', '#E91E63')
            }
        }
    })

    $('#typing-box button').on('click', function() { resetAll() })

    $('.timer').hover(function()
    {
        $('.timer-options').css(
        {
            'position': 'initial',
            'top': '',
            'margin-top': '-3px',
            'opacity': 1
        })
    }, function()
    {
        $('.timer-container').on('mouseleave', function()
        {
            $('.timer-options').css(
            {
                'position': 'absolute',
                'top': '-10vh',
                'margin-top': '',
                'opacity': 0
            })
        })
    })
    
    $('.timer-options button').on('click', function()
    {
        $('#typing-box button').click()
        setTimeout(() =>
        {
            timer = localStorage.getItem('timer')
            $('.timer').html(timer)
        }, 1)
    })
})