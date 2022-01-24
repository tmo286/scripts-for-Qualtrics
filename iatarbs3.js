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
    		    {word : 'אחמד'}, 
    			{word : 'סעיד'}, 
    			{word : 'מוחמד'}, 
    			{word : 'כאמל'}, 
    			{word : 'חאמד'}
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
    		    {word : 'אלון'}, 
    			{word : 'יובל'}, 
    			{word : 'רועי'}, 
    			{word : 'אייל'}, 
    			{word : 'דני'}			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		}
	});
});