'use strict';
angular.module('myApp.view1', ['ngOrderObjectBy']);

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

	$scope.selected = {}; //selected ids
	
	
	$http.get("http://localhost:3001/api/cars")
	.then(function(response) {
	  $scope.cars = response.data.data;
	});

    
    $scope.save = function(view){
    	var ids = Object.keys($scope.selected);
    	if(ids.length < 2 ){
    		alert("Please select at least 2 cars");
    	}
    	else if (ids.length > 3){
    		alert("You can compare only 3 cars");
    	}
    	else{
	    	$location.path(view).search({id: ids[0], id1: ids[1], id2: ids[2] });;
		}
  	}


}]);

