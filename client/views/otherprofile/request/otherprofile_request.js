Template.OtherProfileRequest.helpers({

	listRequests: function () {

		// console.log(Request.find({createdBy:FlowRouter.getParam("_id")},{sort:{createdAt:-1}}).fetch());
		return Request.find({createdBy:FlowRouter.getParam("_id")},{sort:{createdAt:-1}});
	},
	date: function(date){
		return moment(date).fromNow();
	}
})