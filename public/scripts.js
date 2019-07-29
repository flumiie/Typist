var typedWord, typedChar, toType
var storedWords = '', counter = 1
var spl, temp = []

function wordsToString()
{
    toType = []
    if($('.to-type p#' + counter).css('background-color') != 'rgb(0, 128, 0)' ||
       $('.to-type p#' + counter).css('background-color') != 'rgb(255, 0, 0)')
        toType.push($('.to-type p#' + counter).html())
    else
        toType = toType.splice((counter-1), 1)
}

$(document).ready(function()
{
    localStorage.removeItem('Typed words')
    $('#typing-box input').focus()
    spl = $('.to-type span').html().split(' ')
    wordsToString()

    for(var i = 0; i < spl.length; i++)
    {
        temp.push('<p id="' + (i+1) + '">' + spl[i] + '</p> ')
    }
    $('.to-type span').html(temp)

    $('#typing-box input').keypress(function()
    {
        if(event.which == 32 || event.keyCode == 32)
        {
            $('#typing-box input').val('')
            wordsToString()

            if(typedWord == ''){}
            else
            {
                if(typedWord != undefined)
                {
                    $('.to-type p#' + (counter+1)).css('background-color', 'cyan')
                    if(typedWord == $('.to-type p#' + counter).html())
                    {
                        $('.to-type p#' + counter).css('color', '#8BC34A')
                        $('.to-type p#' + counter).css('background-color', '')
                        storedWords += toType[0] + ' '
                        localStorage.setItem('Typed words', storedWords)
                    }
                    else
                    {
                        $('.to-type p#' + counter).css('color', 'white')
                        $('.to-type p#' + counter).css('background-color', '#E91E63')
                    }
                    counter++
                }
            }

            if($('.to-type p#' + counter).offset().top != $('.to-type p#1').offset().top)
            {
                // Shift paragraph up by one and generate new second line paragraph
                for(var i = 1; i < counter; i++)
                {
                    $('.to-type p#' + i).remove()
                }
                for(var j = 0; j < $('.to-type p').length; j++)
                {
                    $('.to-type p#' + (counter+j)).attr('id', j+1)
                }
                counter = 1
            }
        }
    })

    $('#typing-box input').on('input', function()
    {
        typedWord = $('#typing-box input').val().trim().split(' ')
        typedChar = $('#typing-box input').val().trim().split('')
        wordsToString()

        if(typedChar.length == 0)
        {
            $('.to-type p#' + counter).css('background-color', '')
            $('#typing-box input').css('background-color', '')
        }
        else
        {
            for(var i = 0; i < typedChar.length; i++)
            {
                if(typedChar[i] == toType[0].split('')[i])
                {
                    $('.to-type p#' + counter).css('background-color', '')
                    $('#typing-box input').css('background-color', '')
                }
                else
                {
                    $('.to-type p#' + counter).css('background-color', '#E91E63')
                    $('#typing-box input').css('background-color', '#E91E63')
                    break
                }
            }
        }
    })

    $('#typing-box button').on('click', function()
    {
        counter = 1
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
                temp.push('<p id="' + (i+1) + '">' + spl[i] + '</p> ')
            }
            $('.to-type span').html(temp)
            wordsToString()
        }, 75)
    })
})