Template.feedbackList.helpers({
	newfeedback: function (){
		console.log("Got 'em")
		return  Feedback.find({},{
			sort:{createdAt:-1}
		})
	}
});



