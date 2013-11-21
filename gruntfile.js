module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      //filesToCheck: ['app.js','./public/contactlist.js']
      filesToCheck: ['app.js','spellbook.js','battle.js','./js/**/*.js']
    },
});

  // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.registerTask('default', ['jshint'])

};