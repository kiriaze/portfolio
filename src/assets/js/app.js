// accept hot module reloading
if ( module.hot ) {
	module.hot.accept();
}

// 
import '../scss/style.scss';

// might be faster to load individually here while deving,
// and can also pinpoint file
import '../../views/globals/style.scss';
// import '../../views/globals/header/style.scss';
import '../../views/modules/style.scss';

import jQuery from 'jquery';

// console.log('lorem');


// check the time, and apply 'dark' if nighttime
let hrs = (new Date).getHours();
if ( hrs > 18 || hrs < 4 ) {
	$('body').addClass('dark');
} else {
	$('body').removeClass('dark');
}

$('.toggle-day-night').on('click', (e) => {
	e.preventDefault();
	$('body').toggleClass('dark');
	if ( $('body').hasClass('dark') ) {
		$(e.currentTarget).find('span:nth-child(1)').hide();
		$(e.currentTarget).find('span:nth-child(2)').show();
	} else {
		$(e.currentTarget).find('span:nth-child(1)').show();
		$(e.currentTarget).find('span:nth-child(2)').hide();
	}
});

$('#header a').on('click', (e) => {
	
	e.preventDefault();
	
	let href = $(e.currentTarget).attr('href');

	history.pushState({
	    id: 'homepage'
	}, 'Home', href);
	
	$('#main').load(`${href} #main`);

});