import { SIMILAR_ANNOUNCEMENTS_COUNT } from './config.js';
import { generateCard } from './generateCards.js';

const mapCenterCoordinates = {
  lat: 35.67920498464551,
  lng: 139.77100169861524
};

const interactiveMap = L.map('map-canvas')
  .setView(mapCenterCoordinates, 13);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(interactiveMap);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  inconAnchor: [26, 52]
});

const mainMarker = L.marker(
  mapCenterCoordinates,
  {
    icon: mainPinIcon,
    draggable: true
  }
);

mainMarker.addTo(interactiveMap);

const ordinaryPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  inconAnchor: [20, 40]
});

const markerGroup = L.layerGroup().addTo(interactiveMap);

const createMarker = ({author, offer, location}) => {
  const marker = L.marker(
    {
      lat: location.lat,
      lng: location.lng
    },
    {
      icon: ordinaryPinIcon
    }
  );

  marker
    .addTo(markerGroup)
    .bindPopup(generateCard(author, offer));
};

const createMarkers = ((announcments) => {
  announcments.slice(0, SIMILAR_ANNOUNCEMENTS_COUNT).forEach((announcement) => {
    createMarker(announcement);
  });
});

export {interactiveMap, mapCenterCoordinates, mainMarker, createMarkers};
