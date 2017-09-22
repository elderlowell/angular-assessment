angular.module('assessment').service('shopService', function($http) {

  this.getProducts = function() {
    return $http({
      method: 'JSONP',
      url: 'https://practiceapi.devmountain.com/products/'
    }).then(function(res) {
      return res;
    }).catch(function(err) {
      return err;
    });
  }

})
