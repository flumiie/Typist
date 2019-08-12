let typedWord, typedChar, toType, lineCount = 1, counter = 1
let correctWordList = [], wrongWordList = [], grossWords = [], userTyped = [], spl, temp = []
let typedOncePerRedo = false, timerInterval = null, newLineInterval = null, timer = 0, diff = 0, res = 0

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
    
var clen = timer.toString().split('').length
function digitalTimer()
{
    let clock = timer.toString().split('')
    var telm = ''

    for(var i = 0; i < clock.length; i++)
    {
        telm = '.timer p#\\3' + (i+1)
        if($(telm).html().toString() != clock[i] && clock[i] != undefined)
            $(telm).html(clock[i])
        if(clen > clock.length)
        {
            $('.timer p#\\3' + clen).css('display', ' none')
            clen -= 1
        }
    }
}

function calc()
{
    let wrongWords = [], gw = [], errors = 0, minute, second
    for(var i = 0; i < wrongWordList.length; i++)
    {
        if(wrongWordList[i] != '')
        wrongWords.push(wrongWordList[i])
    }

    let timer = localStorage.getItem('timer')
    if(timer < 60)
        minute = (timer / 60)
    else
    {
        minute = (timer - timer % 60) / 60
        second = timer - minute
    }

    for(var i = 0; i < wrongWordList.length; i++)
    {
        if(wrongWordList[i] != '')
            errors += 1
    }

    var grossWPM = (grossWords.join(' ').length / 5) / minute
    // var netWPM = (correctWordList.join(' ').length / 5) / minute
    var netWPM = grossWPM - (errors / minute)
    
    $('.wpm-container').addClass('res-highlight')
    void document.querySelector('.wpm-container').offsetWidth
    setTimeout(function(){ $('.wpm-container').removeClass('res-highlight') }, 1000)

    $('#errors').html(Math.round(errors))
    $('#net-wpm').html(Math.round(netWPM))

    // if(grossWPM == 0)
}

