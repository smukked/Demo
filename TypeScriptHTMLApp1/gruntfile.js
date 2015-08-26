module.exports = function (grunt) {

    grunt.initConfig({
        ngtemplates: {
            app: {
                src: 'templates/**/*.*',
                dest: 'public/templates-grunt.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-templates');

    grunt.registerTask('templates', ['ngtemplates']);
}