const { src, watch } = require('gulp');
const sassdoc = require('sassdoc');

const { helpers } = require('./helpers');

const sassdocConfig = require('./.sassdoc.json');

const ext = global.config.css.sass ? 'scss' : 'css';

const thisSassdocConfig = {
  ...sassdocConfig,
  package: `${helpers.proot()}${sassdocConfig.package}`,
  dest: helpers.parse(sassdocConfig.dest),
};

// Will process SassDoc docs
function sassdocStart() {
  return src(helpers.trim(`${helpers.source()}/${global.config.css.src}/**/*.${ext}`))
    .pipe(sassdoc(thisSassdocConfig));
}

// When Sass file is changed, it will process SassDoc docs, too
function sassdocListen() {
  return watch(helpers.trim(`${helpers.source()}/${global.config.css.src}/**/*.${ext}`), global.config.watchConfig, sassdocStart, global.bs.reload);
}

exports.sassdoc = {
  sassdocStart,
  sassdocListen,
};
