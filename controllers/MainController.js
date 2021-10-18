app.controller('MainController', ['$scope', function($scope){
$scope.carts=[];

$scope.hotpro = [
    { id : 1,   image : "image/Flower_ring.png",    description : "Classis Solitaire Ring", price : 45000,  qty : 1 },
    { id : 2,   image : "image/infinity_necklace.png", description : "Infinity Necklace",      price : 27769,  qty : 1 },
    { id : 3,   image : "image/pearl_earing.png",   description : "Pearl Earing",           price : 17941,  qty : 1 },
    { id : 4,   image : "image/bangle_bracelet.png", description : "Bangle Bracelet",        price : 31413,  qty : 1 },
  ];

$scope.ringpro = [
    { id : 1,   image : "image/lovely_ring.png",    description : "Lovely Ring",            price : 27222,  qty : 1 },
    { id : 2,   image : "image/pave_ring.png",    description : "Solitaire Pave Ring",    price : 102789, qty : 1 },
    { id : 3,   image : "image/solitare_ring.png",    description : "Solitaire Ring",         price : 476733, qty : 1 },
    { id : 4,   image : "image/vintage_ring.png",    description : "Vintage Ring",           price : 29385,  qty : 1 },
  ];

$scope.neckpro = [
    { id : 1,   image : "image/lovely_necklace.png", description : "Lovely Necklace",        price : 16834,  qty : 1 },
    { id : 2,  image : "image/infinity2_necklace.png", description : "Infinity Necklace",      price : 25770,  qty : 1 },
    { id : 3,  image : "image/swing_necklace.png", description : "Swing Necklace",         price : 23355,  qty : 1 },
    { id : 4,  image : "image/halo_necklace.png", description : "Halo Necklace",          price : 40426,  qty : 1 },
  ];
  
  $scope.braceletpro = [
    { id : 1,  image : "image/cabochon_bracelet.png", description : "Flower Plain Bracelet",  price : 20037,  qty : 1 },
    { id : 2,  image : "image/link_bracelet.png", description : "Link Bracelet",          price : 28018,  qty : 1 },
    { id : 3,  image : "image/organic_bracelet.png", description : "Organic Design Bracelet",price : 29791,  qty : 1 },
    { id : 4,  image : "image/tennis_bracelet.png", description : "Tennis Bracelet",        price : 31999, qty : 1 }
  ];
 
   $scope.earingpro = [  
    { id : 1,  image : "image/ametys_earing.png",   description : "Small Stud Earing",      price : 37504,  qty : 1 },
    { id : 2,  image : "image/stud_earings.png",   description : "Cabochon Earing",        price : 16170,  qty : 1 },
    { id : 3,  image : "image/stud2_earing.png",   description : "Organic Design Earing",  price : 29791,  qty : 1 },
    { id : 4,  image : "image/stud3_earing.png",   description : "Vintage Earing",         price : 31999, qty : 1 }
  ];

  $scope.add_cart = function(product){
          if(product){
            $scope.carts.push({ id: product.id, description: product.description, image: product.image, price: product.price});
          } 
        }
  $scope.total = 0; 
  $scope.notify = 0; 
 
      $scope.setTotals = function(cart){ 
        if(cart){ 
          $scope.total += cart.price;
          $scope.notify ++;
        }
      }
 
  $scope.remove_cart = function(cart){ 
        if(cart){ 
          $scope.carts.splice($scope.carts.indexOf(cart), 1); 
          $scope.total -= cart.price;
          $scope.notify --; 
        }
      }

}]);
