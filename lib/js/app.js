(function($){
	var citations = {
		'config' : {
			'module' : $(""),
		},
                
		'init' : function () {
			var main = citations.mainMethods();
			main.setup();
			
			
			var cite = citations.Citations($(".post"));
			cite.setup();
		},
		'mainMethods' : function () {
			function headerFitText() {
				$("#masthead").fitText(0.55);	
			}     
			
			function helloWorld() {
				console.log("app.js is running and FitText is working on the header. They're included locally though you may want to use a cdn")
			}
			          
			return {
				setup: function () {
					helloWorld();
					headerFitText();
				},
                                
			};
		},
		'Citations' : function ($element) {
			
			function highlightCitations() {
				// EXAMPLE - should really wrap + addClass on the real citations
				$element.find("em").css("background-color", "red");
			}
			
			/*
			//TODO:
			* write regex for (blah, 2001) format
			* parse multiple citations (ABC, 2000; DEF, 1944)
			* inline style: e.g. Researchername (2001)
			* toggle remove citations
			* automatically italicize et. als
			* toggle other citation style
				- footnotes
			* research all the citation styles
			* search/link to actual paper referenced
			*/

			return {
				setup: function () {
					highlightCitations();
				}
			}
		}
	         
	};
	$(document).ready( function() {
		citations.init();
	});
}(jQuery));