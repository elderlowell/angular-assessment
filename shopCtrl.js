angular.module('assessment').controller('shopCtrl', function($scope, shopService) {

  $scope.getProducts = function() {
    shopService.getProducts().then(function(res) {
      $scope.productsArr = res.data;
    });
  };

  $scope.getProducts();

});
