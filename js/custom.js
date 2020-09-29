var scroller = scrollama();

var features = new Map();
layer_PlaceNamesWyman_Master_WGS84_1.eachLayer(function (layer) {
    features.set(layer.feature.properties['NAME'], layer);
})


function handleStepEnter(response) {
    features.get(response.element.getAttribute("feature")).openPopup();
}
function handleStepExit(response) {
    features.get(response.element.getAttribute("feature")).closePopup();
}
function init() {
    scroller
        .setup({
            step: "#scrolly #scroll-text .step",
            offset: 0.33,
            debug: true
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(handleStepExit);
}

init();