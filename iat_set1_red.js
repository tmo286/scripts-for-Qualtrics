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
					css : {color:'#048832','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Good'},
					{word: 'Positive'},
					{word: 'Pleasant'},
					{word: 'Great'}
				],
				//Stimulus css
				stimulusCss : {color:'#048832','font-size':'2.3em'}
			},
			attribute2 :
			{
				name : 'Bad',
				title : {
					media : {word : 'Bad'},
					css : {color:'#048832','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'Bad'},
					{word: 'Negative'},
					{word: 'Unpleasant'},
					{word: 'Awful'}
				],
				//Stimulus css
				stimulusCss : {color:'#048832','font-size':'2.3em'}
			},	
			instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Put a left finger on the <b>E</b> key for items that belong to the category <font color="#048832">leftAttribute.</font>' +
				'<br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color="#048832">rightAttribute</font>.<br/><br/>' +
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
				'Press the other key to continue.<br/>' +
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>'+
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',			
			instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Put a left finger on the <b>E</b> key for items that belong to the category <font color="#0C0C0C"><b>leftCategory</b></font>. ' +
				'<br/>Put a right finger on the <b>I</b> key for items that belong to the category <font color="#0C0C0C"><b>rightCategory</b></font>.<br/>' +
				'Items will appear one at a time.<br/><br/>' +
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
				'Press the other key to continue.<br/>' +
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>'+
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',	
			instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'Use the <b>E</b> key for <font color="#0C0C0C"><b>leftCategory</b></font> and for <font color="#048832">leftAttribute</font>.<br/>' +
				'Use the <b>I</b> key for <font color="#0C0C0C"><b>rightCategory</b></font> and for  <font color="#048832">rightAttribute</font>.<br/>' +
				'Each item belongs to only one category.<br/><br/>' +
				'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
				'Press the other key to continue.<br/>' + 
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
			instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'This is the same as the previous part.<br/>' +
				'Use the <b>E</b> key for <font color="#0C0C0C"><b>leftCategory</b></font> and for <font color="#048832">leftAttribute</font>.<br/>' +
				'Use the <b>I</b> key for <font color="#0C0C0C"><b>rightCategory</b></font> and for  <font color="#048832">rightAttribute</font>.<br/>' +
				'Each item belongs to only one category.<br/><br/>' +
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',
			instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial">' +
				'<font color="#000000"><u>Part blockNum of nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial">' +
				'<b>Watch out, the labels have changed position!</b><br/>' +
				'Put the left finger on the <b>E</b> key for <font color="#0C0C0C"><b>leftCategory</b></font>.<br/>' +
				'Put the right finger on the <b>I</b> key for <font color="#0C0C0C"><b>rightCategory</b></font>.<br/><br/>' +
				'<u>Go as fast as you can</u> while being accurate.<br/><br/></p>' +
				'<p align="center">Press the <b>space bar</b> when you are ready to start.</font></p></div>',				
            randomBlockOrder : false,			
			base_url : {//Where are your images at?
				image : 'https://tmo286.github.io/scripts-for-Qualtrics/images/'
			} 			
	});
});
