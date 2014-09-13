module.exports = function(grunt) {

    // config
    grunt.initConfig({
        //pkg: grunt.file.readJSON('bower.json'),
        ts: {
            build: {
                src: ['*.ts', '!*.d.ts'],
                options: {
                    sourceMap: true,
                    noImplicitAny: true
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'angular-jqwhen.min.js': 'angular-jqwhen.js'
                }
            }
        },
        jasmine: {
            tests: {
                src: 'angular-jqwhen.min.js',
                options: {
                    specs: '*.spec.js',
                    helpers: 'bower_components/angular-mocks/angular-mocks.js',
                    vendor: ['bower_components/jquery/dist/jquery.js', 'bower_components/angular/angular.js']
                }
            }
        },
        bump: {
            options: {
                files: ['package.json', 'bower.json'],
                commitFiles: ['-a']
            }
        }
    });

    // plugins
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-bump');

    // tasks
    grunt.registerTask('default', ['ts', 'uglify', 'jasmine']);
};
