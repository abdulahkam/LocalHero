Template.ProfileGive.helpers({

	listGives: function(){
		//give something inside find. //eg. circle 
		return Request.find({"reply.clear":{$in:[Meteor.userId()]},finish:true},{sort:{createdAt:-1}});

	},
	nameRequester : function(idRequester){
		var name = Meteor.users.findOne(idRequester).profile.name;
		return name;
	},
	photo : function (idRequester) {
		// console.log(idRequester);

		// 3zfux6J58o3X8hMhm
		var photo = Meteor.users.findOne(idRequester).profile.photo;
		return photo;
	},
	date: function(date){
		return moment(date).fromNow();
	},

})