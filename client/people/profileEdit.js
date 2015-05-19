Template.profileEdit.helpers({

})

Template.profileEdit.events({
	"submit #profile-edit-form": function(event){
		event.preventDefault();
		var biotext = event.target.bio.value;
		Profiles.update(this._id,{$set:{bio:biotext}});
		console.log(event.target);
		console.log("bio="+bio);
		console.log(this);
		console.log("_id = "+this._id);
		Router.go('/profile/'+this._id);
		
	}
})