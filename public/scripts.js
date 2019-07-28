var typedWord, typedChar, toType, counter = 1;
function wordsToString()
{
    toType = [];
    if($('.to-type span p#' + counter).css('background-color') != 'rgb(0, 128, 0)' ||
       $('.to-type span p#' + counter).css('background-color') != 'rgb(255, 0, 0)')
        toType.push($('.to-type span p#' + counter).html())
    else
        toType = toType.splice((counter-1), 1)
}

$(document).ready(function()
{
    var spl = $('.to-type span').html().split(' ');
    temp = []
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
            // console.log(toType)
            if(typedWord == '') null
            else
            {
                if(typedWord != undefined)
                {
                    if(typedWord == $('.to-type span p#' + counter).html())
                    {
                        $('.to-type span p#' + (counter)).css('background-color', 'green')
                    }
                    else
                    {
                        $('.to-type span p#' + (counter)).css('background-color', 'red')
                    }
                    counter++
                }
            }
        }
    })

    $('#typing-box input').on('input', function()
    {
        typedWord = $('#typing-box input').val().trim().split(' ')
        typedChar = $('#typing-box input').val().trim().split('')
        wordsToString()

        if(typedChar.length == 0)
            $('#typing-box input').css('background-color', 'white')
        else
        {
            for(var i = 0; i < typedChar.length; i++)
            {
                if(typedChar[i] == toType[0].split('')[i])
                    $('#typing-box input').css('background-color', 'white')
                else
                {
                    $('#typing-box input').css('background-color', 'red')
                    break;
                }
            }
        }
    })
})