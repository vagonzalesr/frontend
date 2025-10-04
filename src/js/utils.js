/* global $ */

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const openToast = (message, selector) => {
  if ($(selector).length) {
    $(selector).append(`
      <div class="alert alert-green" role="alert" style="display:none;">
        <div class="py-2">
          <div class="message">${message}</div>
        </div>
      </div>
    `);
    const container = $('.alert');
    container.fadeIn();
  } else {
    $(document.body).append(`
      <div class="toast-position" style="display:none;">
        <div class="alert alert-light" role="alert">
          <div class="py-3">
            <div class="message">${message}</div>
          </div>
        </div>
      </div>
    `);
    const container = $('.toast-position');
    container.fadeIn().delay(1500).fadeOut(() => {
      container.remove();
    });
  }
};

const openOverlay = (hasNav) => {
  if (!hasNav) {
    $('nav.nav').addClass('disabled');
  }
  $(document.body).addClass('overlay-open');
  $(document.body).append('<div class="overlay"></div>');
  setTimeout(() => {
    $('.overlay').addClass('show');
  }, 100);
};

const closeOverlay = () => {
  $('nav.nav').removeClass('disabled');
  $(document.body).removeClass('overlay-open');
  $('.overlay').removeClass('show');
  setTimeout(() => {
    $('.overlay').remove();
  }, 500);
};

export {
  isMobile,
  openToast,
  openOverlay,
  closeOverlay,
};
