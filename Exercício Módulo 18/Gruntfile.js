module.exports = function(grunt) {
    
    // Configuração do projeto
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Compilação de LESS para CSS
        less: {
            development: {
                options: {
                    compress: false,
                    sourceMap: true
                },
                files: {
                    'dist/css/main.css': 'src/less/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                    cleancss: true
                },
                files: {
                    'dist/css/main.css': 'src/less/main.less'
                }
            }
        },
        
        // Minificação de JavaScript
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                compress: {
                    drop_console: false
                },
                mangle: true,
                sourceMap: true
            },
            target: {
                files: {
                    'dist/js/main.min.js': ['src/js/main.js']
                }
            }
        },
        
        // Watch para desenvolvimento
        watch: {
            less: {
                files: ['src/less/**/*.less'],
                tasks: ['less:development'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            scripts: {
                files: ['src/js/**/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });
    
    // Carregar plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Registrar tarefas
    grunt.registerTask('default', ['less:production', 'uglify']);
    grunt.registerTask('dev', ['less:development', 'uglify', 'watch']);
    
    // Tarefa customizada para exibir mensagem de sucesso
    grunt.registerTask('build', 'Compila LESS e minifica JavaScript', function() {
        grunt.log.writeln('Iniciando processo de build...');
        grunt.task.run(['less:production', 'uglify']);
        grunt.log.ok('Build concluído com sucesso!');
    });
};

