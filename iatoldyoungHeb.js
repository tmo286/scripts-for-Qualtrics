define(['pipAPI', 'https://baranan.github.io/minno-tasks/quiat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'אנשים זקנים', //Will appear in the data.
			title : {
				media : {word : 'אנשים זקנים'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'of1.jpg'}, 
    			{image : 'of2.jpg'}, 
    			{image : 'of3.jpg'}, 
    			{image : 'om1.jpg'}, 
    			{image : 'om2.jpg'},
    			{image : 'om3.jpg'}		
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'אנשים צעירים', //Will appear in the data.
			title : {
				media : {word : 'אנשים צעירים'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'yf1.jpg'}, 
    			{image : 'yf2.jpg'}, 
    			{image : 'yf3.jpg'}, 
    			{image : 'ym1.jpg'}, 
    			{image : 'ym2.jpg'},
    			{image : 'ym3.jpg'}				
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
					{word: 'טראגי'},
					{word: 'אסון'},
					{word: 'כישלון'},
					{word: 'מתעב'},
					{word: 'מטריד'},
					{word: 'מחריד'}					
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
					{word: 'מהמם'},
					{word: 'יפה'},
					{word: 'תענוג'},
					{word: 'הנאה'},
					{word: 'עונג'},
					{word: 'מקסים'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},	
			base_url : {//Where are your images at?
				image : 'https://tmo286.github.io/scripts-for-Qualtrics/images/'
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