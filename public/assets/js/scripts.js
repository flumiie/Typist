var typedWord, typedChar, toType, lineCount = 1, counter = 1
var correctWords = [], wrongWords = [], spl, temp = []
var typedOncePerRedo = false, timerInterval = null, timer = 60

function wordsToString()
{
    
    // if(typedWord
    //     toType.push($('.to-type p#' + counter).html())
    // else
    //     toType = toType.splice((counter-1), 1)
}

$(document).ready(function()
{
    $('.timer').html(timer)
    $('#typing-box input').focus()
    spl = $('.to-type span').html().split(' ')
    wordsToString()

    for(var i = 0; i < spl.length; i++)
    {
        temp.push('<p id="' + (i+1) + '">' + spl[i] + '</p>' + ' ')
    }
    $('.to-type span').html(temp)
    $('.to-type p#1').css('background-color', '#0CC')
    toType = $('.to-type p#' + counter).html()

    $('#typing-box input').keypress(function()
    {
        if(event.which == 32 || event.keyCode == 32)
        {
            $('#typing-box input').val('')
            toType = $('.to-type p#' + counter).html()
            wordsToString()

            if(typedWord == ''){}
            else
            {
                if(typedWord != undefined)
                {
                    $('.to-type p#' + (counter+1)).css('background-color', '#0CC')
                    if(typedWord == $('.to-type p#' + counter).html())
                    {
                        $('.to-type p#' + counter).css('color', '#8BC34A')
                        $('.to-type p#' + counter).css('background-color', '')
                        correctWords.push(toType)
                        wrongWords.push('')
                    }
                    else
                    {
                        $('.to-type p#' + counter).css('color', 'white')
                        $('.to-type p#' + counter).css('color', '#E91E63')
                        $('.to-type p#' + counter).css('background-color', '')
                        correctWords.push('')
                        wrongWords.push(toType)
                    }
                    counter++
                }
            }

            // Shift paragraph up by one and generate new second line paragraph
            if($('.to-type p#' + counter).offset().top > $('.to-type p#' + lineCount).offset().top)
            {
                for(var i = lineCount; i < counter; i++)
                {
                    $('.to-type p#' + i).remove()
                }
                lineCount = counter
            }
        }
    })

    $('#typing-box input').on('input', function()
    {
        if(typedOncePerRedo == false)
        {
            startCalc()
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

    $('#typing-box button').on('click', function()
    {
        $('.typing-container').css('height', '3.35em')
        $('#typing-box input').removeAttr('disabled')

        correctWords = []
        wrongWords = []
        counter = 1

        typedOncePerRedo = false
        timer = 60
        $('.timer').html(timer)
        startCalc()

        toType = $('.to-type p#' + counter).html()
        $('#typing-box input').val('').css('background', 'white')
        $('#typing-box input').focus()
        typedWord = $('#typing-box input').val().trim().split(' ')
        typedChar = $('#typing-box input').val().trim().split('')

        setTimeout(function()
        {
            spl = $('.to-type span').html().split(' ')
            temp = []
            for(var i = 0; i < spl.length; i++)
            {
                temp.push('<p id="' + (i+1) + '">' + spl[i] + '</p>' + ' ')
            }
            $('.to-type span').html(temp)
            $('.to-type p#1').css('background-color', '#0CC')
            toType = $('.to-type p#' + counter).html()
        }, 75)
    })

    /**
     * WPM Calculator
     * Start calculate for each 1 second
     */
    function startCalc()
    {
        if(timerInterval == null)
        {
            timerInterval = setInterval(function()
            {
                if(timer >= 2)
                {
                    timer -= 1
                    $('.timer').html(timer)
                }
                else
                {
                    $('.timer').html(0)
                    $('.typing-container').css('height', '1em')
                    $('.to-type span p').remove()
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
})