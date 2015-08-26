var gulp = require("gulp"),
    templateCache = require('gulp-angular-templatecache');

gulp.task("gogo", function () {
    gulp.src("./wwwroot/lib/angular/angular.js").pipe(gulp.dest("./wwwroot/drop/"));
});



gulp.task('angular-template', function () {
    return gulp.src('./templates/**/*.html')
      .pipe(templateCache())
      .pipe(gulp.dest('./public'));
});
