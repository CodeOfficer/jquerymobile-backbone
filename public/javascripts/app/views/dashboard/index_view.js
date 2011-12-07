App.Views.Dashboard = App.Views.Dashboard || {};

App.Views.Dashboard.Show = Support.MobileView.extend({
  id: "dashboard-show",

  elAttrs: {
    "data-role": "page"
  },

  initialize: function(options) {
		this.template = JST["dashboard/show"];
		this.stories = options.stories;
    return this;
	},

  render: function() {
    $(this.el).html(this.template({stories_count: this.stories.length}));
		return this;
  }
});
