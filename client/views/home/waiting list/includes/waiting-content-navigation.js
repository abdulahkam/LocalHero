Template.WaitingContentNavigation.events({
	'click #request' : function(){
		FlowRouter.go('/waiting/request');
	},

	'click #give' : function(){
		FlowRouter.go('/waiting/give');
	}
});


