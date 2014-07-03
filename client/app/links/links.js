angular.module('shortly.links', ['ngAnimate', 'fx.animations'])

.controller('LinksController', function ($scope, $timeout, Links) {

  $scope.getLinks = Links.getLinks;

  $scope.data = {links: []};

  $timeout(function(){
    $scope.getLinks()
      .then(function(links) {
        links.sort(function(a,b) {
          return b.visits - a.visits;
        });

        angular.forEach(links, function(url, idx) {
          $timeout(function(){
            $scope.data.links.push(url);
          }, 100 * idx);
        });
      })
      .catch(function(err) {
        console.error(err);
      });
  }, 1);

  // $scope.data = $scope.getLinks();
  console.log($scope.data);
});
