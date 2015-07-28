Template.feedbackList.helpers({
	newfeedback: function (){
		console.log("Got 'em")
		return  Feedback.find({},{
			sort:{createdAt:-1}
		})
		
		/*'click button.delete': function(event){
		  Quotes.remove(this._id);
		},*/
	}

});



