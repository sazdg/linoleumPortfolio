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
	$scope.nome = ' ';
	$scope.email = ' ';
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
	
	$scope.hopper = "hopper.jpg";
	$scope.pattern = "pattern.jpg";
	$scope.winter = "winter.jpg";
	$scope.snake = "snake.jpg";

	$interval(function(){
		$scope.hopper = "hopper1.PNG";
		$scope.pattern = "pattern1.jpg";
	}, 3000);
	$interval(function(){
		$scope.hopper = "hopper.jpg";
		$scope.pattern = "pattern.jpg";
	}, 3005);

	$scope.glitchOn = function(){
		$scope.winter = "winter1.JPG";
	};
	$scope.glitchOff = function(){
		$scope.winter = "winter.jpg";
	};
	$scope.glitch2On = function(){
		$scope.snake = "snake1.PNG";
	};
	$scope.glitch2Off = function(){
		$scope.snake = "snake.jpg";
	};

});
