

const developer = new Vue({
	el: '#developer',
	data: {
		title: 'Chris Johnson'
	}
});

const headline = new Vue({
	el: '#headline',
	data: {
		title: 'A Portfolio of My Recent Projects'
	}
});






const cards = [
	{
		title: 'my title 1',
		img: {
			src: 'app/assets/images/placeholder_img.png',
			alt: 'Screenshot of Project 1'
		},
		desc: 'my description fafsafasf',
		flipped: false
	},
	{
		title: 'my title 2',
		img: {
			src: 'app/assets/images/placeholder_img.png',
			alt: 'Screenshot of Project 1'
		},
		desc: 'my description fafsafasf',
		flipped: false
	},
	{
		title: 'my title 3',
		img: {
			src: 'app/assets/images/placeholder_img.png',
			alt: 'Screenshot of Project 1'
		},
		desc: 'my description fafsafasf',
		flipped: false
	},
	{
		title: 'my title 4',
		img: {
			src: 'app/assets/images/placeholder_img.png',
			alt: 'Screenshot of Project 1'
		},
		desc: 'my description fafsafasf',
		flipped: false
	},
	{
		title: 'my title 5',
		img: {
			src: 'app/assets/images/placeholder_img.png',
			alt: 'Screenshot of Project 1'
		},
		desc: 'my description fafsafasf',
		flipped: false
	},
	{
		title: 'my title 6',
		img: {
			src: 'app/assets/images/placeholder_img.png',
			alt: 'Screenshot of Project 1'
		},
		desc: 'my description fafsafasf',
		flipped: false
	}			
];



const project_card = new Vue({
	el: '#projects',
	data: {
		cards: cards,
		img: ''
	},
	methods: {
		toggleCard: function(card) {
			card.flipped = !card.flipped;
		},		
	}
});























