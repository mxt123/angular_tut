function CartController($scope) {
	$scope.items = [
		{title: 'Paint pots', quantity: 8, price: 3.95},
		{title: 'Tartan paint', quantity: 6, price: 14.95},
		{title: 'Left handed brushes', quantity: 3, price: 23.95},
	];

	$scope.remove = function(index) {
	$scope.items.splice(index,1);
}
}