angular.module('assessment').controller('productDetailsCtrl', function($scope, $stateParams, shopService) {

  $scope.productsArr = shopService.products;

  $scope.getProduct = function() {
    for (var i = 0; i < $scope.productsArr.length; i++) {
      if ($scope.productsArr[i].id == $stateParams.id) {
        $scope.product = $scope.productsArr[i];
      }
    }
  }

  $scope.getProduct();

});
