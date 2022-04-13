define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Arbs',  //Will be used in the user feedback 
				nameForLogging : 'Arbs', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				        {image : 'arb1.jpg'}, 
					{image : 'arb2.jpg'}, 
					{image : 'arb3.jpg'}, 
					{image : 'arb4.jpg'}, 
					{image : 'arb5.jpg'}, 
					{image : 'arb6.jpg'}]

			}, 
			{
				nameForFeedback : 'Jews',  //Will be used in the user feedback 
				nameForLogging : 'Jews', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				        {image : 'jew1.jpg'}, 
					{image : 'jew2.jpg'}, 
					{image : 'jew3.jpg'}, 
					{image : 'jew4.jpg'}, 
					{image : 'jew5.jpg'}, 
					{image : 'jew6.jpg'}]
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
			sortingLabel1 : 'נעים', //Response is coded as 0. 
			sortingLabel2 : 'לא נעים',  //Response is coded as 1.
			randomizeLabelSides : false, //IF false, then label1 is on the left, and label2 is on the right.
			exampleBlockInst: '<div><p style="font-size:20px; text-align:right; margin-right:10px; font-family:arial; direction: rtl"><color="000000"><br/>' + 
			'הקישו על מקש <B>rightKey</B> ' +
			'אם האות היא יותר נעימה מהאות הסינית הממוצעת ' + 
			'הקישו על מקש <b>leftKey</b> ' + 
			'אם האות היא פחות נעימה מהאות הסינית הממוצעת<br/><br/>' + 
			'התמונות יופיעו ויעלמו במהירות' + 
			'זכרו להתעלם מהתמונה שמופיעה לפני האות הסינית ולהעריך רק את האות הסינית עצמה<br/><br/></p>'  + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'כאשר אתם מוכנים להתאמן בכמה צעדים במטלה לחצו על מקש הרווח</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round 1 of nBlocks]</p></div>',
			firstBlockInst : '<div><p style="font-size:20px; text-align:right; margin-right:10px; font-family:arial; direction: rtl"><color="000000"><br/>' + 
			"ראיתם כמה מהר זה היה? אל תדאגו אם אתם מפספסים חלק מהתמונות " + 
			'דרגו את האותיות הסיניות לפי תחושת הבטן שלכם<br/><br/>' + 
			'התרכזו באות הסינית ודרגו אותה כיותר נעימה מהאות הסינית הממוצעת באמצעות מקש <b>rightKey</b> ' + 
			'או כפחות נעימה מהאות הסינית הממוצעת באמצעות מקש <b>leftKey</b><br/><br/> ' + 
			'העריכו את האות הסינית ולא את התמונה שמופיעה לפניה ' + 
			'תמונות אלו נועדו להסיח את דעתכם<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'מוכנים? לחצו על מקש הרווח כדי להתחיל</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round 2 of nBlocks]</p></div>',
			middleBlockInst : '<div><p style="font-size:20px; text-align:right; margin-right:10px; font-family:arial; direction: rtl"><color="000000"><br/>' + 
			'נמשיך לסבב נוסף של המטלה' + 
			'החוקים נשארו אותו הדבר<br/><br/>' + 
			'התרכזו באות הסינית ודרגו אותה כיותר נעימה מהאות הסינית הממוצעת באמצעות מקש <b>rightKey</b>' + 
			'או כפחות נעימה מהאות הסינית הממוצעת באמצעות מקש <b>leftKey</b><br/><br/>' + 
			'העריכו את האות הסינית ולא את התמונה שמופיעה לפניה' + 
			'תמונות אלו נועדו להסיח את דעתכם<br/><br/>' +  
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'מוכנים? לחצו על מקש הרווח כדי להתחיל</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlocks]</p></div>',
			lastBlockInst : '<div><p style="font-size:20px; text-align:right; margin-right:10px; font-family:arial; direction: rtl"><color="000000"><br/>' + 
			'נמשיך לסבב האחרון של המטלה' + 
			'החוקים נשארו אותו הדבר<br/><br/>' + 
			'התרכזו באות הסינית ודרגו אותה כיותר נעימה מהאות הסינית הממוצעת באמצעות מקש <b>rightKey</b>' + 
			'או כפחות נעימה מהאות הסינית הממוצעת באמצעות מקש <b>leftKey</b><br/><br/>' + 
			'העריכו את האות הסינית ולא את התמונה שמופיעה לפניה' + 
			'תמונות אלו נועדו להסיח את דעתכם<br/><br/>' +  
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlocks]</p></div>',		
		base_url : {//Where are your images at?
				image : 'https://tmo286.github.io/scripts-for-Qualtrics/images/'
		}
	});
});
