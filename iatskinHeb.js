define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'בעלי עור כהה', //Will appear in the data.
			title : {
				media : {word : 'בעלי עור כהה'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'tone0041b.jpg'}, 
    			{image : 'tone0071b.jpg'}, 
    			{image : 'tone0091b.jpg'}, 
    			{image : 'tone0101b.jpg'}, 
    			{image : 'tone0131b.jpg'},
    			{image : 'tone0141b.jpg'}		
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'בעלי עור בהיר', //Will appear in the data.
			title : {
				media : {word : 'בעלי עור בהיר'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'tone0031a.jpg'}, 
    			{image : 'tone0051a.jpg'}, 
    			{image : 'tone0061a.jpg'}, 
    			{image : 'tone0081a.jpg'}, 
    			{image : 'tone0111a.jpg'},
    			{image : 'tone0121a.jpg'}				
				], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
			attribute1 :
			{
				name : 'רע',
				title : {
					media : {word : 'רע'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'רשע'},
					{word: 'שנאה'},
					{word: 'מכוער'},
					{word: 'פוגע'},
					{word: 'אסון'},
					{word: 'השפלה'}					
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
			attribute2 :
			{
				name : 'טוב',
				title : {
					media : {word : 'טוב'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'מפואר'},
					{word: 'יפה'},
					{word: 'הנאה'},
					{word: 'תענוג'},
					{word: 'הערצה'},
					{word: 'נהדר'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
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