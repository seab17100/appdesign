  Template.TeacherProfilePage.events({
	  'submit #newquote': function(event){ 
		  // read the author and quote text from the browser window
		  var newQuoteText = $("#newquotetext").val();	
		  var newAuthor = $("#newauthor").val();
		  var newSubject  = $("#newsubject").val();
		  var newAnswer = $("#newanswer").val();
		  var myEmail = Meteor.user().emails[0].adress;
		  // and erase the fields so the user can add another quote later
		  $("#newauthor").val("");						
		  $("#newquotetext").val("");	
		  $("#newsubject").val("");					
		  $("newanswer").val("");
		  // create a new quote object and upload it to the server!
		  var quote = 
		  	{quote:newQuoteText, 
		  		author:newAuthor,
		  		likes:1, 
		  		likers:[],
		  		subject:newSubject,
		  		createdAt: new Date(),
		  		createdBy: myEmail,
		  		user:Meteor.userId()};  // create the JSON object representing the quote
		  if (newQuoteText.trim()!= "") 
		  	Quotes.insert(quote); 
		  else{
		  	console.log(Meteor.user().emails[0].adress+"is fooling around!");
		  }
	  }
  	
  })