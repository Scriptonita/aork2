function sumaCompartir (suma) {
    $puntos = parseInt(window.localStorage.getItem("puntos"));
    $puntos += suma;
    window.localStorage.setItem("puntos", $puntos);
}

function compartirTwitter (texto, url, puntos) {
    window.plugins.socialsharing.shareViaTwitter(texto, null, url, function() {sumaCompartir(puntos)}, function(errormsg){alert(errormsg)});
}

function compartirFacebook (texto, url, puntos) {
    window.plugins.socialsharing.shareViaFacebook(texto, null, url, function() {sumaCompartir(puntos)}, function(errormsg){alert(errormsg)});
}

function compartirCompartir (texto, url, puntos) {
    window.plugins.socialsharing.share(null, texto, null, url, function() {sumaCompartir(puntos)}, function(errormsg){alert(errormsg)});
}

function compartirWhatsapp (texto, url, puntos) {
    window.plugins.socialsharing.shareViaWhatsApp(texto, null, url, function() {sumaCompartir(puntos)}, function(errormsg){alert(errormsg)});
}

function obtenerCancion(json, indice){
    $track = json.data[indice];
    console.log ($track);
    return $track;
}

// Prepara la pantalla de juego con la información de vida y puntos e inserta la cancioón.
function iniciarJuego() {
    $(".botonLetra").removeClass("pulsada");
    $("#fondo").css("background-image", 'url(images/6.png)');

    $track = $tracks.data[$indice];
    $ancho = $(window).width();
    $("#imagen").attr("width", $ancho);
    $("#imagen").attr("height", $ancho/2);
    $titulo = $track.title;
    $titulo = $titulo.toUpperCase();
    $puntos = parseInt(window.localStorage.getItem("puntos"));
    $("#misPuntos").html($puntos);

    $("#insertarAudio").html(' \
                             <audio controls> \
                                <source src=" ' + $track.preview +  ' " type="audio/mpeg"> \
                                Your browser does not support the audio element. \
                            </audio>');
    $vida = 6;
    $("#miVida").html($vida);
    $("#infoPuntos").html($puntos);   // Puntuación en página de información durante el juego PageInfo
    $("#noMasPuntos").html($puntos);  // Puntuación en página de información PageNoMas

    $aux = "";
    for (var x=0; x < $titulo.length; x++) {
        if(/[A-Z]/.test($titulo.charAt(x))){
            $aux = $aux + "_";
        } else {
            $aux = $aux + $titulo[x];
        }
    }
    $("#adivina").html($aux);
    $hacerTourJuego = localStorage.getItem("tourJuego");
    if (!$hacerTourJuego) {
        tourJuego();
        localStorage.setItem("tourJuego", true);
    }
};

// Comprueba en cada pulsación de letra si se encuentra en el título o no y actúa en consecuencia
function comprobarLetra (letra) {
    var encontrado = false;
    for (var x=0; x < $titulo.length; x++) {
        if ($titulo[x] == letra) {
            var temp = "";
            for (var y=0; y<x; y++) {
               temp = temp + $aux[y];
            }
            temp = temp + letra;
            for (var y=x+1; y < $titulo.length; y++) {
            temp = temp + $aux[y];
            }
            $aux = temp;
            encontrado = true;
            //console.log("Letra " + letra + " encontrada en posición " + x);
        }
    }
    if (encontrado) {
        $("#adivina").html($aux);
        $("#adivinaReto").html($aux)
        //console.log ("Letra mostrada en su posición");
        if ($titulo == $aux) {
            $aciertos++;
            $("#resultado").html($enhorabuena);
            var aux = $puntos + 10 + $vida
            $("#marcador").html($idiomaPuntos + ": " + $puntos + " + 10 + " + $vida + " = " + aux);
            $puntos += 10 + $vida;
            /*
            if ($esReto) {*/
                $aciertosReto++;
            /*
            }
            */
            window.localStorage.setItem("puntos", $puntos);
            haciaPaginaAcierto();
        }
    } else {
        $vida--;
        //console.log("Vida: " + $vida);
        $("#miVida").html($vida);
        $("#fondo").css("background-image", 'url(images/' + $vida + '.png)');
        $("#miVidaReto").html($vida);
        $("#fondoReto").css("background-image", 'url(images/' + $vida + '.png)');
        if ($vida == 0) {
            $("#resultado").html($hasFallado);
            var aux = $puntos - 5;
            $("#marcador").html($idiomaPuntos + ": " + $puntos + " - 5 = " + aux);
            $puntos -= 5;
            if ($puntos < 0) {
                $puntos = 0;
            }
            window.localStorage.setItem("puntos", $puntos);
            haciaPaginaAcierto();
        }
    }
    //console.log ("Título: " + $titulo);
    //console.log ("$aux: " + $aux);
    //console.log ("vida: " + $vida);
};


