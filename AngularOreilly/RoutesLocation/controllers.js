var aMailServices = angular.module('AMail',[]);

function emailRouteConfig($routeProvider) {
	$routeProvider.
	when('/'), {
		controller: ListController, 
		templateUrl: 'list.html'
	}).
	when('/view/:id'), {
		controller: DetailController,
		templateUrl: 'detail.html'
	}.
	otherwise({
		redirectTo: '/'
	});
}

aMailServices.config(emailRouteConfig);

messages=[
	{id:0,sender:'mra@a.com',subject:'Nihao1',date:'01:01:1066',message:'1blah blah blah'},
	{id:1,sender:'mrb@a.com',subject:'Nihao2',date:'01:01:1066',message:'2blah blah blah'},
	{id:2,sender:'mrc@a.com',subject:'Nihao3',date:'01:01:1066',message:'3blah blah blah'},
	{id:3,sender:'mrd@a.com',subject:'Nihao4',date:'01:01:1066',message:'4blah blah blah'}
]

function ListController($scope) {
	$scope.messages = messages;
}

function DetailController($scope, $routeParams) {
	$scope.message = messages[$routeParams.id];
}