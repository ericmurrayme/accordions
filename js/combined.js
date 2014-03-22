// JavaScript Document

//Eric's 20 lines of code accordion solution... (V1.1 - 7.11.13) 
		//V1.2 - 7.12.13 changed to work for any header level as the row title
		//handle accordions on donate page (upgraded accordion from regular site to auto-close other open items) (finally a good solution)
		//V1.3 - 8-1-13 wrapped the .accTitle in a <span class="heading"> and added font icon element. (replaces necessity for bg images when the item expands)
		//V1.5 - major changes, move this project to Github :)
		
		//USE: wrap any content in .accordion and use any h1-h6 tag for your titles. Everything between the titles will get wrapped in expandable divs.
		
		//Begin
	$(document).ready(function() {	
		$( '.accordion' ).each(function() { //because there bay be more than 1 on a page
		 //set up variables
		 var thisAccordion  = $(this),
				 accTitle     = thisAccordion.children(':header'); //selects any header tag 	 
		 //do stuff
		accTitle.wrap('<span class="heading clearfix">'); //use as a container for font icons and text
		$('span.heading').wrap('<div class="accTitle">'); //wrap the title so we can have backgrounds and padding
		$('span.heading').append('<span class="icon" aria-hidden="true">'); //use for font icons
		//now wrap each section, hide it and handle clicking on the title to open it
		$('.accTitle').each(function() {
			//alternate background color
			accTitleBG     = $('.accTitle').filter(':even');
			accTitleBG.addClass('withBG');
			//indicate that the element is clickable
			$(this).css('cursor', 'pointer');
			//wrap all content until the next h4 as the accordion row content
			$(this).nextUntil('.accTitle').wrapAll('<div class="accRow">');
			$('.accRow').hide(); //hide all rows by default
			$(this).click(function() {
				$('.accTitle').not(this).each(function() { //this function finds other open rows and closes them
					var accTitle = $(this);		
					if(accTitle.hasClass("expanded")) {
						accTitle.removeClass("expanded").next('.accRow').slideToggle(200).toggleClass('open');
					}
				})
				//now we open the row we want
				$(this).toggleClass('expanded'); //this is just for arrows changing
				$(this).next('.accRow').slideToggle(200).toggleClass('open');
			})//end click function
		})//end each title function	      
	});//end each accordion function
}); //document.ready function	
