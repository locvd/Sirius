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

/*---------------------------------------------------------------------*/
FlowRouter.route('/about', {
  name: 'App.About',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'serviceintro'
    })
  }
});

FlowRouter.route('/about-company', {
  name: 'App.About.Company',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'aboutCompany'
    })
  }
});

FlowRouter.route('/about-staff', {
  name: 'App.About.Staff',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'aboutStaff'
    })
  }
});

FlowRouter.route('/about-school', {
  name: 'App.About.School',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'aboutSchool'
    })
  }
});

FlowRouter.route('/system-interview', {
  name: 'App.System.Interview',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'InterviewTour'
    })
  }
});

FlowRouter.route('/system-weddingtour', {
  name: 'App.System.WeddingTour',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'WeddingTour'
    })
  }
});

FlowRouter.route('/memberlist', {
  name: 'App.MemberList',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'memberList'
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

FlowRouter.route('/upload', {
  name: 'File Upload',
  action(){
   BlazeLayout.render('SampleUpload')
  }
});

FlowRouter.route('/system-flow', {
  name: 'Time Line',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'TimeLine'
    });
  }
});

FlowRouter.route('/pricing', {
  name: 'Pricing',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'Pricing'
    });
  }
});

AccountsTemplates.configureRoute('signIn');
// AccountsTemplates.configureRoute('signUp');