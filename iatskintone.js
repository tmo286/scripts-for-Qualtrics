define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Light-Skinned Black People', //Will appear in the data.
			title : {
				media : {word : 'Light-Skinned Black People'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'lightbf_001.jpg'}, 
    			{image : 'lightbf_002.jpg'}, 
    			{image : 'lightbf_004.jpg'}, 
    			{image : 'lightbf_007.jpg'},
    			{image : 'lightbm_001.jpg'}, 
    			{image : 'lightbm_003.jpg'}				
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Dark-Skinned Black People', //Will appear in the data.
			title : {
				media : {word : 'Dark-Skinned Black People'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'darkbf_001.jpg'}, 
    			{image : 'darkbf_002.jpg'}, 
    			{image : 'darkbf_004.jpg'}, 
    			{image : 'darkbf_007.jpg'},
    			{image : 'darkbm_001.jpg'}, 
    			{image : 'darkbm_003.jpg'}		
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
					{word: 'Friendship'},
					{word: 'Magnificent'},
					{word: 'Pleasure'},
					{word: 'Enjoy'},
					{word: 'Terrific'},
					{word: 'Appealing'}					
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
					{word: 'Disaster'},
					{word: 'Horrible'},
					{word: 'Disgust'},
					{word: 'Sick'},
					{word: 'Despise'},
					{word: 'Hurtful'}	
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},	
            randomBlockOrder : true,			
			base_url : {//Where are your images at?
				image : 'https://tmo286.github.io/scripts-for-Qualtrics/images/'
			} 			
	});
});