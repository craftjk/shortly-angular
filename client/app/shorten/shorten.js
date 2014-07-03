angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = '';
  $scope.loading = false;

  $scope.addLink = function() {
    $scope.loading = true;
    // insert shortening Link gif
    Links.shortenLink($scope.link)
      .then(function() {
        $scope.loading = false;
      }).catch(function(err) {
        console.error(err);
      });
  };

  // $location + hashed url
});
