Template.login.events({
    'submit form': function(event, template){
        event.preventDefault();
        var emailVar = template.find('#login-email').value;
    	var passwordVar = template.find('#login-password').value;
        console.log("Form submitted.");
        Meteor.loginWithPassword(emailVar, passwordVar, function(err)
        {
            if(err)
            {
                // template.find('#loginError').html(err.reason);
                // Session.set("loginError",err.reason);
                sAlert.error(err.reason);
            }
            else
            {
                FlowRouter.go('/request');
                
            }

            // return;
            
        });
    }
});

// Template.login.helpers({
//     'loginError': function(){
//         return Session.get("loginError");
//     }
// })



// Accounts.onLoginFailure(function(){
//     console.log('ouch');
// })
