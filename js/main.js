// Initialize and add the map
function initMap() {
  // The location of office
  const office = { lat: 29.50887, lng: -98.54719 };
  // The map, centered at office
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: office,
  });
  // The marker, positioned at office
  const marker = new google.maps.Marker({
    position: office,
    map: map,
  });
}
