define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'FEVKANI', //Will appear in the data.
			title : {
				media : {word : 'FEVKANI'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'f1.jpg'}, 
    			{image : 'f2.jpg'}, 
    			{image : 'f3.jpg'}, 
    			{image : 'f4.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'LOKANTA', //Will appear in the data.
			title : {
				media : {word : 'LOKANTA'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'l1.jpg'}, 
    			{image : 'l2.jpg'}, 
    			{image : 'l3.jpg'}, 
    			{image : 'l4.jpg'}		
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
			attribute1 :
			{
				name : 'Positive',
				title : {
					media : {word : 'Positive'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Glorious'},
					{word: 'Peace'},
					{word: 'Marvelous'},
					{word: 'Success'},
					{word: 'Wonderful'}					
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
			attribute2 :
			{
				name : 'Negative',
				title : {
					media : {word : 'Negative'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Agony'},
					{word: 'Nasty'},
					{word: 'Evil'},
					{word: 'Failure'},
					{word: 'Unpleasant'}					
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},			
			base_url : {//Where are your images at?
				image : 'https://tmo286.github.io/scripts-for-Qualtrics/images/'
			} 			
	});
});