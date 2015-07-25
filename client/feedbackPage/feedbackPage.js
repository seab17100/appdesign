Template.feedbackPage.events({
	  'submit #feedbackForm': function(event){ 
		  // read the author and quote text from the browser window
		  event.preventDefault();
		  console.log("submitting");
		 
		  var newAnswer = $("#newanswer").val();
			
		  $("newanswer").val("");	

		  var authorname = Meteor.user().emails[0].address;
		  var feedback = {authorname:authorname,feedback:newAnswer,createdAt:new Date()};	
		  Feedback.insert(feedback);	
		  Router.go("feedbackresponse")
	}
})

