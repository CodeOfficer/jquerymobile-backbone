App.Views.Stories = App.Views.Stories || {};

App.Views.Stories.Show = Support.MobileView.extend({
	id: "stories-show",
	
  elAttrs: {
    "data-role": "page"
  },

  initialize: function() {
		this.template = JST["stories/show"];
		return this;
  },

  render: function() {
    $(this.el).html(this.template(this.model.toJSON()));
		return this;
	}
});
