angular.module('shortly.services', [])

.factory('Links', function ($http) {
  // issue an http get request for links data
  var getLinks = function() {
    return $http({
      method: 'GET',
      url: '/api/links',
    }).then(function(res) {
      return res.data;
    }).catch(function(err) {
      console.error(err);
    });
  };

  var shortenLink = function(longLink) {
    return $http({
      method: 'POST',
      url: '/api/links',
      data: {url: longLink}
    }).then(function(res) {
      return res.data;
    }).catch(function(err) {
      console.error(err);
    });
  };
  // return object with that data
  return {
    getLinks: getLinks,
    shortenLink: shortenLink
  };
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return $http({
      method: 'GET',
      url: '/api/users/signedin'
    });
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
