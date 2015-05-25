Meteor.startup(function () {

    sAlert.config({
        effect: 'flip',
        position: 'top',
        timeout: 3000,
        html: false,
        onRouteClose: true
    });

});

Template.layout.helpers({
	'tracker' : function()
	{

		// request = Request.find({createdBy:Meteor.userId(),finish:false});
		// // ;
		// Session.set("lol",request.count());

		// return request.count();


	}
});


