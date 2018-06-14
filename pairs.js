// $(document).ready(function() {

	const classList = [  
		'Andrew - 3',
		'Angel - 4',
		'Ashley - 2',
		'Brennin - 2',
		'Chance - 2',
		'Christopher - 2',
		"Daniel - 3",
		"David - 2",
		"Deana - 3",
		"Edward - 3 ",
		"Garrett - 3",
		"Gayathri - 3 ",
		"Heath - 4",
		"Hunter - 3",
		"Jacob - 2",
		"Jason - 3",
		"Jeremiah - 3",
		"Jeremy - 1",
		// "Jesse",
		"Keith - 3",
		"Josh - 2",
		"Katri-Alexandra - 3",
		// "Khounsavath",
		"Kyle - 1",
		"Kenzie - 1",
		"Matthew - 4",
		"Max - 4",
		"Meg - 2",
		"Michael Schmidgall - 4",
		"Michael Schumann - 3",
		"Nick Baker - 4",
		"Nick Hosley - 3",
		// "Patricia",
		"Paulo - 1",
		"Renata - 2",
		// "Ricardo",
		"Shane - 3",
		"Shawn - 2",
		"Shervin - 1",
		"Stefani - 2",
		"Steven - 4 ",
		"Thomas - 2",
		"Tyler - 2"
	];


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

	const randomPair = array => console.log('Best buddy teammates =>', array.splice(0,4));


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
