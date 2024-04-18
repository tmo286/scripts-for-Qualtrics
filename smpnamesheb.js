define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeStimulusCSS : {color:'#000000','font-size':'2.5em'},	
		primeCats :  [
			{
				nameForFeedback : 'male',  //Will be used in the user feedback 
				nameForLogging : 'male', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word: 'רפואה'},
					{word: 'הנדסה'},
					{word: 'מדעים'},
					{word: 'משפטים'},
					{word: 'פוליטיקה'},
					{word: 'אינסטלציה'},
					{word: 'חשמלאות'},
					{word: 'ייעוץ השקעות'},
                                        {word: 'חקלאות'},
					{word: 'גינון'},
					{word: 'אבטחת מידע'},
					{word: 'כבאות'},
					{word: 'מכונאות'},
					{word: 'תיכנות'},
					{word: 'אבטחה'},	
					{word: 'ראיית חשבון'},
					{word: 'כלכלנות'},
					{word: 'עריכת דין'},
					{word: 'וטרינריה'},
					{word: 'ניהול'},	
					{word: 'יזמות'},
					{word: 'פיתוח תוכנה'},
					{word: 'אסטרונומיה'},
					{word: 'בימוי סרטים'},						
					{word: 'סנדלרות'}]
			}, 
			{
				nameForFeedback : 'female',  //Will be used in the user feedback 
				nameForLogging : 'female', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
					{word: 'סיעוד'},
					{word: 'פסיכולוגיה'},
					{word: 'הוראה'},
					{word: 'ריפוי בעיסוק'},
					{word: 'עבודה סוציאלית'},
					{word: 'משאבי אנוש'},
					{word: 'משק-בית'},
					{word: 'ניקיון'},
                                        {word: 'קלדנות'},
					{word: 'קלינאות תקשורת'},
					{word: 'קוסמטיקה'},
					{word: 'איפור'},
					{word: 'עיצוב פנים'},
					{word: 'מזכירות'},
					{word: 'אדמיניסטרציה'},	
					{word: 'עיצוב אופנה'},
					{word: 'שירות לקוחות'},
					{word: 'טיפול באומנות'},
					{word: 'אפייה'},
					{word: 'תפירה'},	
					{word: 'תזונה'},
					{word: 'דוגמנות'},
					{word: 'מורה לריקוד'},
					{word: 'טיפול בקשישים'},						
					{word: 'טיפול בתינוקות'}]
			}
		],
			targetStimulusCSS : {color:'#0000FF','font-size':'2.5em'},
			//The prime categories.
			targetCats :  [
				{
					nameForLogging : 'chinese',  //Will be used in the logging
					//An array of all media objects for this category. The default is pic1-pic200.jpg
					mediaArray : [
						{word: 'טל'}, {word: 'שי'}, {word: 'עומר'}, {word: 'חן'}, {word: 'שובל'}, {word: 'אור'}, {word: 'דניאל'}, {word: 'רותם'}, {word: 'יובל'}, 
						{word: 'גל'}, {word: 'אביב'}, {word: 'גילי'}, {word: 'גיל'}, {word: 'דור'}, {word: 'דרור'}, {word: 'עדי'}, {word: 'שחר'}, {word: 'אריאל'}, {word: 'רוני'}, 
						{word: 'לירון'}, {word: 'הדר'}, {word: 'ניב'}, {word: 'אלמוג'}, {word: 'ליאל'}, {word: 'מעיין'}, {word: 'דקל'}, {word: 'דורון'}, {word: 'זיו'}, {word: 'ירדן'}, 
						{word: 'תום'}, {word: 'שוהם'}, {word: 'ליאור'}, {word: 'מתן'}, {word: 'נועם'}, {word: 'ניצן'}, {word: 'שקד'}, {word: 'כרמל'}, {word: 'סתיו'}, {word: 'מור'}, 
						{word: 'עדן'}, {word: 'עמית'}, {word: 'שחף'}, {word: 'אופיר'}, {word: 'בר'}, {word: 'פז'}, {word: 'פלג'}, 
						{word: 'רז'}, {word: 'זוהר'}, {word: 'לירז'}, {word: 'רביד'}, {word: 'אופק'}, {word: 'גפן'}, {word: 'הלל'}
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
			'אם האות היא יותר נעימה מהאות הסינית הממוצעת <br/>' + 
			'הקישו על מקש <b>leftKey</b> ' + 
			'אם האות היא פחות נעימה מהאות הסינית הממוצעת<br/><br/>' + 
			'התמונות יופיעו ויעלמו במהירות <br/>' + 
			'זכרו להתעלם מהתמונה שמופיעה לפני האות הסינית ולהעריך רק את האות הסינית עצמה<br/><br/></p>'  + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'כאשר אתם מוכנים להתאמן בכמה צעדים במטלה לחצו על מקש הרווח</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round 1 of nBlocks]</p></div>',
			firstBlockInst : '<div><p style="font-size:20px; text-align:right; margin-right:10px; font-family:arial; direction: rtl"><color="000000"><br/>' + 
			"ראיתם כמה מהר זה היה? אל תדאגו אם אתם מפספסים חלק מהתמונות <br/>" + 
			'דרגו את האותיות הסיניות לפי תחושת הבטן שלכם<br/><br/>' + 
			'התרכזו באות הסינית ודרגו אותה כיותר נעימה מהאות הסינית הממוצעת באמצעות מקש <b>rightKey</b> ' + 
			'או כפחות נעימה מהאות הסינית הממוצעת באמצעות מקש <b>leftKey</b><br/><br/> ' + 
			'העריכו את האות הסינית ולא את התמונה שמופיעה לפניה <br/>' + 
			'תמונות אלו נועדו להסיח את דעתכם<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'מוכנים? לחצו על מקש הרווח כדי להתחיל</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round 2 of nBlocks]</p></div>',
			middleBlockInst : '<div><p style="font-size:20px; text-align:right; margin-right:10px; font-family:arial; direction: rtl"><color="000000"><br/>' + 
			'נמשיך לסבב נוסף של המטלה <br/>' + 
			'החוקים נשארו אותו הדבר<br/><br/>' + 
			'התרכזו באות הסינית ודרגו אותה כיותר נעימה מהאות הסינית הממוצעת באמצעות מקש <b>rightKey</b> ' + 
			'או כפחות נעימה מהאות הסינית הממוצעת באמצעות מקש <b>leftKey</b><br/><br/>' + 
			'העריכו את האות הסינית ולא את התמונה שמופיעה לפניה <br/>' + 
			'תמונות אלו נועדו להסיח את דעתכם<br/><br/>' +  
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'מוכנים? לחצו על מקש הרווח כדי להתחיל</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlocks]</p></div>',
			lastBlockInst : '<div><p style="font-size:20px; text-align:right; margin-right:10px; font-family:arial; direction: rtl"><color="000000"><br/>' + 
			'נמשיך לסבב האחרון של המטלה <br/>' + 
			'החוקים נשארו אותו הדבר<br/><br/>' + 
			'התרכזו באות הסינית ודרגו אותה כיותר נעימה מהאות הסינית הממוצעת באמצעות מקש <b>rightKey</b> ' + 
			'או כפחות נעימה מהאות הסינית הממוצעת באמצעות מקש <b>leftKey</b><br/><br/>' + 
			'העריכו את האות הסינית ולא את התמונה שמופיעה לפניה <br/>' + 
			'תמונות אלו נועדו להסיח את דעתכם<br/><br/>' +  
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>' + 
			'Ready? Hit the <b>space bar</b>.</p>' + 
			'<p style="font-size:12px; text-align:center; font-family:arial">' + 
			'<color="000000">[Round blockNum of nBlocks]</p></div>',	
                         endText: '<div><p style="font-size:20px; text-align:left; vertical-align:bottom; margin-left:10px; font-family:arial ; direction: rtl"><color="FFFFFF">'+
			'סיימתם את המטלה <br/>' + 
			'לחצו על מקש הרווח כדי להמשיך<br/><br/>' + 
			'<p style="font-size:16px; text-align:center; font-family:arial"><color="000000"><br/><br/>',
		base_url : {//Where are your images at?
				image : 'https://tmo286.github.io/scripts-for-Qualtrics/images/'
		}
	});
});
