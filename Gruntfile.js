
module.exports = function(grunt){

	var cp = require("child_process");

	grunt.registerTask("default", ["install", "duplicate"]);

	grunt.registerTask("install", function(){
		var done = this.async();
		cp.exec("bower install", function(){
			done();
		});
	});

	grunt.registerTask("duplicate", function(){
		var done = this.async();

		cp.exec("cp ./components/js-beautify/*.js ./modules/");
		cp.exec("cp ./components/js-beautify/license.txt ./");
	});

};