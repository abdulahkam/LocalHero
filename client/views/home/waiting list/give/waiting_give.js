Template.WaitingGive.helpers({

	listGives: function(){
		//give something inside find. //eg. circle 
		return Request.find({$or:[{"reply.apply":{$in:[Meteor.userId()]}},
							 {"reply.accept":{$in:[Meteor.userId()]}}],
							 finish:false},{sort:{createdAt:-1}});
		// console.log(Request.find({$or:{"reply.apply":{$in:[Meteor.userId()]},
		// 					 "reply.accept":{$in:[Meteor.userId()]}},
		// 					 finish:false},{sort:{createdAt:-1}})).fetch();
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
	status: function(reply)
	{
		// console.log(reply);
		if(typeof reply.accept == "undefined") {
			return "apply";

		}
		else
		{
			if(reply.accept.indexOf(Meteor.userId())!=-1)
			{
				return "accept";
			}
			else
			{
				return "apply";
			}
		}
		
	}

});
