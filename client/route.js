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

FlowRouter.route('/newmember', {
  name: 'Test page',
  action() {
    BlazeLayout.render('AddMemberForm');
  }
});

FlowRouter.route('/newuser', {
  name: 'New User',
  action() {
    BlazeLayout.render('AddUserForm')
  }
});

FlowRouter.route('/sign-in', {
  name: 'User Login',
  action() {
    BlazeLayout.render('UserLogin')
  }
});

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');