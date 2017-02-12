angular.module('app.directives', [])

.directive('map', function() {
  return {
    restrict: 'E',
    scope: {
      onCreate: '&'
    },
    link: function ($scope, $element, $attr) {
      function initialize() {
        var mapOptions = {
          center: {lat: 17.0773033, lng: -96.7444116},
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map($element[0], mapOptions);

        var deportivas = [
          ['Estadio', 17.080142, -96.745018], 
          ['Furama', 17.074887, -96.743261],
          ['Canchas', 17.071937, -96.742483],
          ['Pista', 17.072548, -96.743312]];

        var tiendas = [
        ['Marti', 17.078385, -96.742562],
        ['Chedraui', 17.078755, -96.741992]];

        var restaurantes = [
        ['Los Olivos', 17.076847, -96.741499]];
        
        var marker1, marker2, marker3;

        for(var i = 0; i < deportivas.length; i++){
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(deportivas[i][1], deportivas[i][2]),
            map: map,
            title: deportivas[i][0],
            icon: 'img/blue.png'
          });
        }
        for(var i = 0; i < tiendas.length; i++){
          marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(tiendas[i][1], tiendas[i][2]),
            map: map,
            title: tiendas[i][0],
            icon: 'img/red.png'
          });
        }
        for(var i = 0; i < restaurantes.length; i++){
          marker3 = new google.maps.Marker({
            position: new google.maps.LatLng(restaurantes[i][1], restaurantes[i][2]),
            map: map,
            title: restaurantes[i][0],
            icon: 'img/green.png'
          });
        }
        var contenido = '<h1>Los Olivos</h1><h3>Menú del Día</h3><p>1.- Caldo de pollo</p><p>2.- Ensalada de Verduras</p><p>3.- Hamburgesa vegetariana</p>';
        var infowindow = new google.maps.InfoWindow({
            content: contenido});
        google.maps.event.addListener(marker3, 'click', function() {
          console.log(marker3);
          infowindow.open(map, marker3);
        });

        $scope.onCreate({map: map});
        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
          e.preventDefault();
          return false;
        });
      }

      if (document.readyState === "complete") {
        initialize();
      } else {
        google.maps.event.addDomListener(window, 'load', initialize);
      }
    }
  }
})

