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

  $scope.errorMessage = function() {
    var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    isValidUrl = function (url) {
      return url.match(rValidUrl);
    };
    if ($scope.newLink === undefined) {
      return 'Enter a URL';
    }
    if (!isValidUrl($scope.newLink)) {
      return 'Not a valid url';
    }
  };

});
