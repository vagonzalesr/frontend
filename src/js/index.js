/* eslint-disable no-unused-vars */
/* global $, bootstrap, YT */

import './header';
import './carousels';
import './menu_sidebar';
import './modal';

window.addEventListener('load', () => {
  // Copy link
  const copyClipboard = $('.copy-clipboard');

  copyClipboard.click((evt) => {
    evt.preventDefault();
    const $temp = $('<input>');
    $(document.body).append($temp);
    $temp.val('https://www.pointandina.pe/producto').select();
    document.execCommand('copy');
    $temp.remove();
  });

  // Icon items
  const iconItems = $('.icon-item');

  $(document).on('mouseenter mousemove', (evt) => {
    const x = evt.clientX;
    const y = evt.clientY;
    iconItems.css('--x', `-${x / 50}px`);
    iconItems.css('--y', `-${y / 50}px`);
  });

  // Suscripcion
  const sendContact = $('.send-contact');

  if (sendContact.length) {
    sendContact.click((evt) => {
      evt.preventDefault();
      const target = evt.currentTarget;
      const parentSubscribe = target.closest('.contact-item');
      $(parentSubscribe).find('.contact-form').hide();
      $(parentSubscribe).find('.contact-thanks').fadeIn();
    });
  }

  // Tabs behaviour
  // const triggerTabList = document.querySelectorAll('.nav-tabs .nav-link');
  // triggerTabList.forEach((triggerEl) => {
  //   const tabTrigger = $(triggerEl).data('bsTarget');
  //   const tabPane = $(triggerEl).parent().next().find('.tab-pane');
  //   const navLink = $(triggerEl).parent().find('.nav-link');

  //   triggerEl.addEventListener('click', (event) => {
  //     event.preventDefault();
  //     navLink.removeClass('active');
  //     $(triggerEl).addClass('active');
  //     tabPane.removeClass('show').removeClass('active');
  //     $(tabTrigger).addClass('show').addClass('active');
  //   });
  // });

  // Activate popovers
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]:not(.figure)'));
  popoverTriggerList.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));

  // Activate Tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]:not(.js-region)'));
  tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
});
