/**
 * Created by locvd on 2017/04/21.
 */

import LangConfig from "../../lib/configs/lang";

Template.langSelector.onCreated(function () {
  this.show = new ReactiveVar(false);
  this.currentLang = new ReactiveVar({});
});

Template.langSelector.onRendered(function () {
  let lang = TAPi18n.getLanguage();
  this.currentLang.set(LangConfig[lang]);
});

Template.langSelector.helpers({
  show: function () {
    return Template.instance().show.get();
  },
  currentLang: function () {
    return Template.instance().currentLang.get();
  }
});

Template.langSelector.events({
  'click #tx-live-lang-container'(event, instance){
    if (instance.show.get() === false) {
      instance.show.set(true)
    } else {
      instance.show.set(false);
    }
  },
  'click #tx-live-lang-container ul li'(event, instance){
    let lang = event.toElement.getAttribute('data-value');
    instance.currentLang.set(LangConfig[lang]);
    TAPi18n.setLanguage(lang);
    T9n.setLanguage(lang);
  }
});