/**
 * Interval for each 1 second
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
                digitalTimer()
            }
            else
            {
                clearInterval(timerInterval)
                timerInterval = null
                calc()
                timer = 0
                digitalTimer()
                $('.to-type span p').remove()
                $('.typing-container').css('height', '1em')
                $('.to-type').css('height', '1em')
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
        newLineInterval = setInterval(() =>
        {
            if(document.body.contains(document.querySelector('.to-type span p')))
            {
                let escapeF = '', escapeS = ''
                if(counter < 10) escapeF = '\\3'
                if(lineCount < 10) escapeS = '\\3'
                const first = $('.to-type p#' + escapeF + counter)
                const second = $('.to-type p#' + escapeS + lineCount)
                if(first.offset().top > second.offset().top)
                {
                    for(var i = lineCount; i < counter; i++)
                    {
                        let escape = ''
                        if(i < 10) escape = '\\3'
                        $('.to-type p#' + escape + i).remove()
                    }
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

function optionButtons()
{
    var elm = ''
    timer = localStorage.getItem('timer')
    diff = localStorage.getItem('Difficulty').split(',')

    if(timer == 15)
        elm = document.getElementById('timer-' + timer)
    else if(timer == 30)
        elm = document.getElementById('timer-' + timer)
    else if(timer == 60)
        elm = document.getElementById('timer-' + timer)
    else if(timer == 120)
        elm = document.getElementById('timer-' + timer)
    else if(timer == 240)
        elm = document.getElementById('timer-' + timer)

    elm.style.background = 'orange'
    elm.style.color = 'white'

    if(diff[1] == 3)
        elm = document.getElementById('diff-easy')
    else if(diff[1] == 6)
        elm = document.getElementById('diff-medium')
    else if(diff[1] == 9)
        elm = document.getElementById('diff-hard')
    else if(diff[1] == 12)
        elm = document.getElementById('diff-expert')
    else
        elm = document.getElementById('diff-random')
    
    elm.style.background = 'orange'
    elm.style.color = 'white'
}

function resetAll()
{
    $('.to-type span').css('opacity', '0')

    setTimeout(function()
    {
        let sel = localStorage.getItem('timer')
        if(sel == '15' || sel == '30' || sel == '60')
        {
            $('.timer p#\\31').css('display', '')
            $('.timer p#\\32').css('display', '')
        }
        else if(sel == '120' || sel == '240')
        {
            $('.timer p#\\31').css('display', '')
            $('.timer p#\\32').css('display', '')
            $('.timer p#\\33').css('display', '')
        }
    }, 1)

    correctWordList = []
    wrongWordList = []
    grossWords = []
    userTyped = []
    lineCount = 1
    counter = 1
    timer = localStorage.getItem('timer')
    clen = timer.toString().split('').length
    typedOncePerRedo = false
    digitalTimer()

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
    $('.to-type').css('height', '')
    toType = $('.to-type p#\\31').html()
    $('#typing-box input').css('text-align', '').removeAttr('disabled').val('').css('background', 'white').focus()
    typedWord = $('#typing-box input').val().trim().split(' ')
    typedChar = $('#typing-box input').val().trim().split('')

    setTimeout(() =>
    {
        $('.to-type span').css('opacity', '1').removeAttr('style')
        spl = $('.to-type span').html().split(' ')
        temp = []

        for(var i = 0; i < spl.length; i++)
        { temp.push('<p id="' + (i+1) + '">' + spl[i] + '</p>') }// + ' ')

        $('.to-type span').html(temp)
        $('.to-type p#\\31').css('background-color', '#0CC')
        toType = $('.to-type p#\\31').html()
        $('#typing-box button').removeAttr('disabled')

        shifter()
    }, 50)
}

$(document).ready(function()
{
    digitalTimer()
    optionButtons()

    $('#typing-box input').focus()
    spl = $('.to-type span').html().split(' ')

    for(var i = 0; i < spl.length; i++)
    { temp.push('<p id="' + (i+1) + '">' + spl[i] + '</p>') }// + ' ')

    $('.to-type span').html(temp)
    $('.to-type p#\\31').css('background-color', '#0CC')
    toType = $('.to-type p#\\31').html()

    newLineInterval = shifter()

    $('#typing-box input').keypress(function()
    {
        if(event.which == 32 || event.keyCode == 32)
        {
            $('#typing-box input').val('')
            setTimeout(() => { $('#typing-box input').val('') }, 1)
            let escape = ''
            if(counter < 10) escape = '\\3'

            toType = $('.to-type p#' + escape + counter).html()

            if(typedWord == ''){}
            else
            {
                if(typedWord != undefined)
                {
                    $('.to-type p#' + escape + (counter+1)).css('background-color', '#0CC')
                    grossWords.push(typedWord)
                    if(typedWord == $('.to-type p#' + escape + counter).html())
                    {
                        $('.to-type p#' + escape + counter).css('color', '#8BC34A')
                        $('.to-type p#' + escape + counter).css('background-color', '')
                        correctWordList.push(toType)
                        wrongWordList.push('')
                        // userTyped.push(typedWord)
                    }
                    else
                    {
                        $('.to-type p#' + escape + counter).css('color', 'white')
                        $('.to-type p#' + escape + counter).css('color', '#E91E63')
                        $('.to-type p#' + escape + counter).css('background-color', '')
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
        let escape = ''
        if(counter < 10) escape = '\\3'

        if(typedOncePerRedo == false)
        {
            startTimer()
            typedOncePerRedo = true
        }
        typedWord = $('#typing-box input').val().trim()
        typedChar = $('#typing-box input').val().trim().split('')
        toType = $('.to-type p#' + escape + counter).html()

        if(typedChar.length == 0)
        {
            $('.to-type p#' + escape + counter).css('background-color', '#0CC')
            $('#typing-box input').css('background-color', '')
        }
        else
        {
            for(var i = 0; i < typedChar.length; i++)
            {
                if(typedChar[i] == toType.split('')[i])
                {
                    $('.to-type p#' + escape + counter).css('background-color', '#0CC')
                    $('#typing-box input').css('background-color', '')
                }
                else
                {
                    $('.to-type p#' + escape + counter).css('background-color', '#E91E63')
                    $('#typing-box input').css('background-color', '#E91E63')
                    break
                }
            }
        }
    })

    /** REDO BUTTON **/
    $('#typing-box button').on('click', function() { resetAll() })
    
    $('.timer-options button').on('click', function()
    {
        $('#typing-box button').click()
        setTimeout(() =>
        {
            timer = localStorage.getItem('timer')
            digitalTimer()
        }, 1)
    })

    $('.difficulty-options').on('click', function()
    {
        $('#typing-box button').click()
        setTimeout(() =>
        {
            timer = localStorage.getItem('timer')
            digitalTimer()
        }, 1)
    })

    $('#page-stats').hover(function()
    {
        $('#page-stats').css('opacity', 1)
    }, function()
    {
        $('#page-stats').css('opacity', 0)
    })
})