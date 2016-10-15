angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getAll = function() {
    console.log('inside links', $scope.data);
    Links.getAll($scope.data)
    .then(function(links) {
      // console.log('Links in controller:', links);
      $scope.data.links = links;
    });
  };

  $scope.addOne = function() {
    Links.addOne($scope.data)
    .then(function() {
      // console.log('Addone in controller!');
    });
  };

  $scope.getAll();
  // $location.path()
});
