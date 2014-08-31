module.exports = function(grunt) {

    // config
    grunt.initConfig({
        pkg: grunt.file.readJSON('bower.json'),
        typescript: {

        }
    });

    // plugins
    grunt.loadNpmTasks('grunt-typescript');

    // tasks
    grunt.registerTask('default', ['typescript']);
};