

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


const project_card = new Vue({
	el: '.project',
	data: {
		title: 'placeholder',
		img: {
			src: 'app/assets/images/placeholder_img.png',
			alt: 'Screenshot of Project 1'
		},
		desc: '',
		link: '',
		code: ''
	},
	methods: {
		reveal: function() {
			alert('It works!');
		}
	}
});


