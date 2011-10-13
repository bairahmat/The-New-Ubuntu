/*
License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Ian Lunn simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.ianlunn.co.uk/.

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

$(document).ready(function() { //when the document is ready...


	//save selectors as variables to increase performance ... used $ for BG var names and no$ for div BG var names
	var $window = $(window);
	var $firstBG = $('#first');
		var first_balloon = $('#first .first_balloon');
	var $secondBG = $('#second');
	var $thirdBG = $('#third');
	var $fourthBG = $('#fourth');
	var $fifthBG = $('#fifth');
		var fifth_bubble = $('#fifth .fifth_bubble');
		var fifth_bubble2 = $('#fifth .fifth_bubble2');
	var $sixthBG = $('#sixth');
		var second_balloon1 = $('#second .second_balloon1');
		var second_balloon2 = $('#second .second_balloon2');	
		var mug1 = $('#third .mug1');
		var mug2 = $('#third .mug2');
		var mug3 = $('#third .mug3');
			var phone = $('#fourth .phone');
	var fourth_balloon1 = $('#fourth .fourth_balloon1');	
	var fourth_balloon2 = $('#fourth .fourth_balloon2');	
	
	var fb = $('#fifth .fb');
	var twitter = $('#fifth .twitter');
	var youtube = $('#fifth .youtube');
	var chat = $('#fifth .chat');
	var skype = $('#fifth .skype');
	var flickr = $('#fifth .flickr');
	var yahoo = $('#fifth .yahoo');	
	
	var oneiric = $('#sixth .oneiric');	
		
	
	var windowHeight = $window.height(); //get the height of the window
	
	
	//apply the class "inview" to a section that is in the viewport
	$('#first, #second, #third, #fourth, #fifth, #sixth').bind('inview', function (event, visible) {
			if (visible == true) {
			$(this).addClass("inview");
			} else {
			$(this).removeClass("inview");
			}
		});
	
			
	//function that places the navigation in the center of the window
	function RepositionNav(){
		var windowHeight = $window.height(); //get the height of the window
		var navHeight = $('#nav').height() / 2;
		var windowCenter = (windowHeight / 1.25); 
		var newtop = windowCenter - navHeight;
		$('#nav').css({"top": newtop}); //set the new top position of the navigation list
	}
	
	//function that is called for every pixel the user scrolls. Determines the position of the background
	/*arguments: 
		x = horizontal position of background
		windowHeight = height of the viewport
		pos = position of the scrollbar
		adjuster = adjust the position of the background
		inertia = how fast the background moves in relation to scrolling
	*/
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
	}
	
	//function to be called whenever the window is scrolled or resized
	function Move(){ 
		var pos = $window.scrollTop(); //position of the scrollbar

		
		//if the first section is in view...
		if($firstBG.hasClass("inview")){
			//call the newPos function and change the background position
			$firstBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 700, 0.1)}); 
			first_balloon.css({'backgroundPosition': newPos(50, windowHeight, pos, 1800, 0.2)}); 
			
		$('#nav li a.1slide').addClass("activestate");
		$('#nav li a.2slide').removeClass("activestate");
		$('#nav li a.3slide').removeClass("activestate");
		$('#nav li a.3slide').removeClass("activestate");
		$('#nav li a.4slide').removeClass("activestate");
		$('#nav li a.5slide').removeClass("activestate");
		$('#nav li a.6spot').removeClass("activestate");

		
		}
		
		
		
		//if the second section is in view...
		if($secondBG.hasClass("inview")){
			//call the newPos function and change the background position
			$secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 2000, 0.1)});
			//call the newPos function and change the secnond background position
			second_balloon1.css({'backgroundPosition': newPos(50, windowHeight, pos, 2500, 0.2)});
			second_balloon2.css({'backgroundPosition': newPos(50, windowHeight, pos, 2500, 0.3)});
			
		$('#nav li a.1slide').removeClass("activestate");
		$('#nav li a.2slide').addClass("activestate");
		$('#nav li a.3slide').removeClass("activestate");
		$('#nav li a.4slide').removeClass("activestate");
		$('#nav li a.5slide').removeClass("activestate");
		$('#nav li a.6slide').removeClass("activestate");

		}
		
		//if the third section is in view...
		if($thirdBG.hasClass("inview")){
			//call the newPos function and change the background position
			$thirdBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 3900, 0.1)});
			mug1.css({'backgroundPosition': newPos(50, windowHeight, pos, 4100, 0.4)});
			mug2.css({'backgroundPosition': newPos(50, windowHeight, pos, 4100, 0.1)});
			mug3.css({'backgroundPosition': newPos(50, windowHeight, pos, 4100, 0.2)});
			
		$('#nav li a.1slide').removeClass("activestate");
		$('#nav li a.2slide').removeClass("activestate");
		$('#nav li a.3slide').addClass("activestate");
		$('#nav li a.4slide').removeClass("activestate");
		$('#nav li a.5slide').removeClass("activestate");
		$('#nav li a.6slide').removeClass("activestate");

		}
		
		//if the fourth section is in view...
		if($fourthBG.hasClass("inview")){
			//call the newPos function and change the background position
			$fourthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 5000, 0.1)});
			phone.css({'backgroundPosition': newPos(50, windowHeight, pos, 4600, 0.2)});
			fourth_balloon1.css({'backgroundPosition': newPos(50, windowHeight, pos, 5100, 0.3)});
			fourth_balloon2.css({'backgroundPosition': newPos(50, windowHeight, pos, 5100, 0.2)});
			
		$('#nav li a.1slide').removeClass("activestate");
		$('#nav li a.2slide').removeClass("activestate");
		$('#nav li a.3slide').removeClass("activestate");
		$('#nav li a.4slide').addClass("activestate");
		$('#nav li a.5slide').removeClass("activestate");
		$('#nav li a.6slide').removeClass("activestate");
			
		}
		
				//if the fifth section is in view...
		if($fifthBG.hasClass("inview")){
			//call the newPos function and change the background position
			$fifthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 6700, 0.1)});
			
			
			fifth_bubble.css({'backgroundPosition': newPos(50, windowHeight, pos, 7300, 0.2)});
			fifth_bubble2.css({'backgroundPosition': newPos(50, windowHeight, pos, 7300, 0.4)});		

			
			fb.css({'backgroundPosition': newPos(50, windowHeight, pos, 7300, 0.3)});
			fb.css({'backgroundPosition': newPos(50, windowHeight, pos, 7300, 0.3)});
			twitter.css({'backgroundPosition': newPos(50, windowHeight, pos, 7300, 0.4)});
			skype.css({'backgroundPosition': newPos(50, windowHeight, pos, 7300, 0.2)});
			chat.css({'backgroundPosition': newPos(50, windowHeight, pos, 7300, 0.3)});
			flickr.css({'backgroundPosition': newPos(50, windowHeight, pos, 7300, 0.1)});
			youtube.css({'backgroundPosition': newPos(50, windowHeight, pos, 7300, 0.3)});
			yahoo.css({'backgroundPosition': newPos(50, windowHeight, pos, 7300, 0.2)});
			
		$('#nav li a.1slide').removeClass("activestate");
		$('#nav li a.2slide').removeClass("activestate");
		$('#nav li a.3slide').removeClass("activestate");
		$('#nav li a.4slide').removeClass("activestate");
		$('#nav li a.5slide').addClass("activestate");
		$('#nav li a.6slide').removeClass("activestate");
		}
		
				//if the sixth section is in view...
		if($sixthBG.hasClass("inview")){
			//call the newPos function and change the background position
			$sixthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 8600, 0.2)});
			oneiric.css({'backgroundPosition': newPos(50, windowHeight, pos, 13900, -0.05)});
			
		$('#nav li a.1slide').removeClass("activestate");
		$('#nav li a.2slide').removeClass("activestate");
		$('#nav li a.3slide').removeClass("activestate");
		$('#nav li a.4slide').removeClass("activestate");
		$('#nav li a.5slide').removeClass("activestate");
		$('#nav li a.6slide').addClass("activestate");	
		}
		
		$('#pixels').html(pos); //display the number of pixels scrolled at the bottom of the page
	 }
		
	RepositionNav(); //Reposition the Navigation to center it in the window when the script loads
	
	$window.resize(function(){ //if the user resizes the window...
		Move(); //move the background images in relation to the movement of the scrollbar
		RepositionNav(); //reposition the navigation list so it remains vertically central
	});		
	
	$window.bind('scroll', function(){ //when the user is scrolling...
		Move(); //move the background images in relation to the movement of the scrollbar
	});
	
});


 $(document).ready(function(){
 
 
 var imgArr = new Array( // relative paths of images
	'images/screenshots/ubuntu.jpg',
	'images/screenshots/dash.jpg',
	'images/screenshots/dash-files.jpg',
	'images/screenshots/global-menu.jpg',
	'images/screenshots/workspaces.jpg',
	'images/screenshots/software-center.jpg'
 );
 
 
 var preloadArr = new Array();
 var i;
 
 /* preload images */
 for(i=0; i < imgArr.length; i++){
 preloadArr[i] = new Image();
 preloadArr[i].src = imgArr[i];
 }
 
 var currImg = 1;
 var intID = setInterval(changeImg, 6000);
 
 /* image rotator */
 function changeImg(){
 $('#second').animate({opacity: 0}, 1000, function(){
 $(this).css('background','url(' + preloadArr[currImg++%preloadArr.length].src +') 50% 0 no-repeat fixed');
 }).animate({opacity: 1}, 1000);
 }
 
 });

