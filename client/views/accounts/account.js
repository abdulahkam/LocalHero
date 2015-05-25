Template.account.events({
    'click .logout': function(event){
        event.preventDefault();
        // code goes here
        Meteor.logout();
    }
});