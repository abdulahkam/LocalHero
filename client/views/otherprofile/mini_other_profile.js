Template.MiniOtherProfile.helpers({
	request: function() {
		
		return Request.find({createdBy:FlowRouter.getParam("_id")}).count();
	},

	give: function() {

		return Request.find({$in:{"reply.clear":FlowRouter.getParam("_id")},finished:true}).count();
		
	},

	position: function  () {
		return "Position"
	},

	name: function() {
		return Meteor.users.findOne({_id:FlowRouter.getParam("_id")}).profile.name;

		// console.log();
	},

	level: function()
	{
		return Math.round(Meteor.users.findOne(FlowRouter.getParam("_id")).profile.exp/10)+1;
	},

	photo: function() {
		return Meteor.users.findOne(FlowRouter.getParam("_id")).profile.photo;
		// return photo.profile.name;
	}
});
