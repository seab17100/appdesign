Meteor.startup(function(){
	if (Profiles.find({}).count()==0){
		Profiles.insert(
			{firstName:"Tim", lastName:"Hickey", photo:"images/hickey-apr08.gif", 
			 bio:"I am a Professor of Computer Science at Brandeis University and instructor for the App Design Bootcamp."});
		Profiles.insert(
			{firstName:"Josh", lastName:"Mocle", photo:"images/joshua.jpg",
			bio:"I am the director of the Brandeis App Design program."}
		 );
 		Profiles.insert(
 			{firstName:"Caitlin", lastName:"Ishibashi", photo:"images/caitlin.jpg",
 			bio:"I am a potential student"}
 		 );
	}
});
