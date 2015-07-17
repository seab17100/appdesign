Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

Router.route("tutorlist");
Router.route('/', {name: 'homepage'});
Router.route('/TeacherProfilePage', {name: 'TeacherProfilePage'});
Router.route('/studentProfilePage', {name: 'studentProfilePage'});
Router.route('/createPage', {name: 'createPage'});
Router.route('/about', {name: 'about'});
	{name:'profile',
	data= function(){ 
		
		return Meteor.users.findOne({_id:this.params._id});
	};
};

Router.route('/profileEdit/:_id',
	{name:'profileEdit',
	data: function(){ return Meteor.users.findOne({_id:this.params._id})}
});
