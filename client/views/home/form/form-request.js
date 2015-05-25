Template.FormRequest.events({

	'click textarea, focus .input-region' : function (event) {
		// $(.style.backgroundRepeat = "no-repeat";
		jQuery(event.currentTarget).css('background-repeat','no-repeat');
		$('.additional').show();
		
	},

	'mouseleave .input-region' : function(event) {
		// var mytext = event.currentTarget;
		if($('textarea').val() == "")
		{
			$("textarea").css('background-repeat','inherit');
			$('.additional').hide();
			// mytext.style.backgroundRepeat = "inherit";
		}
		
	},
	'click #submit' : function(e,template) {
		e.preventDefault();
		var info = template.find('#requestHelp').value;
		var exp = template.find('#exp').value;
		var bounty = template.find('#bounty').value;
		var lat = Geolocation.latLng.lat;
		var lon = Geolocation.latLng.lon;
		var date =  new Date();

		Meteor.call('insertRequest',info,exp,bounty,lat,lon,date);
		sAlert.success("Thanks for the request");
		$("textarea").css('background-repeat','inherit');
		$('.additional').hide();
		$('textarea').val("")
		
	}
})