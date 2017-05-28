function initMap() {
    var mapaContenedor = document.getElementById("mapa");
    var laboratoriaMexico = {
        lat: 19.417639,
        lng: -99.164815
    }
    var mapa = new google.maps.Map(
        mapaContenedor, {
            zoom: 18,
            center: laboratoriaMexico
        }
    )
    var marcadorLaboratoria = new google.maps.Marker({
        position: laboratoriaMexico,
        map: mapa
    })

    function buscar() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
        }
    }

    var latitud, longitud;
    var funcionExito = function (posicion) {
        console.log(posicion);
        latitud = posicion.coords.latitude;
        longitud = posicion.coords.longitude;
        mapa.setZoom(18);
        mapa.setCenter({
            lat: latitud,
            lng: longitud
        });
        var miUbicacion = new google.maps.Marker({
            position: {
                lat: latitud,
                lng: longitud
            },
            map: mapa
        });
    }


    var funcionError = function (error) {
        alert("Tenemos un problema para encontrar tu ubicación.");
    };

    document.getElementById("encuentrame").addEventListener("click", buscar);

}
