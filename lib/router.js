Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

Router.route('/', {name: 'welcome'});
Router.route('/schedule', {name: 'schedule'});
Router.route('/map', {name: 'map'});
Router.route('/people',{name:'people'});
Router.route('/profile/:_id',
	{name:'profile',
	data: function(){ return Profiles.findOne({_id:this.params._id})}
});
Router.route('/profileEdit/:_id',
	{name:'profileEdit',
	data: function(){ return Profiles.findOne({_id:this.params._id})}
});
