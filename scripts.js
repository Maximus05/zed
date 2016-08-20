$(function() {

	// load main content
	var jsonFile = 'content/main.json';

	$.ajax({
  		url: jsonFile,
  		method: 'get',
	})
	.done(function(data) {
		$('.content').html(
			'<div class="main">'+
				'<span>' + data.background + '<span>' +
			'</div>'
		);
	})
	.fail(function() {
		console.error('Could not load JSON file: "' + jsonFile + '"');		
	});

	// handle click on header
	$('.container').on('click', function() {
		$.ajax({
	  		url: jsonFile,
	  		method: 'get',
		})
		.done(function(data) {
			$('.content').html(data.background);
		})
		.fail(function() {
			console.error('Could not load JSON file: "' + jsonFile + '"');		
		});
	});

	// handle header link clicks	
    $('header ul a').on('click', function() {
		var element = $(this);
		var link    = element.attr('href');

		var json = 'content/';

		if (link === 'skins') {
			json += 'skins.json';
		
		} else if (link === 'abilities') {
   			json += 'abilities.json';
		
		} else if (link === 'tips') {
   			json += 'tips.json';
		
		} else if (link === 'builds') {
   			json += 'builds.json';
		
		} else if (link === 'runes-and-masteries') {
   			json += 'runes-and-masteries.json';		
		}

		$.ajax({
	  		url: json,
	  		method: 'get',
		})
		.done(function(data) {
			$('.content').html(data.data);						
		})
		.fail(function() {
			console.error('Could not load JSON file: "' + json + '"');		
		});

		return false;
	});
});