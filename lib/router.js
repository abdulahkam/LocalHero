FlowRouter.route('/',
{

	action: function () {
		if (Meteor.user()) {
			FlowRouter.go('/request');
		}

		else {
			FlowLayout.render('layout',{main:"account", account:"login", navbar:""});
		}
		
		
	}
});

FlowRouter.route('/register',
{
	
	action: function () {
		FlowLayout.render('layout',{main:"account", account:"register", navbar:""});
		
	}
});

FlowRouter.route('/leaderboard',
{
	subscriptions: function() {
        this.register('userData', Meteor.subscribe('userData'));
        this.register('requestData', Meteor.subscribe('requestData'));
    },
	action: function () {
		FlowLayout.render('layout',{main:"leaderboard", navbar:""});
		
	}
});

FlowRouter.route('/request',
{

	middlewares: [requiredLogin],
	action: function () {
		FlowLayout.render('layout',{main:"request", navbar:""});
		
	},
	subscriptions: function() {
        this.register('userData', Meteor.subscribe('userData'));
        this.register('requestData', Meteor.subscribe('requestData'));
    },
});

var waitingRoutes = FlowRouter.group({
  prefix: '/waiting',
  middlewares: [requiredLogin],
  subscriptions: function() {
        this.register('userData', Meteor.subscribe('userData'));
        this.register('requestData', Meteor.subscribe('requestData'));
    },
});

waitingRoutes.route('/request',
{

	middlewares: [requiredLogin],
	action: function () {
		FlowLayout.render('layout',{main:"WaitingRequest", bor_request:"border-bottom-white", bor_give:"", navbar:"navbar-zero-bottom-margin"})
	}
});


waitingRoutes.route('/give',
{

	middlewares: [requiredLogin],
	action: function () {
		FlowLayout.render('layout',{main:"WaitingGive",bor_request:"", bor_give:"border-bottom-white", navbar:"navbar-zero-bottom-margin"})
	}
});



var profileRoutes = FlowRouter.group({
  prefix: '/profile',
  middlewares: [requiredLogin],
  subscriptions: function() {
        this.register('userData', Meteor.subscribe('userData'));
        this.register('requestData', Meteor.subscribe('requestData'));
    },

});


profileRoutes.route('/',{

	action: function () {
		// body...
		FlowLayout.render('layout',{main:"ProfileRequest", navbar:"navbar-zero-bottom-margin"})
	},
	name: 'profile'
})

profileRoutes.route('/request',{

	action: function () {
		// body...
		FlowLayout.render('layout',{main:"ProfileRequest",bor_request:"border-bottom-white", bor_give:"", navbar:"navbar-zero-bottom-margin"})
	},
	name: 'profile'
})
profileRoutes.route('/give',{

	action: function () {
		// body...
		FlowLayout.render('layout',{main:"ProfileGive",bor_request:"", bor_give:"border-bottom-white", navbar:"navbar-zero-bottom-margin"})
	},
	name: 'profile'
})
// //////////////////////////////////////////////////////////
var otherProfileRoutes = FlowRouter.group({
  prefix: '/otherprofile',
  middlewares: [requiredLogin],
  subscriptions: function() {
        this.register('userData', Meteor.subscribe('userData'));
        this.register('requestData', Meteor.subscribe('requestData'));
    },
    //perbaiki

});


otherProfileRoutes.route('/give/:_id',{

	action: function (param) {
		// body...
		FlowLayout.render('layout',{main:"OtherProfileGive", navbar:"navbar-zero-bottom-margin",bor_request:"", bor_give:"border-bottom-white"})
	}
})

otherProfileRoutes.route('/request/:_id',{

	action: function (param) {
		// body...
		FlowLayout.render('layout',{main:"OtherProfileRequest",bor_request:"border-bottom-white", bor_give:"", navbar:"navbar-zero-bottom-margin"})
	},
	subscriptions: function(param) {
		
		this.register('OtherUser', Meteor.subscribe("userData",param._id));
	}
})


function requiredLogin(path, next) {
  // this works only because the use of Fast Render
  var redirectPath = (!Meteor.userId())? "/" : null;
  next(redirectPath);
  
}





