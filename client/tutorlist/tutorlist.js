Template.tutorlist.helpers({
	tutors: function(){
		var online = Presences.find().fetch();
		var onlineProfiles =
		  _.map(online,function(x){return Profiles.findOne({user:x.userId})})

		return _.filter(onlineProfiles,function(p){return p!=undefined});}
})

Template.tutorRow.events({
	"click button.delete": function(event){
		Profiles.remove(this._id);
	}
})

Template.quoteLine.helpers({

  isOwner: function(){
  	    return (this.user == Meteor.userId()) || (Meteor.userId()=="79ECyD4M2ek4Ffwtj");
    
  }
})