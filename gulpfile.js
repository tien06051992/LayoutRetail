var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var changed = require('gulp-changed');


var browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
   var files = [
      'app/*.html',
      'app/css/*.css',
      'app/img/*.png',
      'app/js/*.js'
   ];

   browserSync.init(files, {
      server: {
         baseDir: './'
      }
   });
});


// gulp.task('clean', function() {
//     return gulp.src('build', {
//             read: false
//         })
//         .pipe(clean());
// });

gulp.task('default', ['browser-sync']
// 	, function() {
//     gulp.watch('app/js/**/*.js', function(event) {
//         console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
//         gulp.src('app/js/**/*.js')
//             .pipe(uglify())
//             .pipe(concat('all.min.js'))
//             .pipe(gulp.dest('build'));

//         gulp.src('app/css/**/*.css')
//             .pipe(uglify())
//             .pipe(concat('all.min.css'))
//             .pipe(gulp.dest('build'));
//         console.log('Done');
//     });
// }
);
