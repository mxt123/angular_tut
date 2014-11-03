(function() {
  
  var app = angular.module('basket', []);

  app.controller('CartController', function() {   
    this.remove = function(index) {
      this.items.splice(index, 1);
    };    

    this.items = items;

  });

  var items = [
      {title: 'Paint X pots', quantity: 8, price: 3.95},
      {title: 'Polka dots', quantity: 17, price: 12.95},
      {title: 'Pebbles', quantity: 5, price: 6.95}
    ];

})();