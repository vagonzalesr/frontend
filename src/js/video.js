/* global YT */

// eslint-disable-next-line import/no-mutable-exports
let player;

window.addEventListener('load', () => {
  player = new YT.Player('player', {
    videoId: 'GG5xBwbje1E',
  });
});

// eslint-disable-next-line import/prefer-default-export
export { player };
