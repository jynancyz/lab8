function initMap() {
	// add your code here
	var ssc = {lat:32.8787421, lng:-117.2359944};

	var map = new google.maps.Map(document.getElementById('map'), {
		center: ssc, 
		zoom: 21
	});

	var marker = new google.maps.Marker({
		position: ssc, 
		map: map, 
		title: "SSC"
	});
}