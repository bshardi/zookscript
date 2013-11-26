var CURRENTSCENE ; 

function help(){
	//pass in a function name and it will return the help property of the function.
	if (arguments.length == 0){
		console.log("This is a console game where you type javascript methods into the console to do something.");
		console.log("Type \"Help(<verb>)\" to get specific help on a method.")
		console.log("Known methods are, go, walk, run, climb, look, search.")
	} else {
		for (var i = 0; i < arguments.length; i += 1){
			console.log(arguments[i].help);
		}
	}
}

function Motion(action, options){
	this.defaultOptions = {
		directions: ["north", "n", "south", "s", "east", "e", "west", "w"]
	}
	if (options == undefined) {
		 options = this.defaultOptions;
	} else {
	// go through the default options. If the options that were passed in do not 
	// include some of the keys, add them in from the defaults so options is a full set
		for (var attrname in this.defaultOptions) { 
			if (options[attrname] == undefined)
			 	options[attrname] = this.defaultOptions[attrname]; 
		}
	}    	
	
	this.help = "Type " + action + ".direction(\"<direction word>\") in the console to " + action + " in that direction.";

	this.direction = function(dir){
		if (options['directions'].indexOf(dir) == -1) {
			console.log("you can't " + action + " " + dir);
		} else {
			var dirText = (dir.length == 1) ? options['directions'][options['directions'].indexOf(dir) - 1 ] : dir;
			console.log("You " + action + " " + dirText);
		}	
		//console.log(CURRENTSCENE.directions[dirText]);
		CURRENTSCENE = getScene(CURRENTSCENE.directions[dirText]);
	}
}

function getScene(sceneId){
	for (var s = 0; s <= SCENES.length; s += 1){
		if (SCENES[s].id === sceneId){
			console.log(SCENES[s].name);
			console.log(SCENES[s].description);
			return SCENES[s];
		}
	}
	console.log("OOPS, could not find where to go.");
}


function look(scene) {
	this.help = "Type look() into the console to look around for a thourough search you might want to use search().";
	console.log(CURRENTSCENE.description);
}

function search(scene){
	this.help = "Type search() into the console to peek under every nook and cranny in your area. You fill find all sorts of things this way.";
	console.log(CURRENTSCENE.search);
}

var go = new Motion("go");
var run = new Motion("run");
var walk = new Motion("walk");
var climb = new Motion("climb", {
	directions: ["up", "u", "down", "d"]
});

