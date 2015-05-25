Template.WaitingRequestForces.helpers({

	listForces: function(requestId){
		//give something inside find. //eg. circle 
		// template.data
		request = Request.findOne({_id:requestId});
		
		// console.log(Meteor.users.find({_id:{$in:request.reply.apply}}).fetch())

		// if(typeof apply === "undefined" )
		// 	return 0
		// else
		// 	return apply.length;
		// console.log(request);

		if(typeof request.reply === "undefined")
		{
			return "";
		}
		else
		{
			if(typeof request.reply.apply === "undefined")
				return "";
			else
				return Meteor.users.find({_id:{$in:request.reply.apply}});
		}
			
	},

	shouldAcceptOrRefuse : function(requestReply)
	{
		// console.log(requestReply);
		if(typeof requestReply.accept === "undefined") {
			return true;

		}

		else
		{

			if(requestReply.accept.indexOf(this._id)!=-1) //if there is the id in array
			{

				return false;
			}

			else
			{
				return true;
			}
		}
		
	},

	level : function(exp)
	{
		return Math.round(exp/10);
	}


});


Template.WaitingRequestForces.events({
	'click .accept' : function(event,template)
	{
		// console.log(template.data.requestId+"--"+this._id);
		// var requestId = ;
		Meteor.call("acceptHeroHelp",template.data.requestId,this._id);
		sAlert.success("We'll let him know now");
	},

	'click .refuse' : function(event,template)
	{
		Meteor.call("refuseHeroHelp",template.data.requestId,this._id);
		sAlert.warning("oh.. come on!");
	},
	'click .clear' : function(event,template)
	{
		// console.log(template.data.requestId+"--"+template.data.requestExp+"--"+this._id);
		Meteor.call("clearRequest",template.data.requestId,this._id,Number(template.data.requestExp));
		sAlert.success("Great hero, isn't he?");
	},
	'click .failed' : function(event,template)
	{
		Meteor.call("failedRequest",template.data.requestId,this._id);
		sAlert.danger("uh! too bad!");
	}
})
