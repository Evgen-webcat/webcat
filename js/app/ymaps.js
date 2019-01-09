 ymaps.ready(init);

 function init() {
     var placemarcIcon = document.getElementById('map').getAttribute('data-placemark');
     var myMap = new ymaps.Map("map", {
         center: [53.86549061, 27.52305829],
         zoom: 17,
         controls: ['zoomControl']
     }, {
         zoomControlPosition: {
             top: '10px',
             right: '10px'
         }
     });

     var myPlacemark = new ymaps.Placemark([53.86534980, 27.52422515], {}, {
         iconLayout: 'default#image',
         iconImageHref: placemarcIcon,
         iconImageSize: [30, 52],
         iconImageOffset: [-15, -52]
     });

     myMap.geoObjects.add(myPlacemark);
 }
