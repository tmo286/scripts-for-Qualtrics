define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'אני', //Will appear in the data.
			title : {
				media : {word : 'אני'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2.5em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'אני'},
					{word: 'שלי'},
					{word: 'אלי'},
					{word: 'בשבילי'},
					{word: 'אצלי'}		
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'2.5em'}
		},	
		category2 :	{
			name : 'אחר', //Will appear in the data.
			title : {
				media : {word : 'אחר'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2.5em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'אחר'},
					{word: 'שלו'},
					{word: 'אליו'},
					{word: 'בשבילו'},
					{word: 'אצלו'}					
				], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.5em'}
		},
			attribute1 :
			{
				name : 'צודק',
				title : {
					media : {word : 'צודק'},
					css : {color:'#0000FF','font-size':'2.5em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'נכון'},
					{word: 'צודק'},
					{word: 'יודע'},
					{word: 'מצליח'},
					{word: 'אמת'}					
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.5em'}
			},
			attribute2 :
			{
				name : 'טועה',
				title : {
					media : {word : 'טועה'},
					css : {color:'#0000FF','font-size':'2.5em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'טועה'},
					{word: 'לא נכון'},
					{word: 'שגוי'},
					{word: 'נכשל'},
					{word: 'שקר'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.5em'}
			},	
			instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial; direction: rtl">' +
                '<font color="#000000"><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align: center; vertical-align:bottom; margin-right:10px; font-family:arial; direction: rtl">' +
                'הקישו באצבע שמאל על מקש <b>E</b> ' + 
                'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">leftAttribute</font><br/>'+
                'הקישו באצבע ימין על מקש <b>I</b> '+ 
                'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">rightAttribute</font><br/>'+
                'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע<br/> '+
				'לחצו על המקש האחר כדי להמשיך<br/>' +
				'<u>בצעו מהר ככל האפשר אך היו מדויקים</u><br/><br/></p>'+
				'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>',
				
			instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial; direction: rtl">' +
                '<font color="#000000"><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:center; vertical-align:bottom; margin-right:10px; font-family:arial; direction: rtl">' +
                'הקישו באצבע שמאל על מקש <b>E</b> ' + 
                'עבור פריטים ששייכים לקטגוריה <font color="#336600">leftCategory</font><br/>'+
                'הקישו באצבע ימין על מקש <b>I</b> ' + 
                'עבור פריטים ששייכים לקטגוריה <font color="#336600">rightCategory</font><br/>'+
                'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע<br/> '+
				'לחצו על המקש האחר כדי להמשיך<br/>' +
				'<u>השיבו מהר ככל האפשר אך היו מדויקים</u><br/><br/></p>'+
				'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>',	
				
			instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial; direction: rtl">' +
                '<font color="#000000"><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align: center; vertical-align:bottom; margin-right:10px; font-family:arial; direction: rtl">' +
                'הקישו באצבע שמאל על מקש <b>E</b> '+ 
                'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">leftAttribute</font> ' +
                'או עבור פריטים ששייכים לקטגוריה <font color="#336600">leftCategory</font><br/>'+
                'הקישו באצבע ימין על מקש <b>I</b> ' + 
                'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">rightAttribute</font> '+
                'או עבור פריטים ששייכים לקטגוריה <font color="#336600">rightCategory</font><br/>'+
				'כל פריט מתאים רק לקטגוריה אחת<br/><br/>' +
                'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע<br/>'+
				'לחצו על המקש האחר כדי להמשיך<br/>' +
				'<u>השיבו מהר ככל האפשר אך היו מדויקים</u><br/><br/></p>'+
				'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>',
				
			instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial; direction: rtl">' +
                '<font color="#000000"><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align: center; vertical-align:bottom; margin-right:10px; font-family:arial; direction: rtl">' +
                'הקישו באצבע שמאל על מקש <b>E</b> '+ 
                'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">leftAttribute</font> '+
                'או עבור פריטים ששייכים לקטגוריה <font color="#336600">leftCategory</font><br/>'+
                'הקישו באצבע ימין על מקש <b>I</b> '+ 
                'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">rightAttribute</font> ' +
                'או עבור פריטים ששייכים לקטגוריה <font color="#336600">rightCategory</font><br/>'+
				'כל פריט מתאים רק לקטגוריה אחת<br/><br/>' +
                'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע<br/>'+
				'לחצו על המקש האחר כדי להמשיך<br/>' +
				'<u>השיבו מהר ככל האפשר אך היו מדויקים</u><br/><br/></p>'+
				'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>',
				
			instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial; direction: rtl">' +
                '<font color="#000000"><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align: center; vertical-align:bottom; margin-right:10px; font-family:arial; direction: rtl">' +
				'<b>שימו לב! הקטגוריות החליפו מיקום</b><br/>' +
                'הקישו באצבע שמאל על מקש <b>E</b> '+ 
                'עבור פריטים ששייכים לקטגוריה <font color="#336600">leftCategory</font><br/>'+
                'הקישו באצבע ימין על מקש <b>I</b> '+ 
                'עבור פריטים ששייכים לקטגוריה <font color="#336600">rightCategory</font><br/>'+
				'<u>השיבו מהר ככל האפשר אך היו מדויקים</u><br/><br/></p>'+
				'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>',
			leftKeyText : '"E" מקש', 
			rightKeyText : '"I" מקש', 
            orText : 'או',
            remindErrorText :'<p align="center" style="font-size:"0.6em"; font-family:arial">' +
			'<p/>',
			finalText : 'לחצו על מקש הרווח בכדי להמשיך למטלה הבאה' 			
	});
});
