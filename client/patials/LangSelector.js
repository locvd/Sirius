/**
 * Created by locvd on 2017/04/21.
 */
Template.langSelector.onRendered(function () {
  this.hideShow = "";
  let lang = TAPi18n.getLanguage();
  if (!lang) {
    lang = 'ja'
  }
  const li = jQuery("li[data-value='"+lang+"']")[0];
  jQuery('#tx-live-lang-toggle').html(li.innerHTML);
});
Template.langSelector.events({
  'click #tx-live-lang-container'(event, instance){
    if (instance.hideShow === "") {
      instance.hideShow = "txlive-langselector-list-opened";
    } else {
      instance.hideShow = "";
    }
    jQuery("#tx-live-lang-picker").attr('class', 'txlive-langselector-list notranslate ' + instance.hideShow);
  },
  'click #tx-live-lang-container ul li'(event, instance){
    jQuery('#tx-live-lang-toggle').html(event.toElement.innerHTML);
    TAPi18n.setLanguage(event.toElement.getAttribute('data-value'));
  }
});