// $(document).ready(function() {

	const classList = [
		'Andrew',
		'Angel',
		'Ashley',
		'Brennin',
		'Chance',
		'Christopher',
		"Daniel",
		"David",
		"Deana",
		"Edward",
		"Garrett",
		"Gayathri",
		"Heath",
		"Hunter",
		"Jacob",
		"Jason",
		"Jeremiah",
		"Jeremy",
		"Johnny",
		"Josh"
		"Katri-Alexandra",
		"Kyle",
		"Mackenzie",
		"Matthew",
		"Max",
		"Meg",
		"Michael Schumann",
		"Nick Baker",
		"Nick Hosley",
		"Paulo",
		"Renata",
		"Shane",
		"Shervin",
		"Stefani",
		"Steven",
		"Thomas",
		"Tyler"
	];


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
	
	const shuffle = array => {
 		let i = 0, j = 0, temp = null
  		for (i = array.length - 1; i > 0; i -= 1) {
		    j = Math.floor(Math.random() * (i + 1))
    		temp = array[i];
    		array[i] = array[j];
    		array[j] = temp;
  		}
   		return array;
	}

	const randomPair = array => console.log('Best buddy teammates =>', array.splice(0,2));


const recursivePairFinder = (classList) => {
	// console.log('first =>', classList);
	if(classList.length <= 0) {
		return;
 	}		
	
	randomPair(shuffle(classList));
 	recursivePairFinder(classList);
}


recursivePairFinder(classList);


	// $('button').click(function() {
	// 	var pairs = randomPair(shuffle(classList));
	// 	$('#first').html(pairs[0]);
	// 	$('#second').html(pairs[1]);
	// 	$('#third').html(pairs[2]);

	// 	if (classList.length === 0) {
	// 		// $('.pairs').empty();
	// 		$('.get-programming').html("That's everyone, get to programming!");
	// 		$('button').attr('disabled', true);

	// 	}
	// });


// });
