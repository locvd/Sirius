/**
 * Created by locvd on 2017/04/21.
 */
Template.navBar.onRendered(function () {
  $(".button-collapse").sideNav();
});

Template.navBar.events({
  'click #nav-mobile'(event, instance){
    let activeElement = jQuery('li.tab.active')[0];
    let clickedElement = event.target.parentElement;
    if (activeElement !== clickedElement) {
      clickedElement.setAttribute('class', 'tab active');
      activeElement.setAttribute('class', 'tab');
    }
  }
});