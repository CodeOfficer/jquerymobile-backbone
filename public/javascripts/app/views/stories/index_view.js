App.Views.Stories = App.Views.Stories || {};

App.Views.Stories.Index = Support.MobileView.extend({
	id: "stories-index",
	
  elAttrs: {
    "data-role": "page"
  },

  events: {
  },

  initialize: function() {
		this.template = JST["stories/index"];
		return this;
	},

	render: function() {
		$(this.el).html(this.template(this.collection.toJSON()));
		return this;
	}
});
