const $stats = $("#stats");

let startTime = null;

$(":input").on("input propertychange", () =>
{
    const val = $box.val();
    var keyspressed = 0;

    if(startTime === null)
        startTime = performance.now();
    else
    {
        keyspressed++;
        wordswritten = keyspressed / 5.1;
        $stats.html("WPM: " + calculateWpm(startTime, performance.now(), wordswritten));
    }
});

function calculateWpm(startTimeMs, currentTimeMs, totalWords)
{
    const mins = ((currentTimeMs - startTimeMs) / 1000) / 60;
    return (totalWords / mins).toFixed(2);
}