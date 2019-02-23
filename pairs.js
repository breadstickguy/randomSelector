// $(document).ready(function() {

	const classList = [  
		'Jorge',
		// 'Artie',
		// 'Kolton',
		'Christine',
		'Christian', 
		// 'Grace'	,
		'Viviana',
		// 'Adam S',
		'Adam F',
		'Matt',
		'Kylee',
		'Jenae',
		'Anthony',
		// 'Jose',
		'Josh M',
		'Frank',
		'Leigh',
		'Justin',
		'Alex',
		'Beau',
		// 'Dave',
		'Ethan',
		'Van',
		// 'Patrycja',
		// 'Amber',
		"Barry",
	// ];
	// const classList = [
		// 'Herold',
		// 'Ryan',
		// 'Christopher',
		'Dan',
		'Dylan',
		'Graciela',
		// 'Christine',
		'Patrycja',
		'Zander',
		// 'Rodnee',
		'Amber',
		// 'Edgar',
		'Mat',
		'Dametri',
		'Jeremy',
		'Becky',
		'Steven',
		// 'Satinder',
		'Emily',
		'Erika',
		'Easter',
		'Aimes',
		// 'Luis R',
		'Luis V',
		'Hunter',
		'Carlos',
		// 'Josh',
		// 'Kylee'
		// 'Frank'
	];

	
	const shuffle = array => {
 		let i, j, temp = null;
  		for (i = array.length - 1; i > 0; i -= 1) {
		    j = Math.floor(Math.random() * (i + 1))
    		temp = array[i];
    		array[i] = array[j];
    		array[j] = temp;
  		}
   		return array;
	}

	const randomPair = array => console.log(array.splice(0,2));  // return a console log for recursive version
	// return array.splice for Jake Weary


const recursivePairFinder = classList => {
	// console.log('first =>', classList);
	if(classList.length <= 0) {
		return;
 	}		
	
	randomPair(shuffle(classList));
 	recursivePairFinder(classList);
}


recursivePairFinder(classList);


	// $('button').click(() => {
	// 	const pairs = randomPair(shuffle(classList));
	// 	console.log(pairs);
	// 	$('#first').html(pairs[0]);
	// 	$('#second').html(pairs[1]);
	// 	// $('#third').html(pairs[2]);
	// 	// $('#forth').html(pairs[3]);

	// 	if (classList.length === 0) {
	// 		$('.pairs').empty();
	// 		$('.get-programming').html("That's everyone, get to programming!");
	// 		$('button').attr('disabled', true);

	// 	}
	// });


// });
