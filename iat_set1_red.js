define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Red Group', //Will appear in the data.
			title : {
				media : {word : 'Red Group'}, //Name of the category presented in the task.
				css : {color:'#F90D06','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'set1_006_red_small.jpg'}, 
    			{image : 'set1_023_red_small.jpg'}, 
    			{image : 'set1_027_red_small.jpg'}, 
    			{image : 'set1_205_red_small.jpg'},
    			{image : 'set1_221_red_small.jpg'},
    			{image : 'set1_w023_red_small.jpg'}				
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Blue Group', //Will appear in the data.
			title : {
				media : {word : 'Blue Group'}, //Name of the category presented in the task.
				css : {color:'#0657F9','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'set2_010_blue_small.jpg'}, 
    			{image : 'set2_012_blue_small.jpg'}, 
    			{image : 'set2_014_blue_small.jpg'}, 
    			{image : 'set2_203_blue_small.jpg'},
   			    {image : 'set2_207_blue_small.jpg'},
   			    {image : 'set2_212_blue_small.jpg'}				
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
			attribute1 :
			{
				name : 'Good',
				title : {
					media : {word : 'Good'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Good'},
					{word: 'Positive'},
					{word: 'Pleasant'},
					{word: 'Great'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
			attribute2 :
			{
				name : 'Bad',
				title : {
					media : {word : 'Bad'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Bad'},
					{word: 'Negative'},
					{word: 'Unpleasant'},
					{word: 'Awful'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},	
            randomBlockOrder : false,			
			base_url : {//Where are your images at?
				image : 'https://tmo286.github.io/scripts-for-Qualtrics/images/'
			} 			
	});
});