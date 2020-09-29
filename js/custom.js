var main = document.getElementById("main");
var scrolly = document.getElementById("scrolly");
var map = document.getElementById("map");
var scroll_text = document.getElementById("scroll-text");
var step = document.getElementsByClassName("step");

var scroller = scrollama();

function handleStepEnter(response) {
    console.log(response);
    console.log(response.index);
}
function init() {
    scroller
        .setup({
            step: "#scrolly #scroll-text .step",
            offset: 0.33,
            debug: true
        })
        .onStepEnter(handleStepEnter);
}

init();