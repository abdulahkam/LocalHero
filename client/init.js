Tracker.autorun(function () {

 	// console.log();
 	// sAlert.alert(Session.get(Meteor.userId()))
});

Template.layout.onCreated(function() {
	Request.find({createdBy:Meteor.userId()}).observe({
		added: function(document){
			console.log('asfdsssaaad');
			// Session.set(document.createdBy,"ini bro");
		},
		changedAt: function(newDocument, oldDocument, atIndex)
		{
			// changedAt()
			if(typeof newDocument.reply.apply != "undefined") {
				console.log("new : " + newDocument.reply.apply.length);
				console.log("old : " + oldDocument.reply.apply.length);
				if(newDocument.reply.apply.length > oldDocument.reply.apply.length) {
					console.log("dalam");
					idHero = _.difference(newDocument.reply.apply, oldDocument.reply.apply);
					
					name = Meteor.users.findOne({_id:idHero[0]}).profile.name;
					sAlert.success(name + " wants to help you");
				}
			}
			
			console.log("fiuuuuueeee");
			console.log(newDocument);
			// created = Request.find({_id:atIndex}).
		}
	});

});