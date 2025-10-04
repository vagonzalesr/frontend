// Owl Carousel behaviour
/* global $ */

window.addEventListener('load', () => {
  $('.carousel-big-banners').owlCarousel({
    smartSpeed: 1000,
    loop: true,
    items: 1,
    dots: true,
    nav: false,
    lazyLoad: true,
    animateOut: 'fadeOut',
    autoHeight: true,
    autoplay: true,
  });

  const sync1 = $('#sync1');
  const sync2 = $('#sync2');

  const syncPosition = (el) => {
    // if you set loop to false, you have to restore this next line
    // const current = el.item.index;

    // if you disable loop you have to comment this block
    const count = el.item.count - 1;
    let current = Math.round(el.item.index - (el.item.count / 2) - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    // end block

    sync2.find('.image-thumbnail').removeClass('current');
    console.log(sync2.find('.image-thumbnail').parent().eq(current));
    sync2.find('.image-thumbnail')
      .parent().eq(current).find('.image-thumbnail')
      .addClass('current');
  };

  $('.carousel-images').owlCarousel({
    smartSpeed: 1000,
    nav: true,
    navText: [
      '<span></span>',
      '<span></span>',
    ],
    items: 1,
    dots: false,
    loop: true,
    autoplay: true,
    center: true,
    responsive: {
      0: {
        dots: false,
        nav: true,
      },
      991: {
        dots: false,
        nav: true,
      },
    },
  }).on('changed.owl.carousel', syncPosition);

  sync2.on('click', '.image-thumbnail', (e) => {
    e.preventDefault();
    $(e.currentTarget).addClass('current');
    const number = $(e.currentTarget).parent().index();
    sync1.data('owl.carousel').to(number, 300, true);
  });

  $('.carousel-images-modal').owlCarousel({
    smartSpeed: 1000,
    nav: true,
    navText: [
      '<span></span>',
      '<span></span>',
    ],
    items: 1,
    dots: false,
    loop: true,
    autoplay: true,
    center: true,
    responsive: {
      0: {
        dots: false,
        nav: true,
      },
      991: {
        dots: false,
        nav: true,
      },
    },
  });

  $('.carousel-projects').owlCarousel({
    smartSpeed: 1000,
    nav: false,
    dots: false,
    margin: 20,
    responsive: {
      0: {
        items: 1,
        stagePadding: 50,
        autoWidth: true,
        center: true,
        margin: 10,
      },
      991: {
        items: 4,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
      },
    },
  });
});
