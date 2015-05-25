Template.request.helpers({

	listRequests: function(){
		//give something inside find. //eg. circle 
		return Request.find({"reply.skip":{$nin:[Meteor.userId()]},finish:false},{sort:{createdAt:-1}});
	},

	// skipRequest: function() {
	// 	return R
	// },
	nameRequester : function(idRequester){
		var name = Meteor.users.findOne(idRequester).profile.name;
		return name;
	},
	photo : function (idRequester) {
		var photo = Meteor.users.findOne(idRequester).profile.photo;
		return photo;
	},
	date: function(date){
		return moment(date).fromNow();
	},
	helpBulb: function()
	{


		if( Request.find({_id:this._id,"reply.apply" : {$in : [Meteor.userId()]}}).count() > 0) {
			
			return "helpBulb";
		}
			
		
		else
		{
			return "";
		}
	},
	Iam: function(createdBy)
	{
		if(createdBy == Meteor.userId())
		{
			
			return false;
		}
		else
		{
			return true;
		}
	},
	wantToHelp: function(apply)
	{
		// console.log(apply);
		if(typeof apply === "undefined" )
			return 0
		else
			return apply.length;
	}

});

// FyRyfrgAWnzB4oHXC


// Template.request.events({

// })

Template.request.onRendered(function () {
	// body...
	$('.additional').hide();
	
})
Template.request.onCreated(function () {
  $('button').attr("aria-expanded","false");
});


Template.request.events({

	'click #help' : function(event)
	{
		// cek = this.getElementsByClassName('helpBulb');
		// a = event.target.getElementsByClassName('helpBulb');
		// console.log(a)

		// console.log(event.currentTarget.classList.contains("helpBulb"));
		if(event.currentTarget.classList.contains("helpBulb"))
		{
			confirmation = confirm("Do you want to cancel your help?");
			if(confirmation)
			{
				Meteor.call("cancelToHelpRequest",this._id);
				sAlert.info("Helping people is better!");
			}


			
		}

		else
		{
			confirmation = confirm("Do you really want to give help?");
			if(confirmation)
			{
				Meteor.call("applyToHelpRequest",this._id);
				sAlert.success("Please wait for reply");
			}
		}
		
	},

	'click #skip' : function(event)
	{

		confirmation = confirm("Are you sure you want to skip?");
		if(confirmation)
		{
			Meteor.call("cancelToHelpRequest",this._id);
			Meteor.call("skipToHelpRequest",this._id);
			sAlert.warning("Helping people is better!");
		}
		Session.set("request",'lol');

	}
})