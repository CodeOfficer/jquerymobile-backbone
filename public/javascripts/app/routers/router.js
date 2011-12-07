App.Router = Support.MobileRouter.extend({

  routes: {
    ''             : 'dashboardShow',
    'dashboard'    : 'dashboardShow',
    'stories'      : 'storiesIndex',
    'stories-:id'  : 'storiesShow'
  },


  // -----------------------------------
  // Dashboard
  //

  dashboardShow: function() {
    var view = new App.Views.Dashboard.Show({
      stories: App.stories
    });
    this.swap(view);
  },

  // -----------------------------------
  // Stories
  //

  storiesIndex: function() {
    var view = new App.Views.Stories.Index({
      collection: App.stories
    });
    this.swap(view);
  },

  storiesShow: function(id) {
    var view = new App.Views.Stories.Show({ 
      model: App.stories.get(id) 
    });
    this.swap(view);
  }

});


