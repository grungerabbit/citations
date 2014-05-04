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
			var text = $element.html();
			
			function seeText() {
				console.log(text);
			}
			
			
			function highlightCitations() {
				// EXAMPLE - should really wrap + addClass on the real citations
				$element.find("em").css("background-color", "red");
			}
			
			function matchRegex(regex) {
				
				
				return text.match(regex);
			}
			
			function replaceRegex(regex, wrapped) {
				var yay = matchRegex(regex);
				
				console.log(RegExp.$1)
				
				//return console.log(text.replace(regex, RegExp.$1))
			}
			
			function dateOnlyCitation() {
				return replaceRegex(/\(+\d{4}\)/g);
			}
			
			function simpleCitation() {
				return replaceRegex(/\(\w*\,\s\d{4}\)/g);
			}
			var newDisplay = text;
			
		
			
			function allTheRegex() {
				console.log("stay");
				processRegex(dateOnlyCitation());
				processRegex(simpleCitation());
			}
			
			function totalCitation() {
				//var re = /\((.*?)\,(.*?)\)/g;
				//TODO: these
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
					seeText();
					
					highlightCitations();
					
					//allTheRegex();
					
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