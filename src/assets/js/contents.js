var contents = $('.tweet');
var activeIndex = 0;
var timeToRead = 3000;
setTimeout(nextText, timeToRead);
function nextText() {
    contents.eq(activeIndex).toggleClass("active");
    if (activeIndex < contents.length-1)
        activeIndex++;
    else
        activeIndex = 0;
    contents.eq(activeIndex).toggleClass("active");

    // every 25 characters, 1 second!
    timeToRead = (contents.eq(activeIndex).text().length / 25) * 1000;

    //console.log(timeToRead);
    setTimeout(nextText, timeToRead);
}
