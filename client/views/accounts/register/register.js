Template.register.events({
    'submit form': function(event, template){
        event.preventDefault();
        var emailVar = template.find('#register-email').value;
    	var passwordVar = template.find('#register-password').value;
        var nameVar = template.find('#register-name').value;
        ListProfpic = ['kid.jpg','james.jpg','man.jpg','ahkam.jpg'] 
        var randPic = Math.floor(Math.random() * (3));
        Accounts.createUser({
		    // options go here
		    email: emailVar,
    		password: passwordVar,
            profile:{
                name: nameVar,
                photo: ListProfpic[randPic],
                exp:0
            }
            // name: nameVar
		},function(err)
        {
            if(err)
            {
                console.log('gagal')
            }
            else
            {
                Meteor.loginWithPassword(emailVar, passwordVar, function(){
                    // console.log('masuk')
                    FlowRouter.go('/request');
                });
                // console.log(Meteor.users)
                // FlowRouter.go('/request');
            }

            
        });
    }
});
