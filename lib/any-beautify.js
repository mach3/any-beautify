/**
 * any-beautify
 * ------------
 * Just the wrapper of einars/js-beautify to simply require in node
 */
 
module.exports = {
	js : require("any-beautify/modules/beautify.js").js_beautify,
	css : require("any-beautify/modules/beautify-css.js").css_beautify,
	html : require("any-beautify/modules/beautify-html.js").html_beautify,
};
