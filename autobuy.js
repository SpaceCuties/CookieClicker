if(AAutoBuy === undefined) var MyMod = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

AAutoBuy.launch = function(){
	AAutoBuy.isLoaded = 1;
  // Rest of code that needs to be delayed
}

if(!AAutoBuy.isLoaded){
	if(CCSE && CCSE.isLoaded){
		AAutoBuy.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(AAutoBuy.launch);
	}
}
//TODO: Add code that autosaves on Game.Reincarnate
