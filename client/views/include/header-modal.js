Template.HeaderModals.events({
	'click #home' : function(){
		console.log('hello');
		$('.header-modals').modal('hide');
		FlowRouter.go('/request');
		
	},
	'click #waiting' : function(){
		$('.header-modals').modal('hide');
		FlowRouter.go('/waiting/request');
		
	},
	'click #profile' : function(){
		$('.header-modals').modal('hide');
		FlowRouter.go('/profile');
		
	},
	'click #leaderboard' : function(){
		$('.header-modals').modal('hide');
		FlowRouter.go('/leaderboard');
		
	},

	'click #logout' : function(event){
		$('.header-modals').modal('hide');
		var con = confirm("Are you sure gonna logout?");
		
		if(con){
			Meteor.logout(function () {
				FlowRouter.go('/');
			});
			
			
		}

		
	},
})