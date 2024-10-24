if(AAutoClick === undefined) var MyMod = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

AAutoClick.launch = function(){
	AAutoClick.isLoaded = 1;
  // Rest of code that needs to be delayed
}

if(!AAutoClick.isLoaded){
	if(CCSE && CCSE.isLoaded){
		AAutoClick.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(AAutoClick.launch);
	}
}
//TODO: Make Autoclick configurable using CCSE
