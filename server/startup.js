Meteor.startup(function(){
	if (Profiles.find({}).count()==0){
		Profiles.insert(
			{firstName:"Tim", lastName:"Hickey", photo:"http://www.cs.brandeis.edu//~tim/hickey-apr08.gif", 
			 bio:"I am a Professor of Computer Science at Brandeis University and instructor for the App Design Bootcamp."});
		Profiles.insert(
			{firstName:"Josh", lastName:"Mocle", photo:"http://www.brandeis.edu/highschool/about/images/joshua.jpg",
			bio:"I am the director of the Brandeis App Design program."}
		 );
	}
});
