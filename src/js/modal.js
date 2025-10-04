/* global $ */

import { player } from './video';

window.addEventListener('load', () => {
  const modals = $('.modal');

  modals.on('show.bs.modal', () => {
    $(document.body).addClass('overlay-open');
  });

  modals.on('hidden.bs.modal', () => {
    $(document.body).removeClass('overlay-open');
    player.stopVideo();
  });
});
