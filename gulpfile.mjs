import gulp from 'gulp';
import open from 'gulp-open';

// Your existing task
gulp.task('open-app', function () {
  return gulp.src('pages/dashboard.html').pipe(open());
});

// Add this new task to avoid Netlify failure
gulp.task('build', function (done) {
  // You can add real build steps here (e.g., copy files, compile, etc.)
  console.log('Build task running...');
  done(); // Marks the task as complete
});
