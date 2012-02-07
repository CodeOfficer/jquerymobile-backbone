Support.MobileView = function(options) {
  Backbone.View.apply(this, [options]);
};

_.extend(Support.MobileView.prototype, Backbone.View.prototype, {
  elAttrs: {
  },

  leave: function() {
    this.unbind();
    this.remove();
    this.afterLeave();
  },

  afterLeave: function() {},

  make : function(tagName, attributes, content) {
    var node = Backbone.View.prototype.make.call(this, tagName, attributes, content);
    if(this.elAttrs){ $(node).attr(this.elAttrs); }
    return node;
  }
});

Support.MobileView.extend = Backbone.View.extend;


