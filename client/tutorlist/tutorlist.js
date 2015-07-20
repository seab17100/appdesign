Template.tutorlist.helpers({
	tutors: function(){return Profiles.find({},{sort:{createdAt:-1}});}
})

Template.tutorRow.events({
	"click button.delete": function(event){
		Profiles.remove(this._id);
	}
})