Template.server.helpers({
	ipaddresses: function(){return Servers.find()}
})

Template.server.events({
	"submit #serverInfo": function(event){
		event.preventDefault();
		console.log("handling event!");
		var name = event.target.name.value;
		var ip = event.target.ip.value;
		console.dir([name,ip]);
		
		var z = Servers.insert(
			{name:name, ip:ip}
		);
		console.log("inserted "+z);
	},
	"click #resetIP": function(event){
		Meteor.call("removeIPs");
	},
	"click .glyphicon-remove": function(event){
		Servers.remove(this._id);
	}
})