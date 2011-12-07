Support.MobileRouter = function(options) {
  Backbone.Router.apply(this, [options]);
};

_.extend(Support.MobileRouter.prototype, Backbone.Router.prototype, {

  swap: function(newView) {
    var oldView = this.currentView; 

		this.currentView = newView;
		this.currentView.render()

		$('body').append(this.currentView.el);

    var page = $(this.currentView.el).page();
    var changePageOptions = {changeHash: false, fromHashChange: false}

    if (oldView && $(oldView.el).attr("data-direction") === 'reverse') {
      changePageOptions["reverse"] = true;
    };

		$.mobile.changePage(page, changePageOptions);

    $(document).one("pagechange", function(e, ui){
      if (oldView) {
				window.oldView = oldView;
        oldView.leave();
      };
    });
	}

});

Support.MobileRouter.extend = Backbone.Router.extend;

