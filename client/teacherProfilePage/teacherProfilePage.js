  Template.TeacherProfilePage.events({
	  'submit #newquote': function(event){ 
		  // read the author and quote text from the browser window
		  var newQuoteText = $("#newquotetext").val();	
		  var newAuthor = $("#newauthor").val();
		  var newEmail = $("#newemail").val();
		  var newSubject  = $("#newsubject").val();
		  var newAnswer = $("#newanswer").val();
		  var myEmail = Meteor.user().emails[0].address;
		  // and erase the fields so the user can add another quote later
		  $("#newauthor").val("");	
		  $("#newemail").val("");					
		  $("#newquotetext").val("");	
		  $("#newsubject").val("");					
		  $("newanswer").val("");
		  // create a new quote object and upload it to the server!
		  var profile = 
		  	{desc:newQuoteText, 
		  		name:newAuthor,
				role:"tutor",
				email:newEmail,
		  		subject:newSubject,
				rate:newAnswer,
		  		createdAt: new Date(),
		  		createdBy: myEmail,
		  		user:Meteor.userId()};  // create the JSON object representing the quote
		  if (newQuoteText.trim()!= "") 
		  	Profiles.insert(profile); 
		  else{
		  	console.log(Meteor.user().emails[0].adress+"is fooling around!");
		  }
	  }
  	
  })