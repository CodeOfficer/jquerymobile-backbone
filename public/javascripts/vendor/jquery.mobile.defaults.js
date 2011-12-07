$(document).bind("mobileinit", function(){
	$.mobile.ajaxEnabled                     = false;
	$.mobile.hashListeningEnabled            = false;
	$.mobile.linkBindingEnabled              = false;	
	$.mobile.page.prototype.options.domCache = true;
	$.mobile.autoInitializePage              = false;
	$.mobile.jqmRouter                       = { ajaxApp : true }
});

