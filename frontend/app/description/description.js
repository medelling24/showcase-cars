'use strict';

angular.module('myApp.description', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/description', {
    templateUrl: 'description/description.html',
    controller: 'DescriptionCtrl'
  });
}])

.controller('DescriptionCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  $http.get("http://localhost:3001/api/car?id="+$routeParams.id)
    .then(function(response) {
      $scope.car = response.data.data[0];
    });

}]);