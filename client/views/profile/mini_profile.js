Template.MiniProfile.helpers({
	request: function() {
		
		return Request.find({createdBy:Meteor.userId()}).count();
	},

	give: function() {
		// console.log("haaaaa " + Meteor.userId())
		// console.log(Request.find({"reply.clear":{$in:[Meteor.userId()]},finished:true}).count());
		return Request.find({"reply.clear":{$in:[Meteor.userId()]}}).count();
		
	},

	position: function  () {
		return "Position"
	},

	name: function() {
		return Meteor.users.findOne({_id:Meteor.userId()}).profile.name;

		// console.log();
	},

	level: function()
	{
		return Math.round(Meteor.users.findOne(Meteor.userId()).profile.exp/10)+1;
	},

	photo: function() {
		return Meteor.users.findOne(Meteor.userId()).profile.photo;
		// return photo.profile.name;
	}
});
