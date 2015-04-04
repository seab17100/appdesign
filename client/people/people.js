Template.people.helpers({
	profiles: function(){ return Profiles.find({});}
})

Template.people.events({
	"click .profile-photo": function(event){
		console.log(event.target);
		console.log(this);
		
	}
})