// Mientras estamos jugando, esta función prepara la página de acierto, descargando la imagen del artista, título de álbum, etc...
function prepararPaginaAcierto() {
    $("#pubJuegoIndividual").empty();
    $("#imagenesAhorcado").html('<img id="imagen" src="images/' + $vida + '.png" />');
    $("#tituloObjetivo").html($titulo);
    $("#enlaceDeezer").attr("onclick", 'abrirEnlaceExterno("' + $track.link + '")');
    if ($tipoJuego != "3") {
        $("#imagenAutor").html("<img src='" + $track.artist.picture + "' />");
    }
    $("#autor").html($track.artist.name);
    $("#album").html($track.album.title);
}

// Guarda las puntuaciones e indices en su caso, antes de dirigir hacia la pagina de acierto
function haciaPaginaAcierto() {
    $vida = 6;
    $("#insertarAudio").html('');
    if ($esReto) {
        $("#vecesRetos").html($nReto);
        $("#aciertoRetos").html($aciertosReto);
        window.localStorage.setItem("aciertosReto", $aciertosReto);
        $("#botonSiguiente").hide();
        $("#botonRetar").show();
    } else if ($tipoJuego == "1") {
        window.localStorage.setItem("indice", $indice+1);
        console.log("indice juego individual:" + $indice);
        window.localStorage.setItem("aciertos", $aciertos);
        $("#botonRetar").hide();
        $("#botonSiguiente").show();
    } else if ($tipoJuego == "3") {;
        $("#botonRetar").hide();
        $("#botonSiguiente").show();
        console.log("Canciones acertadas del reto: " + $aciertosReto);
    }
    $.mobile.changePage("#paginaAcierto",{transition: "flip"});
}

// Prepara la página de juego en el modo estilos
function iniciarJuegoEstilo () {
    $(".botonLetra").removeClass("pulsada");
    $vida = 6;
    $("#miVida").html($vida);
    $puntos = parseInt(window.localStorage.getItem("puntos"));
    $("#misPuntos").html($puntos);
    $("#infoPuntos").html($puntos);   // Puntuación en página de información durante el juego PageInfo
    $("#noMasPuntos").html($puntos);  // Puntuación en página de información PageNoMas

    $("#fondo").css("background-image", 'url(images/6.png)');
    $track = $tracksEstilo[$indiceEstilo];
    console.log($track);
    $ancho = $(window).width();
    $titulo = $track.title;
    $titulo = $titulo.toUpperCase();
    $("#insertarAudio").html(' \
                             <audio controls> \
                                <source src=" ' + $track.preview +  ' " type="audio/mpeg" id="audio"> \
                                Your browser does not support the audio element. \
                            </audio> '
    );
    $aux = "";
    for (var x=0; x < $titulo.length; x++) {
        if(/[A-Z]/.test($titulo.charAt(x))){
            $aux = $aux + "_";
        } else {
            $aux = $aux + $titulo[x];
        }
    }
    $("#adivina").html($aux);
}
