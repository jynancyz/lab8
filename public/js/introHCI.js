// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
	$(function(){
		$(".judge-img").bind("taphold", tapholdHandler);

		function tapHoldHandler(event){}
			var targetIDPrefix = event.target.id;
			console.log("got prefix:" + targetIDPrefix);
			$(event.target).addClass("taphold");
			$("#" + targetIDPrefix + "-bio").show();
	}
	});
	
}

// init RSVP form submit listener
function initRSVPForm() {
	$('#rsvpForm').submit(function(e){
		e.preventDefault();
		console.log("submitting form...")
		var rsvpEmail = $('#rsvpEmail').val();

		$.post('addRSVP', {rsvpEmail: rsvpEmail }, postCallBack);
	});

	function postCallBack(res){
		alert("RSVP form successfully submitted!");
		$('#rsvpEmail').val('');
	}  // add your code here
}