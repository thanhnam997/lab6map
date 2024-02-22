// Coordinates for the map center
let mapCenter = [40.0, -95.0];
// Zoom level for the map
let zoomLevel = 5;

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

// Determine the longest bridge
let longestBridge = bridges.reduce((prev, current) => (prev.spanLength > current.spanLength) ? prev : current);

// Create a custom icon
const customIcon = L.icon({
    iconUrl: 'bridge.png', // Replace with the path to your downloaded bridge icon
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

// Create a custom icon for the longest bridge
const longestBridgeIcon = L.icon({
    iconUrl: 'bridge (3).png', // Replace with the path to your downloaded longest bridge icon
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

// Create the map, center it, and set the zoom level
let map = L.map('map').setView(mapCenter, zoomLevel);

// Add the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Loop over the bridges array to create markers and popups with custom icons
bridges.forEach(bridge => {
    let icon = (bridge === longestBridge) ? longestBridgeIcon : customIcon;
    let marker = L.marker(bridge.location, { icon: icon }).addTo(map);
    let popupContent = `<b>${bridge.name}</b><br>Span Length: ${bridge.spanLength} meters`;
    marker.bindPopup(popupContent);
});
