$(document).ready(function() {

	var classList = [  'Michael', 'Eli', 'Greg', 'Casey', 'Steven', 'Tim', 
	'Patrick', 'Esteban', 'Michelle', 'LeeAnna', 'Devren', 
	'Tyler', 'Frank', 'John', 'James', 'Ryan', 'Rich', 'Sam', 'Andrew', 'Oscar', 'Tarmin'];


	// // var saturdayClassList = [
	// 	'Casey',

	// 	'Catherine',
	// 	'Christopher',
	// 	'Danae',
	// 	'Daniel',
	// 	'Devren',
	// 	'Drew',
	// 	'Eli',
	// 	'Esteban',
	// 	'Frank',
	// 	'George Awad',
	// 	'Greg',
	// 	'James',
	// 	'Jeffrey Hatch',
	// 	'Jeffrey Schultz',
	// 	'John',
	// 	'Jorge Cordova',
	// 	'Jose',
	// 	'Kevin',
	// 	'Kyle',
	// 	'LeeAnna',
	// 	'Manish',
	// 	'Michael',
	// 	'Michelle',
	// 	'Nathan',
	// 	'Nicholas',
	// 	'Omar',
	// 	'Oscar',
	// 	'Patrick',
	// 	'Paul',
	// 	'Phillip',
	// 	'Rich',
	// 	'Robert',
	// 	'Ryan',
		
	// 	'Saul',
	// 	'Sherry',
	// 	'Steven',
	// 	'Tamy',
	// 	'Tarmin',
	// 	'Tim',
	// 	'Travis',
	// 	'Tyler',
	// 	'Wes',
	// 	'William'
	// // ];
	
	function shuffle (array) {
 		var i = 0, j = 0, temp = null
  		for (i = array.length - 1; i > 0; i -= 1) {
		    j = Math.floor(Math.random() * (i + 1))
    		temp = array[i];
    		array[i] = array[j];
    		array[j] = temp;
  		}
   		return array;
	}

	function randomPair(array) {
		var trio = array.splice(0,3);
		console.log('trio', trio);
		return trio;
	}


	function getMarvelAPI() {
		$.ajax({
			url: 'https://gateway.marvel.com/v1/public/characters?name=Nova&apikey=7ebc44170403dcc0cd0bdf76f2501719',
			method: 'GET'
		}).done(function(response) {
			console.log(response);
	});
	}
	
	getMarvelAPI();

	$('button').click(function() {
		var trios = randomPair(shuffle(classList));
		$('#first').html(trios[0]);
		$('#second').html(trios[1]);
		$('#third').html(trios[2]);

		if (classList.length === 0) {
			// $('.pairs').empty();
			$('.get-programming').html("That's everyone, get to programming!");
			$('button').attr('disabled', true);

		}
	});


});