angular.module('assessment').controller('shopCtrl', function($scope, shopService) {

  $scope.productsArr = shopService.products;

  //LEFT CODE, BUT URL IN SERVICE NOT WORKING
  // $scope.getProducts = function() {
  //   shopService.getProducts().then(function(res) {
  //     $scope.productsArr = res.data;
  //   });
  // };
  //
  // $scope.getProducts();

});
