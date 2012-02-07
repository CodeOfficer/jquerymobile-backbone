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

    // BEGIN MOBILE BOILER PLATE HACK
    $('a:not(.ui-collapsible-heading-toggle, .no-fast-button)', this.currentView.el).each(function() {
      var $self = $(this);
      new MBP.fastButton(this, function() {
        window.location.hash = $self.attr('href');

        if ($self.attr('data-direction') !== undefined) {
          $("div[data-role='page']").last().attr("data-direction", $self.attr('data-direction'));
        };
        if ($self.attr('data-transition') !== undefined) {
          $("div[data-role='page']").last().attr("data-transition", $self.attr('data-transition'));
        };

        return false;
      });
    });
    // END MOBILE BOILER PLATE HACK

    if (oldView && $(oldView.el).attr("data-direction") === 'reverse') {
      changePageOptions["reverse"] = true;
    };

    if (oldView && $(oldView.el).attr("data-transition")) {
      changePageOptions["transition"] = $(oldView.el).attr("data-transition");
    } else {
      changePageOptions["transition"] = $.mobile.defaultPageTransition;
    };

		$.mobile.changePage(page, changePageOptions);

    $(document).one("pagechange", function(e, ui){
      if (oldView) {
				window.oldView = oldView;
        oldView.leave();
      };
			newView.trigger('afterRender');
    });
	}

});

Support.MobileRouter.extend = Backbone.Router.extend;

