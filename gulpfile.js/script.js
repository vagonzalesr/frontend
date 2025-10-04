const { src, dest, watch } = require('gulp');
const gulpif = require('gulp-if');

const { helpers } = require('./helpers');

const scriptConfig = require('./.script.json');

// Will extract Script JS
function scriptStart() {
  const thisConfig = {
    ...scriptConfig,
    src: helpers.trim(
      `${helpers.source()}/${global.config.script.src}/${scriptConfig.src}`,
    ),
  };

  return src(thisConfig.src)
    .pipe(dest(helpers.trim(`${helpers.dist()}/${global.config.js.dist}`)));
}

function scriptListen() {
  return watch(helpers.trim(`${helpers.source()}/${global.config.script.src}/${scriptConfig.src}`), global.config.watchConfig, scriptStart, global.bs.reload);
}

exports.script = {
  scriptStart,
  scriptListen,
};
