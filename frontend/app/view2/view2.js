'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	
  $http.get("http://localhost:3001/api/cars/compare?id1="+$routeParams.id+"&id2="+$routeParams.id1+"&id3="+$routeParams.id2)
    .then(function(response) {
      $scope.cars = response.data.data;
    });

}]);