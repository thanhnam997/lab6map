



// Coordinates for the map center
let mapCenter = [40.0, -95.0];
// Zoom level for the map
let zoomLevel = 5; // Adjust this value to control the zoom level


// Bridge data
let bridges = [
 
    {
        name: "Golden Gate Bridge",
        location: [37.8199, -122.4783],
        spanLength: 1280.2,
    },
    {
        name: "Mackinac Bridge",
        location: [45.8174, -84.7278],
        spanLength: 1158.0,
    },
    {
        name: "George Washington Bridge",
        location: [40.8517, -73.9527],
        spanLength: 1067.0,
    },
    // Add one more bridge
    {
        name: "Example Bridge",
        location: [35.1234, -90.5678],
        spanLength: 900.0,
    },
];

// create the map, center it, and set the zoom level
let map = L.map('map').setView([39.8283, -98.5795], 4);

// Add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Loop over the bridges array to create markers and popups
bridges.forEach(bridge => {
    let marker = L.marker(bridge.location).addTo(map);
    let popupContent = `<b>${bridge.name}</b><br>Span Length: ${bridge.spanLength} meters`;
    marker.bindPopup(popupContent);
});
