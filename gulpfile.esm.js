import gulp from 'gulp';
import {clean} from './devops/gulp/clean';
import {rev} from './devops/gulp/rev';

exports.clean = clean;
exports.rev = rev;
exports.build = gulp.series(clean, rev);
