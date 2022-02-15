import gulp from 'gulp';
import RevAll from 'gulp-rev-all';

const rev = () => {
  return gulp
    .src('./lib/**')
    .pipe(RevAll.revision({
      'dontRenameFile': [
        'index.html',
        'sw.js'
      ],
      'dontUpdateReference': [
        'index.html',
        'sw.js'
      ]
    }))
    .pipe(gulp.dest('build'))
    .pipe(RevAll.manifestFile({}));
};

export {rev}
