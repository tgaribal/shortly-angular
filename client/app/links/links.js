angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.getAll = function() {
    Links.getAll($scope.data)
    .then(function() {
      console.log('Links in controller:', Links);
    });
    // return $scope.data = Links;
  };

  $scope.addOne = function() {
    Links.addOne($scope.data)
    .then(function() {
      console.log('Addone in controller!');
    });
  };
});
