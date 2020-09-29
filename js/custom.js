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