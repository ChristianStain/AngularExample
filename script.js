var miApp = angular.module("sdcApp", []);

miApp.controller('controlador1', function($scope){
	$scope.cantidad = 0;
	$scope.precio = 2.5;
})

miApp.controller('ctrlRepeat', function($scope){
	$scope.futbolistas = [

	{nombre:'Bastian', apellido:'Mancha', edad:23},
	{nombre:'Lucas', apellido:'Lobos', edad:24},
	{nombre:'Chucho', apellido:'Benitez', edad:18},

	];
	
})