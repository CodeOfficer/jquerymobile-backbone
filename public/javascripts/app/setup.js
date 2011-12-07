// jammit puts end of the packaged assets and we need it here earlier
// window.JST = window.JST || {};

window.App = {
	Collections : {},
	Models      : {},
	Views       : {},

  init: function() {
    App
      .resetData()
      .bindEvents()
      .createRouter()
      .start();   
  },

  resetData: function() {
		App.stories = new App.Collections.Stories([
			{
				"id":1,
				"title":"Peiuga animani agathium pertificum.",
				"body":"Conpeto calciare diptholii. Cuppediana trivi alcmanipuli vitamis imprugaton.",
				"created_at":"2011-11-23T21:09:42-05:00",
				"updated_at":"2011-11-23T21:09:42-05:00"
			},
			{
				"id":2,
				"title":"Peiuga animani agathium pertificum.",
				"body":"Conpeto calciare diptholii. Cuppediana trivi alcmanipuli vitamis imprugaton.",
				"created_at":"2011-11-23T21:09:42-05:00",
				"updated_at":"2011-11-23T21:09:42-05:00"
			},
			{
				"id":3,
				"title":"Peiuga animani agathium pertificum.",
				"body":"Conpeto calciare diptholii. Cuppediana trivi alcmanipuli vitamis imprugaton.",
				"created_at":"2011-11-23T21:09:42-05:00",
				"updated_at":"2011-11-23T21:09:42-05:00"
			}
		]);
		return this;
  },

  bindEvents: function() {  
    $("a[data-direction='reverse']").live("click", function(e){
      $("div[data-role='page']").last().attr("data-direction", "reverse");
    });
    return this;
  },

  createRouter: function() {
    App.router = new App.Router();
    return this;
  },

  start: function() {
    $.mobile.initializePage();
    window.location.hash = '';
    Backbone.history.start()
    return this;
  }

};
