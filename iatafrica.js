define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
    
    return iatExtension({
		category1 : {
			name : 'Europe', //Will appear in the data.
			title : {
				media : {word : 'Europe'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2.5em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'europe3.png'}, 
                {image: 'europe4.png'}, 
                {image: 'imageeurope1.png'} , 
                {image: 'imageeurope6.png'}  
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31b404','font-size':'3em'}
		},	
		category2 :	{
			name : 'Africa', //Will appear in the data.
			title : {
				media : {word : 'Africa'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2.5em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
                {image: 'africa3.png'},
                {image: 'africa4.png'},
                {image: 'imageafrica1.png'},
                {image: 'imageafrica6.png'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31b404','font-size':'3em'}
		},
		attribute2 : 
		{
			name : 'Positive', 
			title : {
				media : {word : 'Positive'}, 
				css : {color:'#0000FF','font-size':'2.5em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Happy'},
				{word: 'Pleasant'},
				{word: 'Nice'},
				{word: 'Super'},
				{word: 'Fantastic'},
				{word: 'Great'},
				{word: 'Wonderful'},
				{word: 'Brilliant'}
			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'3em'} 
		},
		attribute1 : 
		{
			name : 'Negative', 
			title : {
				media : {word : 'Negative'}, 
				css : {color:'#0000FF','font-size':'2.5em'}, 
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
				{word: 'Nasty'},
				{word: 'Terrible'},
				{word: 'Horrible'},
				{word: 'Unpleasant'},
				{word: 'Sad'},
				{word: 'Disgusting'},
				{word: 'Sadness'},
				{word: 'Foul'}
			], 
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'3em'}
		},	

		////In each block, we can include a number of mini-blocks, to reduce repetition of same group/response.
		blockSwitch_nTrials : 20, //Default is 24, but the demo studies are using 40 currently.
		blockSwitch_nMiniBlocks : 5, 

		fontColor : '#000000', //The default color used for printed messages.

		//Instructions text.
		// You can use the following variables and they will be replaced by 
		// the name of the categories and the block's number variables:
		// leftCategory, rightCategory, leftAttribute and rightAttribute, blockNum, nBlocks.
		// Notice that this is HTML text.
		instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' + 
			'Put a left finger on the <b>E</b> key for <font color="#0000ff">leftAttribute.</font>' + 
			'<br/>Put a right finger on the <b>I</b> key for <font color="#0000ff">rightAttribute</font>.<br/><br/>' + 
			'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' + 
			'Press the other key to continue. ' + 
			'<u>Go as fast as you can</u> while being accurate.<br/><br/>'+
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
		instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' + 
			'Put a left finger on the <b>E</b> key for <font color="#31b404">leftCategory</font> images. ' + 
			'<br/>Put a right finger on the <b>I</b> key for <font color="#31b404">rightCategory</font> images.<br/>' + 
			'Items will appear one at a time.<br/><br/>' + 
			'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' + 
			'Press the other key to continue. ' + 
			'<u>Go as fast as you can</u> while being accurate.<br/><br/>'+
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
		instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' + 
			'Use the <b>E</b> key for <font color="#31b404">leftCategory</font> images and for <font color="#0000ff">leftAttribute</font><br/>' + 
			'Use the <b>I</b> key for <font color="#31b404">rightCategory</font> images and <font color="#0000ff">rightAttribute</font><br/>' + 
			'Each item belongs to only one category.<br/><br/>' + 
			'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' + 
			'Press the other key to continue. <u>Go as fast as you can</u> while being accurate.<br/><br/>' + 
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
		instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' + 
			'This is the same as the previous part.<br/>' + 
			'Use the <b>E</b> key for <font color="#31b404">leftCategory</font> images and for <font color="#0000ff">leftAttribute</font><br/>' + 
			'Use the <b>I</b> key for <font color="#31b404">rightCategory</font> images and <font color="#0000ff">rightAttribute</font><br/>' + 
			'Each item belongs to only one category.<br/><br/>' + 
			'<u>Go as fast as you can</u> while being accurate.<br/><br/>' + 
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 
		instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
			'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' + 
			'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' + 
			'<b>Watch out, the labels have changed position!</b><br/>' + 
			'Use the left finger on the <b>E</b> key for <font color="#31b404">leftCategory</font>.<br/>' + 
			'Use the right finger on the <b>I</b> key for <font color="#31b404">rightCategory</font>.<br/><br/>' + 
			'<u>Go as fast as you can</u> while being accurate.<br/><br/>' + 
			'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>', 

			base_url : {//Where are your images at?
				image : 'https://tmo286.github.io/scripts-for-Qualtrics/images/'
			} 		
	});
});














