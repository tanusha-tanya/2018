var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css');
gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass') /*Указываем путь до главного sass файла*/
        .pipe(plumber())  /*Продолжаем отслеживание в случае ошибки компиляции*/
        .pipe(sass())  /*Запускаем компиляцию из sass в css*/
        .pipe(autoprefixer(['last 15 versions']))  /*Говорим что нужно использовать префиксы для поддержки браузерами*/
        .pipe(cssmin()) /*Минифицируем css*/
        .pipe(rename({suffix: '.min'})) /*Переименовываем минифицированный css чтобы добавить суффикс .min*/
        .pipe(gulp.dest('app/css'))  /*Выгружаем минифицированный и не сжатый css файлы*/
        .pipe(browserSync.reload({stream: true}))  /*Обновляем браузер в случае отработки данной задачи*/
});
gulp.task('concatCss', function () {
    return gulp.src(['app/css/**/*.css', '!app/css/style.min.css', '!app/css/style.css']) /*Указываем пути до css игнорируя родные стили*/
        .pipe(concatCss("concat.css")) /*Объединяем все css в новый css с названием concat.css*/
        .pipe(cssmin()) /*Минифицируем*/
        .pipe(rename({suffix: '.min'})) /*Переименовываем*/
        .pipe(gulp.dest('app/css/allStylesInOne')) /*выбрасываем в новую папку allStylesInOne*/
});
gulp.task('liveReload', function () {
    browserSync({
        server: {
            baseDir: 'app' /*Указываем главную папку со скриптами*/
        },
        notify: false /*Отключаем уведомления в браузере для комфортной работы*/
    })
});
gulp.task('default', ['liveReload', 'sass', 'concatCss'], function () {
    gulp.watch('app/sass/**/*.sass', ['sass']); /*Указываем путь на отслеживание sass файлов и собственно саму задачу*/
    gulp.watch('app/**/*.html', browserSync.reload); /*Указываем путь на отслеживание всех html файлов и команду на перезагрузку браузера*/
    gulp.watch('app/css/**/*.css', ['concatCss']) /*Указываем путь на отслеживание всех css файлов и собственно саму задачу*/
});