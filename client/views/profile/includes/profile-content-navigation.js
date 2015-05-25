Template.ProfileContentNavigation.events({
	'click #request' : function(){
		FlowRouter.go('/profile/request');
	},

	'click #give' : function(){
		FlowRouter.go('/profile/give');
	}
});
