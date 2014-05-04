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
			var text = $element.text();
			
			
			function highlightCitations() {
				// EXAMPLE - should really wrap + addClass on the real citations
				$element.find("em").css("background-color", "red");
			}
			
			function dateOnlyCitation() {
				//var re = /\((.*?)\,(.*?)\)/g;
				
				//var re = /\((.*?)\,(.*?)\)/g;
				
				var number = /\(+\d{4}\)/g;
				console.log(text.replace(number, "TESTTTTTTT"));
			}
			
			function simpleCitation() {
				//var re = /\((.*?)\,(.*?)\)/g;
				
				//var re = /\((.*?)\,(.*?)\)/g;
				
				var re = /\(\w*\,\s\d{4}\)/g;
				console.log(text.replace(re, "AAAAAA"));
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
					dateOnlyCitation();
					simpleCitation();
				}
			}
		}
	         
	};
	$(document).ready( function() {
		citations.init();
	});
}(jQuery));