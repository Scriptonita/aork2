function sumaCompartir (suma) {
    $puntos = parseInt(localStorage.getItem("puntos"));
    $puntos += suma;
    localStorage.setItem("puntos", $puntos);
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
    $(".botonLetra").removeClass("pulsadaOk");
    $(".botonLetra").removeClass("pulsadaKo");
    $(".botonLetra").removeClass("z-depth-1");
    $(".botonLetra").addClass("z-depth-2");
    $("#ahorcado").attr("src", '/images/6.png');
    $("#fondoImagenAhorcado").css("background-image", 'url(/images/fondo_6.png)');
    $track = $tracks.data[$indice];
    $ancho = $(window).width();
    $("#imagen").attr("width", $ancho);
    $("#imagen").attr("height", $ancho/2);
    if ($tipoJuego !== "1") {
      $nivelJugando = 0;
    }
    if($tipoJuego == "1" && $nivelJugando == 6) {
        $titulo = $track.artist.name;
        $("#mensajeTituloCancion").html($autorCancion);
    } else {
        $titulo = $track.title;
        $("#mensajeTituloCancion").html($tituloCancion);
    }
    $titulo = $titulo.toUpperCase();
    $puntos = parseInt(localStorage.getItem("puntos"));
    $("#misPuntos").html($puntos);

    $("#insertarAudio").html(' \
                             <audio preload="auto"> \
                                <source src=" ' + $track.preview +  ' " type="audio/mpeg"> \
                                Your browser does not support the audio element. \
                            </audio>');

    $( 'audio' ).audioPlayer({});

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
    if ($tipoJuego == "1" && $nivelJugando == 6) {
        $hacerTourNivel6 = localStorage.getItem("tourNivel6");
        if (!$hacerTourNivel6) {
            tourNivel6();
            localStorage.setItem("tourNivel6", true);
        }
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
            localStorage.setItem("puntos", $puntos);
            haciaPaginaAcierto();
        }
    } else {
        $vida--;
        //console.log("Vida: " + $vida);
        $("#miVida").html($vida);
        //$("#fondo").css("background-image", 'url(/images/' + $vida + '.png)');
        $("#ahorcado").attr("src", '/images/' + $vida + '.png');
        $("#miVidaReto").html($vida);
        $("#fondoReto").css("background-image", 'url(/images/' + $vida + '.png)');
        $("#fondoImagenAhorcado").css("background-image", 'url(/images/fondo_' + $vida + '.png)');
        if ($vida == 0) {
            $("#resultado").html($hasFallado);
            var aux = $puntos - 5;
            $("#marcador").html($idiomaPuntos + ": " + $puntos + " - 5 = " + aux);
            $puntos -= 5;
            if ($puntos < 0) {
                $puntos = 0;
            }
            localStorage.setItem("puntos", $puntos);
            haciaPaginaAcierto();
        }
    }
    return encontrado;
    //console.log ("Título: " + $titulo);
    //console.log ("$aux: " + $aux);
    //console.log ("vida: " + $vida);
};


// Mientras estamos jugando, esta función prepara la página de acierto, descargando la imagen del artista, título de álbum, etc...
function prepararPaginaAcierto() {
    $("#imagenesAhorcado").html('<img id="imagen" src="/images/' + $vida + '.png" class="responsive-img" alt="Autor" />');
    $("#tituloObjetivo").html($titulo);
    $("#enlaceDeezer").attr("onclick", 'abrirEnlaceExterno("' + $track.link + '?app_id=158051")');
    if ($tipoJuego != "3") {
      //$pruebasss = $track.artist.picture;
      /*
      if (typeof $track.artist.picture != "undefined")  {
          $("#imagenAutor").html("<img src='" + $track.artist.picture + "' class='responsive-img' alt='Autor' />");
      } else {
        $("#imagenAutor").html("<img src='/images/cover.jpg' class='responsive-img' alt='Autor' />");
      }
      */
      $("#imagenAutor").html("<img id='imgAu' src='' class='responsive-img' alt='Autor' />");
      $("#imgAu").load(function () {
         console.log("Imagen del álbum cargada correctamente");
       }).error(function () {
          console.log("Error al cargar imagen, se carga la imagen por defecto de Aork2");
          $("#imgAu").attr("src", "/images/cover.jpg");
        }).attr("src", $track.album.cover);
    }
    /*
    if ($tipoJuego == 1) {
      $("#autor").html($track.title);

       if ($nivelJugando == 6) {
        //$("#aciertoAutor").html("");
        $("#autor").html($track.title);
        }

    } else {
        $("#autor").html($track.artist.name);
    }
    */
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
        localStorage.setItem("aciertosReto", $aciertosReto);
        $("#botonSiguiente").hide();
        $("#botonRetar").show();
    } else if ($tipoJuego == "1") {
        localStorage.setItem("indiceNivel" + $nivelJugando, $indice+1);
        localStorage.setItem("aciertosNivel" + $nivelJugando, $aciertos);
        $("#botonRetar").hide();
        $("#botonSiguiente").show();
    } else if ($tipoJuego == "3") {;
        $("#botonRetar").hide();
        $("#botonSiguiente").show();
        console.log("Canciones acertadas del reto: " + $aciertosReto);
    }
    if (!$adsActivo) {
        $("#pubJuegoIndividual").html('                                                                     \
                    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>  \
                    <!-- Aork2 - Juego Individual -->                                                       \
                    <ins class="adsbygoogle"                                                                \
                        style="display:inline-block;width:320px;height:100px"                               \
                        data-ad-client="ca-pub-1275195378669643"                                            \
                        data-ad-slot="2538807830"></ins>                                                    \
                    <script>                                                                                \
                        (adsbygoogle = window.adsbygoogle || []).push({});                                  \
                    </script>'
            );
        $adsActivo = true;
    }
    //centrarVerticalmente("#divExito", "#bloqueExito");

    centrarVerticalmentePaginaAcierto();
    $.mobile.changePage("#paginaAcierto",{transition: "flip"});
    $hacerTour = localStorage.getItem("tourAcierto");
    if (!$hacerTour) {
        tourAcierto();
        localStorage.setItem("tourAcierto", true);
    }
}

// Prepara la página de juego en el modo estilos
function iniciarJuegoEstilo () {
    $(".botonLetra").removeClass("pulsada");
    $(".botonLetra").removeClass("pulsadaOk");
    $(".botonLetra").removeClass("pulsadaKo");
    $(".botonLetra").removeClass("z-depth-1");
    $(".botonLetra").addClass("z-depth-2");
    $("#ahorcado").attr("src", '/images/6.png');
    $("#fondoImagenAhorcado").css("background-image", 'url(/images/fondo_6.png)');
    $vida = 6;
    $("#miVida").html($vida);
    $puntos = parseInt(localStorage.getItem("puntos"));
    $("#misPuntos").html($puntos);
    $("#infoPuntos").html($puntos);   // Puntuación en página de información durante el juego PageInfo
    $("#noMasPuntos").html($puntos);  // Puntuación en página de información PageNoMas

    //$("#ahorcado").css("background-image", 'url(/images/6.png)');
    $track = $tracksEstilo[$indiceEstilo];
    console.log($track);
    $ancho = $(window).width();
    $titulo = $track.title;
    $titulo = $titulo.toUpperCase();
    $("#insertarAudio").html(' \
                             <audio controls preload="auto"> \
                                <source src=" ' + $track.preview +  ' " type="audio/mpeg" id="audio"> \
                                Your browser does not support the audio element. \
                            </audio>'
    );
    $("audio").audioPlayer({});
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
