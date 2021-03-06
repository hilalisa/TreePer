

class TreePer{


	constructor(){
		this.isAnimating = false;
		this.player = $('#player');
		this.svgLogo = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Generator: Adobe Illustrator 19.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 62 62\" style=\"enable-background:new 0 0 62 62;\" xml:space=\"preserve\">\r\n<style type=\"text\/css\">\r\n\t.st0{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}\r\n\t.st1{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\r\n<\/style>\r\n<g>\r\n\t<polygon class=\"st0\" points=\"39.6,31.5 33.7,24 36.9,24 31,15.4 25.1,24 28.3,24 22.4,31.5 27.2,31.5 20.2,40.1 41.7,40.1 \r\n\t\t34.7,31.5 \t\"\/>\r\n\t<line class=\"st1\" x1=\"31\" y1=\"40.1\" x2=\"31\" y2=\"46.5\"\/>\r\n<\/g>\r\n<\/svg>\r\n";

	}
	init(){
		var videoTagContainer = $('#movie_player');
		videoTagContainer.append("<canvas class='animation'></canvas>");
		var self = this;
		$('.ytp-right-controls').append("<button id='toggleTreePer' title='TreePer' aria-haspopup='true' class='toggleAnimation ytp-button' >" + this.svgLogo + "</button>");
		// $(".ytp-right-controls").append("<button id='keep-button' class='ytp-keep-button ytp-button'>"+svgLogo+"</button>");
		$('#toggleTreePer').click(function(){
			self.toggleAnimation();
		}).bind(self);

		$('#stopTreePer').click(function(){
			self.hideAnimation();
		}).bind(self);
		this.initClubberMiddleWare();
		if(this.clubberMiddleware.opacity != ""){
			this.clubberMiddleware.start();

		}

	}

	initClubberMiddleWare(){
		this.clubberMiddleware = new ClubberMiddleware();
		this.clubberMiddleware.init();
		this.clubberMiddleware.initClubber();
	}
	start(){

		this.clubberMiddleware.start();
		this.clubberMiddleware.removeVideoOpacity();

	}
	stop(){
		this.clubberMiddleware.stop();
		this.clubberMiddleware.resetVideoOpacity();
	}

	// showAnimation(){
	// 	this.start();
	// 	this.player.addClass('animated');
	//
	// }

	toggleAnimation(){
		if( this.clubberMiddleware.isRunning ){
			this.stop();
		}else{
			this.start();
		}

		console.dir(this.clubberMiddleware.isRunning);
	}
	//
	// hideAnimation(){
	//
	// 	$('#player').removeClass('animated');
	// 	this.stop();
	// }
}
var initialized = false;
$('#page').on('DOMSubtreeModified', (e)=>{

	if($(e.currentTarget).hasClass('watch') && initialized == false){

		initialized = true;
		console.log("Initializing TreePer.");
		console.log(initialized);
		var treePer = new TreePer();

		treePer.init();
	}

});
//
// chrome.extension.sendMessage({}, function(response) {
// 	var readyStateCheckInterval = setInterval(function() {
// 		if (document.readyState === "complete") {
// 			clearInterval(readyStateCheckInterval);
//
// 			// ----------------------------------------------------------
// 			// This part of the script triggers when page is done loading
// 			// ----------------------------------------------------------
//
// 		}
// 	}, 10);
// });
