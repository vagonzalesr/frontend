/* eslint-disable no-mixed-operators */
/* global $ */

// Header

window.addEventListener('load', () => {
  let didScroll;
  let lastScrollTop = 0;
  const delta = 5;
  const header = $('.header');
  const navbarHeight = header.outerHeight();

  const hasScrolled = () => {
    const st = $(window).scrollTop();

    if (st <= 0) {
      header.removeClass('nav-up').removeClass('nav-down');
      return;
    }

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      header.removeClass('nav-up').addClass('nav-down');
    } else if (st + $(window).height() < $(document).height()) {
      header.removeClass('nav-down').addClass('nav-up');
    }

    lastScrollTop = st;
  };

  $(window).scroll(() => {
    didScroll = true;
  });

  setInterval(() => {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  $('a[href*="#"]').click((evt) => {
    const self = evt.target;
    console.log(self);
    if (window.location.pathname.replace(/^\//, '') === self.pathname.replace(/^\//, '')
      && window.location.hostname === self.hostname) {
      let $target = $(self.hash);
      $target = $target.length && $target || $(`[name="${self.hash.slice(1)}]"`);

      if ($target.length) {
        const targetOffset = $target.offset().top;
        $('html,body').animate({ scrollTop: targetOffset }, 100);
        $('.menu-sidebar-close').click();
        $('a[href*="#"]').parent().removeClass('active');
        $(self).parent().addClass('active');
        return false;
      }
    }
    return true;
  });

  const section = $('.section-hash');
  const sections = {};
  let i = 0;

  section.each((e, item) => {
    sections[item.id] = $(item).offset().top;
  });

  $(window).scroll(() => {
    // const st = $(window).scrollTop();
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // eslint-disable-next-line no-restricted-syntax
    for (i in sections) {
      if (sections[i] <= scrollPosition) {
        $('.menu .nav-link').removeClass('active');
        $(`a[href*=${i}]`).addClass('active');
      }
    }
  });
});
