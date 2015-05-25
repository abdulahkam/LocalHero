Template.OtherProfileContentNavigation.events({
	'click #request' : function(){
		FlowRouter.go('/otherprofile/request/'+FlowRouter.getParam("_id"));
	},

	'click #give' : function(){
		FlowRouter.go('/otherprofile/give/'+FlowRouter.getParam("_id"));
	}
});
