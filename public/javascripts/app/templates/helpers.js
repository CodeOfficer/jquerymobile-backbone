Handlebars.template = function(templateString) {
	return function () {
		if (arguments.length < 1) {
			// With no arguments, return the raw template -- useful for rendering
			// partials.
			return templateString;
		} else {
			Handlebars.templates = Handlebars.templates || {}
			Handlebars.templates[templateString] = Handlebars.templates[templateString] || Handlebars.compile(templateString);
			return Handlebars.templates[templateString](arguments[0], arguments[1]);
		}
	};
};

function parseAttributes(block){
  return _.map(_.keys(block.hash), function(key) {
    return key + '="' + block.hash[key] + '"';
  }).join(' ');	
};

Handlebars.registerHelper("content", function(block) {
  return '<div data-role="content">' + block(this) + '</div>';
});

Handlebars.registerHelper("footer", function(block) {
	var attrs = parseAttributes(block);
  return '<div data-role="footer" ' + attrs + '>' + block(this) + '</div>';
});

Handlebars.registerHelper("header", function(block) {
	var attrs = parseAttributes(block);
  return '<div data-role="header" ' + attrs + '>' + block(this) + '</div>';
});

Handlebars.registerHelper("link_to", function(url, block) {
	var attrs = parseAttributes(block);
  return '<a href="' + url + '" ' + attrs + '>' + block(this) + '</a>';
});

Handlebars.registerHelper("listview", function(block) {
	var attrs = parseAttributes(block);
  return '<div data-role="listview" ' + attrs + '>' + block(this) + '</div>';
});

Handlebars.registerHelper("page", function(block) {
	var attrs = parseAttributes(block);
  return '<div data-role="page" ' + attrs + '>' + block(this) + '</div>';
});

