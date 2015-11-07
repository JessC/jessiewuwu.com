$.fn.spectrum = function(options) {
// Defining the variables
	var index = 0;
	var $element = $(this);

// Array of Colours
	var colourArray = [

		// Colour 1 - mint
	    {
	        src: 'colour1',
	        colour: '#afdbd4'
	    },

	    // Colour 2 - moss green
	    {
	        src: 'colour2',
	        colour: '#779f79'
	    },

	    // Colour 3 - turquoise
	    {
	       	src: 'colour3',
	        colour: '#76c5cc'
	    },

	    // Colour 4 - pink
	   	{
	        src: 'colour4',
	        colour: '#ffb6c5'
	    }// },

	    // // Colour 5 -
	    // {
	    //     src: 'colour5',
	    //     // colour: 'rgb(113,137,255)'
	    //     colour: '#4A4949'
	    // }
	];

	//Use set interval to go through our colourArray
	//Each interval change the background colour of the element
	//Plugin is on, and increment the index.
	setInterval(function() {
		//Change background of selected $element to be
		//colourArray[index]
		//Increment index
		index = index + 1;
		//Make sure that index is not larger than the length of the colourArray
		//If so,
	},4000);

	// Create a style tag
	var style = $("<style>");

	for (var i = 0; i < colourArray.length; i++) {

		// Append a CSS rule to the style tag
		var currentColour = colourArray[i];
		var colorStyle =  " ."+currentColour.src+ " { background: "+currentColour.colour+"; } \n\n";

		style.append(colorStyle);
		// console.log(colourArray[i]);

	}; // end for loop

	var c = 0;
	var currentColour = setInterval(function(){
		// setColor();
		var className = colourArray[c].src;
		// console.log("We should change the class to ", className);
		$('#spectrumPlugin').removeClass().addClass(className + ' spectrumHeader banner');

		c++;

		if(c === colourArray.length) {
			c = 0;
		}

	}, 3000);

	// Appends the style tag in the body of the HTML document
	$('body').append(style);

};