angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function () {
    console.log($scope.newLink);
    // $scope.link = $scope.newLink;
    Links.addOne({url: $scope.newLink})
    .then(function() {
      console.log('Addone in controller!');
    });
  };

});
