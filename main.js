$(document).ready(function () {
    // ------------ INITIALIZE THE GOOGLE MAP ------------
        // Create a global variable to hold the map object: (It's global should we need to access or manipulate it in multiple functions.)
        let map; // this map variable holds the Google Map object that we will create below... 

        // Function to initialize the Google Map:
        function initMap() {
            map = new google.maps.Map(document.getElementById('map-container'), { // google.maps.Map() is the constructor function to create a new map object. It takes two arguments: the HTML element to display the map in, and an object with options for the map.
                center: { lat: 32.7157, lng: -117.1611 }, // Centered on San Diego
                zoom: 10 // How zoomed in (1 = world view, 20 = building/street view)
            });
        }

        // Call the initMap function to create the map when page loads:
        initMap();

    // ------------ LOADS JSON DATA AND DISPLAYS IT IN THE TABLE ------------
    $.getJSON('data.json', function(data) {
        // Iterate through each top spot in the data
        data.forEach(function(spot) {
            // Create the Google Maps URL using latitude and longitude:
            var mapUrl = 'https://www.google.com/maps?q=' + spot.location[0] + ',' + spot.location[1];

            // Create a table row with the spot's name and link to map
            var row = '<tr>' +
                '<td>' + spot.name + '</td>' +
                '<td>' + spot.description + '</td>' +
                '<td><a href="' + mapUrl + '" target="_blank">Map</a></td>' +
                '</tr>';
            
            // Append the row to the table body
            $('#top-spots').append(row);
        });
    });
});