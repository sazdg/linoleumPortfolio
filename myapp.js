var app = angular.module('myApp', []);

app.controller('ctrl', function($scope){

	//init
	$scope.tecnica = true; //show
	$scope.eshop = true; //hide

	$scope.funcTecnica = function() {
		$scope.tecnica = true; //show
		$scope.eshop = true; //hide
	}

	$scope.funcShop = function() {
		$scope.tecnica = false; //show
		$scope.eshop = false; //hide
	}

	$scope.quantita = 1;

	$scope.stampa = [
		{nome:'Pattern', prezzoEUR:100, prezzoUSD:122, prezzoGBP:90},
		{nome:'Hopper', prezzoEUR:100, prezzoUSD:122, prezzoGBP:90},
		{nome:'Winter', prezzoEUR:100, prezzoUSD:122, prezzoGBP:90},
		{nome:'Snake', prezzoEUR:100, prezzoUSD:122, prezzoGBP:90}
	];


});

app.controller('ctrlForm', function($scope){
	$scope.nome = 'nome';
	$scope.email = 'email';
	$scope.titolo = '';
	$scope.commento = '';

	$scope.send = function() {
		$scope.success = false;
		$scope.error = false;
		if($scope.form.$valid){
			$scope.success = true;
		} else {
			$scope.error = true;
		}	
	}
});

app.controller('ctrlHome', function($scope, $location, $interval){
	$scope.myUrl = $location.absUrl();

	$interval(function(){
		$scope.pattern = $("#patternfoto").attr("src","foto/pattern1.jpg");
		$scope.hopper = $("#hopperfoto").attr("src","foto/hopper1.PNG");
	}, 3000);
	$interval(function(){
		$scope.pattern = $("#patternfoto").attr("src","foto/pattern.jpg");
		$scope.hopper = $("#hopperfoto").attr("src","foto/hopper.jpg");
	}, 3010);

	$scope.glitchOn = function(){
		$("#winterfoto").attr("src","foto/winter1.JPG");
	};
	$scope.glitchOff = function(){
		$("#winterfoto").attr("src","foto/winter.jpg");
	};
	$scope.glitch2On = function(){
		$("#snakefoto").attr("src","foto/snake1.PNG");
	};
	$scope.glitch2Off = function(){
		$("#snakefoto").attr("src","foto/snake.jpg");
	};

});
