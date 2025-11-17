define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Male',  //Will be used in the user feedback 
				nameForLogging : 'Male', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
    		    {word:'Engineer'}, 
    			{word:'Software developer'}, 
    			{word: 'Construction worker'}, 
    			{word: 'Mechanic'},
    			{word: 'Pilot'},
    			{word: 'Architect'},
    			{word: 'Police officer'},
    			{word: 'Firefighter'},
    			{word: 'Surgeon'},
    			{word: 'Electrician'},
    			{word: 'CEO'},
    			{word: 'Investment banker'},
    			{word: 'Military officer'},
    			{word: 'Truck driver'},
    			{word: 'Plumber'},
    			{word: 'Scientist'},
    			{word: 'IT specialist'},
    			{word: 'Lawyer'},
    			{word: 'Carpenter'},
    			{word: 'Economist'},
    			{word: 'Professional athlete'},
    			{word: 'Miner'},
    			{word: 'Politician'},
    			{word: 'Mathematician'},
    			{word: 'Automotive designer'}				
				]

			}, 
			{
				nameForFeedback : 'Female',  //Will be used in the user feedback 
				nameForLogging : 'Female', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
    		    {word : 'Nurse'}, 
    			{word : 'Elementary school teacher'}, 
    			{word : 'Flight attendant'}, 
    			{word : 'Social worker'},
    			{word : 'Administrative assistant'},
    			{word : 'Childcare worker'},
    			{word : 'Dietitian'},
    			{word : 'Librarian'},
    			{word : 'Interior designer'},
    			{word : 'Makeup artist'},
    			{word : 'Hairdresser'},
    			{word : 'Event planner'},
    			{word : 'Midwife'},
    			{word : 'Receptionist'},
    			{word : 'Customer service representative'},
    			{word : 'Human resources specialist'},
    			{word : 'Therapist'},
    			{word : 'Speech-language pathologist'},
    			{word : 'Kindergarten teacher'},
    			{word : 'Fashion designer'},
    			{word : 'Dental hygienist'},
    			{word : 'Public relations specialist'},
    			{word : 'Wedding planner'},
    			{word : 'Retail associate'},
    			{word : 'Personal assistant'}
    			
				
				]
			}
		],
			targetStimulusCSS : {color:'#0000FF','font-size':'2.3em'},
			//The prime categories.
			targetCats :  [
				{
					nameForLogging : 'chinese',  //Will be used in the logging
					//An array of all media objects for this category. The default is pic1-pic200.jpg
					mediaArray : [
						{word : 'Parker'}, {word: 'Riley'}, {word : 'Avery'}, {word : 'Reese'}, {word : 'Ari'}, {word : 'Ariel'}, {word : 'Emery'}, {word : 'Elliott'}, {word : 'Armani'}, 
						{word : 'Charlie'}, {word : 'Quinn'}, {word : 'Phoenix'}, {word : 'Taylor'}, {word : 'Dallas'}, {word : 'Milan'}, {word : 'Lennox'}, {word : 'Alexis'}, {word : 'Hunter'}, {word : 'Remi'}, 
						{word : 'Rowan'}, {word : 'Cameron'}, {word : 'Noah'}, {word : 'Nova'}, {word : 'Lennon'}, {word : 'Kai'}, {word : 'River'}, {word : 'Rory'}, {word : 'Sutton'}, 
						{word : 'Logan'},{word : 'Oakley'}, {word : 'Shiloh'}, {word : 'Sawyer'}, {word : 'Carter'}, {word : 'Dylan'}, {word : 'Emerson'}, {word : 'Sage'}, {word : 'Remington'},  
						{word : 'Amari'}, {word : 'Finley'}, {word : 'Peyton'}, {word : 'Tatum'}, {word : 'Angel'}, {word : 'Ryan'}, {word : 'Blake'}, {word :'Dakota'}, {word : 'Ezra'},{word : 'Eden'}, {word : 'Jordan'}, {word : 'Morgan'}, {word : 'Hayden'}
					]
					
				}
			],
		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{word : 'Graphic designer'}, {word  : 'Pharmacist'}, {word  : 'Translator'}]
		},
		sortingLabel1 : 'Male', //Response is coded as 0. 
		sortingLabel2 : 'Female',  //Response is coded as 1.
		trialsInBlock : [50, 50, 50], //Number of trials in each block 		
		randomizeLabelSides : false, 
		targetCat : 'name',
			//Instructions text for the 2-responses version.
			exampleBlockInst: '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Press the key <B>rightKey</B> if the targetCat is a rightAttribute name. ' + 
			'Hit the <b>leftKey</b> key if it is a leftAttribute name.<br/><br/>' + 
			'The items appear and disappear quickly.  ' + 
			'Remember to ignore the item that appears before the targetCat and evaluate only the targetCat.<br/><br/></p>'  + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'When you are ready to try a few practice responses, hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round 1 of nBlocks]</p></div>',
			firstBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			"See how fast it is? Don't worry if you miss some. " + 
			'Go with your gut feelings.<br/><br/>' + 
			'Concentrate on each targetCat and rate it as a rightAttribute name with the <b>rightKey</b> key, ' + 
			'or more a leftAttribute name with the <b>leftKey</b> key.<br/><br/>' + 
			'Evaluate each targetCat and not the item that appears before it. ' + 
			'Those items are sometimes distracting.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round 2 of nBlocks]</p></div>',
			middleBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Continue to another round of this task. ' + 
			'The rules are exactly the same:<br/><br/>' + 
			'Concentrate on the targetCat and rate it as a rightAttribute name with the <b>rightKey</b> key, ' + 
			'or as a leftAttribute name with the <b>leftKey</b> key.<br/><br/>' + 
			'Evaluate each targetCat and not the item that appears before it. ' + 
			'Those items are sometimes distracting. Go with your gut feelings.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlocks]</p></div>',
			lastBlockInst : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="000000"><br/>' + 
			'Ready for the FINAL round? ' + 
			'The rules are exactly the same:<br/><br/>' + 
			'Concentrate on the targetCat and rate it as a rightAttribute name with the <b>rightKey</b> key, ' + 
			'or as a leftAttribute name with the <b>leftKey</b> key.<br/><br/>' + 
			'Evaluate each targetCat and not the item that appears before it. ' + 
			'Those items are sometimes distracting. Go with your gut feelings.<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlocks]</p></div>',		
		base_url : {//Where are your images at?
			image : 'https://tmo286.github.io/scripts-for-Qualtrics/images/'
		}
	});

});

