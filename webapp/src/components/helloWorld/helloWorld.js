module.exports = function(app){
	app.component('helloWorld', {
		controller: HelloWorldController,
		template: require('./helloWorld.html')
	});
}

function HelloWorldController(){
	var ctrl = this;
	ctrl.message = 'Hello World!';
}