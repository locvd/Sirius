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

FlowRouter.route('/test', {
  name: 'Test page',
  action() {
    BlazeLayout.render('Test');
  }
});

FlowRouter.route('/adduser', {
  name: 'Test page',
  action() {
    BlazeLayout.render('AddMemberForm');
  }
});