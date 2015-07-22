 Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

Router.route("tutorlist");
Router.route("subjects");
Router.route("aboutThis");
Router.route('/', {name: 'welcome'});
Router.route('/homepage', {name: 'homepage'});
Router.route('/TeacherProfilePage', {name: 'TeacherProfilePage'});
Router.route('/studentProfilePage', {name: 'studentProfilePage'});
Router.route('/createPage', {name: 'createPage'});
Router.route('/feedbackPage', {name: 'feedbackPage'});
Router.route('/feedbackList',{name: 'feedbackList'});
	{name:'profile',
	data= function(){ 
		
		return Meteor.users.findOne({_id:this.params._id});
	};
};

Router.route('/profileEdit/:_id',
	{name:'profileEdit',
	data: function(){ return Meteor.users.findOne({_id:this.params._id})}
});
