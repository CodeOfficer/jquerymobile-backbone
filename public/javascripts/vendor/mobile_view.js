Support.MobileView = function(options) {
  this.children = _([]);
  Backbone.View.apply(this, [options]);
};

_.extend(Support.MobileView.prototype, Backbone.View.prototype, {
  elAttrs: {
  },

  leave: function() {
    this.unbind();
    this.remove();
  },

  make : function(tagName, attributes, content) {
    var node = Backbone.View.prototype.make.call(this, tagName, attributes, content);
    if(this.elAttrs){ $(node).attr(this.elAttrs); }
    return node;
  }
});

Support.MobileView.extend = Backbone.View.extend;


