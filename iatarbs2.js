define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'ערבים', //Will appear in the data.
			title : {
				media : {word : 'ערבים'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word : 'black1.jpg'}, 
    			{word : 'black2.jpg'}, 
    			{word : 'black3.jpg'}, 
    			{word : 'black4.jpg'}, 
    			{word : 'black5.jpg'}, 
    			{word : 'black6.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'יהודים', //Will appear in the data.
			title : {
				media : {word : 'יהודים'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word : 'yf1.jpg'}, 
    			{word : 'yf4.jpg'}, 
    			{word : 'yf5.jpg'}, 
    			{word : 'ym2.jpg'}, 
    			{word : 'ym3.jpg'}, 
    			{word : 'ym5.jpg'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		}
	});
});