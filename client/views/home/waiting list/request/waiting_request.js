Template.WaitingRequest.helpers({
	give: function() {
		// position = Geolocation.currentLocation();
		// Session.set('position',position.coords.latitude);
		// return "aaaaaaa";
		// Se
		return "4 Helps";
	},

	people: function(){

		return "3 People"
	},

	listRequests: function(){
		//give something inside find. //eg. circle 

		return Request.find({createdBy:Meteor.userId(),finish:false},{sort:{createdAt:-1}});

	},
	date: function(date){
		return moment(date).fromNow();

	}

});
