if(AAutoSave === undefined) var MyMod = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

AAutoSave.launch = function(){
	AAutoSave.isLoaded = 1;
  // Rest of code that needs to be delayed
}

if(!AAutoSave.isLoaded){
	if(CCSE && CCSE.isLoaded){
		AAutoSave.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(AAutoSave.launch);
	}
}
//TODO: Add code that autosaves on Game.Reincarnate
