angular.module('assessment').service('shopService', function($http) {

  this.products = [
    {
      id: 1,
      image: 'https://is.alicdn.com/img/pb/413/368/441/441368413_701.jpg',
      title: 'Shoes',
      desc: 'Blue swede shoes',
      price: '$750'
    },
    {
      id: 2,
      image: 'http://www.australiangear.com/media/catalog/product/cache/5/image/650x/040ec09b1e35df139433887a97daa66f/i/m/img_2165.1435818734.jpg',
      title: 'Hat',
      desc: 'Genuine Australian Squashy',
      price: '$250'
    },
    {
      id: 3,
      image: 'https://d23x084dcxncv3.cloudfront.net/josephturner/product/ac4f9440.MJJTWDLGH_1.jpg/960x1220.fit.MJJTWDLGH_1.jpg',
      title: 'Jacket',
      desc: 'Classy Tweed Jacket',
      price: '$350'
    }
  ];

  //URL IS NOT WORKING; LEFT CODE BUT CREATED MY OWN SAMPLE DATA
  // this.getProducts = function() {
  //   return $http({
  //     method: 'JSONP',
  //     url: 'https://practiceapi.devmountain.com/products/'
  //   }).then(function(res) {
  //     return res;
  //   }).catch(function(err) {
  //     return err;
  //   });
  // }

})
