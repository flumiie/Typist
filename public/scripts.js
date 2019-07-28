$(document).ready(function()
{
    var typedWord, typedChar, toType
    $('#typing-box input').keypress(function()
    {
        if(event.which == 32 || event.keyCode == 32)
        {
            $('#typing-box input').val('')
            for(var i = 0; i < toType.length; i++)
            {
                if(typedChar[i] == ' ' && toTypePerChar[i] == ' ')
                {
                    a
                }
                else if(typedChar[i] == toTypePerChar[i])
                {
                    // if($())
                }
            }
        }
    })

    $('#typing-box input').on('input', function()
    {
        typedWord = $('#typing-box input').val().trim().split(' ')
        typedChar = $('#typing-box input').val().trim().split('')
        toType = $('.to-type span').html()

        if(typedChar.length == 0)
            $('#typing-box input').css('background-color', 'white')
        else
        {
            for(var i = 0; i < typedChar.length; i++)
            {
                if(typedChar[i] == toType[i])
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