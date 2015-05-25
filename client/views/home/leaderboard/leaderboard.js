Template.leaderboard.helpers({
	listHeroes : function()
	{
		return Meteor.users.find({},{sort:{exp:1}})
	},
	request: function() {
		
		return Request.find({createdBy:this._id,finish:true}).count();
	},

	give: function() {
		// console.log("haaaaa " + Meteor.userId())
		// console.log(Request.find({"reply.clear":{$in:[Meteor.userId()]},finished:true}).count());
		return Request.find({"reply.clear":{$in:[this._id]}}).count();
		
	},

	position: function  () {
		return "Position"
	},

	level: function()
	{
		return Math.round(Meteor.users.findOne(this._id).profile.exp/10)+1;
	}
});
