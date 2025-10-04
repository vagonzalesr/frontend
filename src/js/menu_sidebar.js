/* global $ */

import { openOverlay, closeOverlay } from './utils';

// Menu toggle and sidebar behaviour
const menuToggle = $('.menu-toggle');
const sidebar = $('.menu-sidebar');
const sidebarClose = $('.menu-sidebar-close');

menuToggle.click((evt) => {
  evt.preventDefault();
  sidebar.addClass('active');
  openOverlay();
});

sidebarClose.click((evt) => {
  evt.preventDefault();
  sidebar.removeClass('active');
  $('.submenu').removeClass('active');
  closeOverlay();
});

const menuLinks = $('.menu-sidebar-list a');
const menuBacks = $('.menu-sidebar-sublist-back');

menuLinks.click((evt) => {
  const target = evt.currentTarget;
  const next = $(target).next();

  if (next.hasClass('menu-sidebar-sublist')) {
    evt.preventDefault();
    next.addClass('active');
  }
});

menuBacks.click((evt) => {
  evt.preventDefault();
  const target = evt.currentTarget;
  const parentSubmenu = $(target).closest('.menu-sidebar-sublist');

  parentSubmenu.removeClass('active');
});
