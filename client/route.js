/**
 * Created by locvd on 2017/04/22.
 */
FlowRouter.route('/', {
  name: 'App.Home',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'home'
    })
  }
});