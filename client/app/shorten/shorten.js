angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function () {
    Links.addOne($scope.data)
    .then(function() {
      // console.log('Addone in controller!');
    });
  };

});
