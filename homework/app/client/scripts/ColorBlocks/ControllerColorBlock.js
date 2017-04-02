function ControllerColorBlock () {
	var colors = [{color: 'red'}, {color: 'blue'}, {color:'green'}],
	    containerCount = $('.counters'),
	    containerColors = $('.containerColors'),
        colorPalette;

    colorPalette = new ColorPanel(colors);
    showPalette(colorPalette);

    function showPalette (palette) {
	    var colorCell,
            colorCounter,
            containerButton,
            containerCounter;
    
        palette.forEach(function (item) {
            colorCell = new ButtonView({model: item});
            containerButton = colorCell.render();
            containerColors.append(containerButton.el);

            colorCounter = new CounterView({model: item});
            containerCounter = colorCounter.render();
            containerCount.append(containerCounter.el);
        })
    }
};