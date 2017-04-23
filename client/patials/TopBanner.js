/**
 * Created by locvd on 2017/04/22.
 */
Template.topBanner.onRendered(function () {
  jQuery('.owl-carousel').owlCarousel({
    items: 1,
    autoplay: true,
    loop: true
  });
});
