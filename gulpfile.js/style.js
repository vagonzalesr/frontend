const { src, dest, watch } = require('gulp');
const gulpif = require('gulp-if');

const { helpers } = require('./helpers');

const styleConfig = require('./.style.json');

// Will extract Style CSS
function styleStart() {
  const thisConfig = {
    ...styleConfig,
    src: helpers.trim(
      `${helpers.source()}/${global.config.style.src}/${styleConfig.src}`,
    ),
  };

  return src(thisConfig.src)
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.css.dist}`)))
    .pipe(gulpif(global.config.sync.run, global.bs.stream()));
}

function styleListen() {
  return watch(helpers.trim(`${helpers.source()}/${global.config.style.src}/${styleConfig.src}`), global.config.watchConfig, styleStart, global.bs.reload);
}

exports.style = {
  styleStart,
  styleListen,
};
