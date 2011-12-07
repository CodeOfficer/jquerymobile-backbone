App.Collections.Stories = Backbone.Collection.extend({

	model : App.Models.Story,

  comparator: function(model) {
    return parseInt(model.get("id"), 10) * -1;
  }

});
