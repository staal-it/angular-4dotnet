angular.module('angularDemo', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/main/menu.html'
	})
  .when('/controller', {
    templateUrl: 'app/controller/controller.html'
  })
  .when('/directive', {
    templateUrl: 'app/directive/directive.html'
  })
  .when('/factory', {
    templateUrl: 'app/factory/factory.html'
  })
  .when('/watch', {
    templateUrl: 'app/watch/watch.html'
  })
  .when('/service', {
    templateUrl: 'app/service/service.html'
  })
  .when('/promise', {
    templateUrl: 'app/promise/promise.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})

.controller('MainController', function($scope){
	$scope.stuff = 'working!';
})
.controller('FirstController', function($scope){
	$scope.name = 'Staal';
});
