// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

function showButton () {
	var description = $(this).next('.description')
	description.fadeToggle('slow').toggleClass('hide');
	$(this).toggleClass('btn-success')
	if (description.hasClass('hide')) {
		$(this).html('Hide Message')
	} else {
		$(this).html('Show Message')
	}
}

function hoverTitle () {
	$(this).css('color','lawngreen');
}

function hoverLeaveTitle () {
	$(this).css('color', '#08c')
}

function carouselNormalization() {
	var items = $('#carousel-example-generic .item'), //grab all slides
	heights = [], //create empty array to store height values
	tallest; //create variable to make note of the tallest slide

  if (items.length) {
   	function normalizeHeights() {
	    items.each(function() { //add heights to array
	      heights.push($(this).height()); 
	        });
	        tallest = Math.max.apply(null, heights); //cache largest value
	        items.each(function() {
	        	$(this).css('min-height',tallest + 'px');
	        });
	      };
	      normalizeHeights();

	      $(window).on('resize orientationchange', function () {
	        tallest = 0, heights.length = 0; //reset vars
	        items.each(function() {
	            $(this).css('min-height','0'); //reset min-height
	          }); 
	        normalizeHeights(); //run it again 
	      });
	    }
	  }

function showCarousel(){

	$('#carousel-example-generic').first('img').fadeToggle().toggleClass('display');
	carouselNormalization();
	$('.topper').fadeToggle();
	if ($('#carousel-example-generic').hasClass('display')){
		$(this).html('Display List of Greetings');
	} else {
		$(this).html('Display Greetings as Slideshow');
	}
	$('.carousel').carousel({interval:5000, wrap: true, pause: ""}, 'cycle');
}


function documentLoad(){
	$('.containing-border').on('click','button', showButton);
	$('.navbar').on('mouseenter','.container, button, a', hoverTitle).on('mouseleave','.container, a, button', hoverLeaveTitle);
	$('.navbar').on('click', '.btn-success', showCarousel);	
}

$(document).ready(documentLoad);
$(document).on('page:load',documentLoad); //loads JS on every page 