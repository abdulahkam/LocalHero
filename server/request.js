	// Meteor.publish('theRequest', function()
	// {
	// 	var currentUserId = this.userId;
	// 	return Request.find();
	// 	//insert inside .find({}) something for a better match. lon,lat circle.
	// });
	Meteor.publish("requestData", function () {
	    return Request.find({});
	  
	});
	
	Meteor.methods({
		'insertRequest': function(requestinfo,exp,bounty,lat,lon,date)
		{
			var currentUserId = Meteor.userId();
			Request.insert({
				info: requestinfo,
				exp: exp,
				lat: lat,
				lon: lon,
				bounty: bounty,
				finish:false,
				createdAt: date,
				createdBy: currentUserId
			});
		},

		'removeRequest': function(selectedRequest)
		{
			Request.remove(selectedRequest);

		},

		'applyToHelpRequest' : function(requestId) {
			Request.update(
				{_id:requestId},
				{$addToSet: {"reply.apply":Meteor.userId()}},
				{upsert:true});
		},

		'cancelToHelpRequest' : function (requestId) {
			// body...
			Request.update(
				{_id:requestId},
				{$pull: {"reply.apply":Meteor.userId()}},
				{upsert:true});
		},

		'skipToHelpRequest' : function (requestId) {
			// body...
			Request.update(
				{_id:requestId},
				{$addToSet: {"reply.skip":Meteor.userId()}},
				{upsert:true});
		},

		'acceptHeroHelp' : function(requestId,heroId) {
			Request.update(
				{_id:requestId},
				{$addToSet: {"reply.accept":heroId}},
				{upsert:true});
		},

		'refuseHeroHelp' : function (requestId,heroId) {
			// body...
			Request.update(
				{_id:requestId},
				{$addToSet: {"reply.refuse":heroId},$pull: {"reply.apply":heroId}},
				{upsert:true});
		},

		'clearRequest' : function(requestId,heroId,exp) {
			Request.update(
				{_id:requestId},
				{$addToSet: {"reply.clear":heroId},$pull: {"reply.apply":heroId}, $set:{finish:true}},
				{upsert:true});

			Meteor.users.update({_id:heroId},{$inc:{"profile.exp":exp}});
		},
		'failedRequest' : function(requestId,heroId) {
			Request.update(
				{_id:requestId},
				{$addToSet: {"reply.failed":heroId},$pull: {"reply.apply":heroId}},
				{upsert:true});

		},

		// 'selectListRequests' : function()
		// {
		// 	return Request.find({"reply.skip":{$nin:[Meteor.userId()]},finish:false},{sort:{createdAt:-1}});
		// },	
		// 'checkYourRequest' : function(_id)
		// {
		// 	return Request.find({_id:_id,"reply.apply" : {$in : [Meteor.userId()]}}).count();
		// }	
	});