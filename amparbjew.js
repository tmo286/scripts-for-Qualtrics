define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Black people',  //Will be used in the user feedback 
				nameForLogging : 'Black people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'b01.jpg'}, 
					{image : 'b02.jpg'}, 
					{image : 'b03.jpg'}, 
					{image : 'b04.jpg'}, 
					{image : 'b05.jpg'}]

			}, 
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback 
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'w01.jpg'}, 
					{image : 'w02.jpg'}, 
					{image : 'w03.jpg'}, 
					{image : 'w04.jpg'}, 
					{image : 'w05.jpg'}]
			}
		],
			targetStimulusCSS : {color:'#0000FF','font-size':'2.3em'},
			//The prime categories.
			targetCats :  [
				{
					nameForLogging : 'chinese',  //Will be used in the logging
					//An array of all media objects for this category. The default is pic1-pic200.jpg
					mediaArray : [
						{image : 'pic1.jpg'}, {image : 'pic2.jpg'}, {image : 'pic3.jpg'}, {image : 'pic4.jpg'}, {image : 'pic5.jpg'}, {image : 'pic6.jpg'}, {image : 'pic7.jpg'}, {image : 'pic8.jpg'}, {image : 'pic9.jpg'}, 
						{image : 'pic10.jpg'}, {image : 'pic11.jpg'}, {image : 'pic12.jpg'}, {image : 'pic13.jpg'}, {image : 'pic14.jpg'}, {image : 'pic15.jpg'}, {image : 'pic16.jpg'}, {image : 'pic17.jpg'}, {image : 'pic18.jpg'}, {image : 'pic19.jpg'}, 
						{image : 'pic20.jpg'}, {image : 'pic21.jpg'}, {image : 'pic22.jpg'}, {image : 'pic23.jpg'}, {image : 'pic24.jpg'}, {image : 'pic25.jpg'}, {image : 'pic26.jpg'}, {image : 'pic27.jpg'}, {image : 'pic28.jpg'}, {image : 'pic29.jpg'}, 
						{image : 'pic30.jpg'}, {image : 'pic31.jpg'}, {image : 'pic32.jpg'}, {image : 'pic33.jpg'}, {image : 'pic34.jpg'}, {image : 'pic35.jpg'}, {image : 'pic36.jpg'}, {image : 'pic37.jpg'}, {image : 'pic38.jpg'}, {image : 'pic39.jpg'}, 
						{image : 'pic40.jpg'}
					]
					
				}
			],
		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {//Where are your images at?
				image : 'https://tmo286.github.io/scripts-for-Qualtrics/images/'
		}
	});
});
