angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.getLinks = Links.getLinks;

  $scope.data = {};

  $scope.getLinks() // todo: figure out why this isn't the same as $scope.data = Links.getLinks();
    .then(function(links) {
      $scope.data.links = links;
    })
    .catch(function(err) {
      console.error(err);
    });

  // $scope.data = $scope.getLinks();
  console.log($scope.data);
});
