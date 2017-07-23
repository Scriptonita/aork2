// Cuando estamos en la pantalla de crear reto y hacemos una busqueda, nos aparecerá un listado de canciones. Si pulsamos sobre alguna de las canciones
// elergiEstaCancion() se encargará de proporcionar un adio de la canción seleccionada para que podamos comprobar si es la que deseamos y creará los enlaces
// para compartir el reto.

function elegirEstaCancion(CancionID, artista, titulo, preview){
	$("#cancionElegida").html(artista + " - " + titulo);
    $("#resultadosBuscarCancion").hide();
	$("#cancionElegida").show();
    $("#pruebaAudio").html(' \
                             <audio controls> \
                                <source src=" ' + preview +  ' " type="audio/mpeg" id="audio"> \
                                Your browser does not support the audio element. \
                            </audio> '
    );
	$("audio").audioPlayer({});
    $("#pruebaAudio").show();
    $url = 'http://aork2.com/' + CancionID;

    $("#botonFacebook").html('<span id="button_1"></span>');
    stWidget.addEntry({
                        "service":"facebook",
                        "element":document.getElementById("button_1"),
                        "url": $url,
                        "title":$compartirTitleFacebook,
                        "type":"large",
                        "text": $compartirText,
                        "image":"http://aork2.com/images/logo.png",
                        "summary": $compartirSummary
                    });
    $("#botonTwitter").html('<span id="button_2"></span>');
    stWidget.addEntry({
                        "service":"twitter",
                        "element":document.getElementById("button_2"),
                        "url": $url,
                        "title": $compartirTitleTwitter,
                        "type":"large",
                        "text": $compartirText,
                        "image":"http://aork2.com/images/logo.png",
                        "summary": $compartirSummary
                    });

    $("#botonWhatsapp").html('<span id="button_3"></span>');
    stWidget.addEntry({
                        "service":"whatsapp",
                        "element":document.getElementById("button_3"),
                        "url": $compartirText + " " + $url,
                        "title": $compartirTitleWhatsapp,
                        "type":"large",
                        "text": $compartirText,
                        "image":"http://aork2.com/images/logo.png",
                        "summary": $compartirSummary
                    });

    $("#botonCompartir").html('<span id="button_4"></span>');
    stWidget.addEntry({
                        "service":"sharethis",
                        "element":document.getElementById("button_4"),
                        "url": $url,
                        "title": $compartirTitleGoogle,
                        "type":"large",
                        "text": $compartirText,
                        "image":"http://aork2.com/images/logo.png",
                        "summary": $compartirSummary
                    });


    $("#explicacionCrear").hide();
    $("#compartir").show();
    $("#botonNoEsCancion").show();
};

// Limpia y prepara la pantalla para hacer una busqueda de canciones.
function limpiarCanciones(){
	$('#resultadosBuscarCancion').html("");
  $("#resultadosBuscarCancion").show();
	$("#cajonBusqueda").val("");
	$("#cajonBusqueda").focus();
  $("#cancionElegida").hide();
  $("#pruebaAudio").html("");
  $("#pruebaAudio").hide();
  $("#cancionElegida").html("");
  $("#compartir").hide();
  $("#divBusqueda").show();
  $("#gifCargando").hide();
  $("#explicacionCrear").show();
  $("#resultadoBusqueda").hide();
  $("#botonNoEsCancion").hide();
};

// Si hemos seleccionado una canción y no es la que deseamos, esta función nos devuelve al listado anterior para no tener que realizar otra búsqueda.
function volverListadoCanciones() {
    $("#cancionElegida").html('');
    $("#cancionElegida").hide();
    $("#pruebaAudio").html('');
    $("#pruebaAudio").hide();
    $url = '';
    $("#botonTwitter").html('');
    $("#botonFacebook").html('');
    $("#botonTelegram").html('');
    $("#botonWhatsapp").html('');
    $("#compartir").hide();
    $("#botonNoEsCancion").hide();
    $("#resultadosBuscarCancion").show();
    $("#explicacionCrear").show();
}

// Función para la búsqueda de una canción o artista. Nos devuelve un listado de canciones.
/*
function buscarCancion(aux){
			limpiarCanciones();
            $("#resultadoBusqueda").show();
            $("#gifCargando").show();
            DZ.api('/search?q='+aux, function(json){
                if (json.data.length > 0) {
                    $("#gifCargando").hide();
                    for (var i=0, len = json.data.length; i<len ; i++)
                    {
                        artista = json.data[i].artist.name.replace(/(['"])/g, "\\$1");
                        cancion = json.data[i].title.replace(/(['"])/g, "\\$1");
                        album = json.data[i].album.title.replace(/(['"])/g, "\\$1");
                        preview = json.data[i].preview;
                        expresion = "elegirEstaCancion('" + json.data[i].id + "','" + artista + "','" + cancion + "','" +  preview + "');"
                        $('#resultadosBuscarCancion').append(
                             '<br /> \
                            <div class="botonCanciones ui-body ui-body-a ui-corner-all" id="' + json.data[i].id + '" onclick="' + expresion + '"> \
                                <div class="ui-grid-a"> \
                                    <br /> \
                                    <div class="ui-block-a"> \
                                        <img src="' + json.data[i].artist.picture + '" class="circle responsive-img" /> \
                                    </div> \
                                    <div class="ui-block-b"> \
                                       <p><br />' + $idiomaArtista + ':'  + json.data[i].artist.name + ' <br />' + $idiomaAlbum + ': ' + json.data[i].album.title + ' <br />' + $idiomaTitulo + ': ' + json.data[i].title + '</p> \
                                    </div> \
                                </div><br />\
                            </div><br />' );
                    }
                } else {
                    $('#resultadosBuscarCancion').html($idiomaSinResultado);
                }
			});
            $("#divBusqueda").hide();
};
*/

function buscarCancion(aux){
    limpiarCanciones();
    $("#resultadoBusqueda").show();
    $("#gifCargando").show();
    DZ.api('/search?q='+aux, function(json){
        if (json.data.length > 0) {
          for (var i=0, len = json.data.length; i<len ; i++) {
                artista = json.data[i].artist.name.replace(/(['"])/g, "\\$1");
                cancion = json.data[i].title.replace(/(['"])/g, "\\$1");
                album = json.data[i].album.title.replace(/(['"])/g, "\\$1");
                preview = json.data[i].preview;
                expresion = "elegirEstaCancion('" + json.data[i].id + "','" + artista + "','" + cancion + "','" +  preview + "');";
				$('#resultadosBuscarCancion').hide();
                $('#resultadosBuscarCancion').append(
                  '<div class="row"> \
				    <div class="col s10 offset-s1 m8 offset-m2 l6 offset-l3"> \
		              <div class="botonCanciones card" id="' + json.data[i].id + '" onclick="' + expresion + '"> \
			           	<div class="card-image"> \
			                <img src="' + json.data[i].artist.picture_medium + '"/> \
							<div class="card-artista"> \
								<span class="nombreArtistaText black-text truncate"><b>' + json.data[i].artist.name + '</b></span><br /> \
								<span class="nombreCancionText black-text"><b><i>' + json.data[i].title + '</i></b></span> \
							</div> \
			            </div> \
		              </div>	\
					</div> \
				</div>' );
            }
            $("#gifCargando").hide();
            $('#resultadosBuscarCancion').show();
        } else {
					$("#gifCargando").hide();
					$('#resultadosBuscarCancion').html($idiomaSinResultado);
					$('#resultadosBuscarCancion').show();
        }
			});
      $("#divBusqueda").hide();
};



// Cuando entramos al juego a través de un reto que nos han mandado, esta función obtiene la canción del reto y nos lleva a la página de juego.
function insertarReto (idTrack) {
    DZ.api('/track/'+idTrack, function(json){
        if (json.preview) {
            $track = json;
            $puntos = parseInt(localStorage.getItem("puntos"));
            $("#misPuntos").html($puntos);
            $("#miVida").html($vida);
            iniciarReto();
            $.mobile.changePage("#paginaJuego",{});
        } else {
            alert ($idiomaSinCancion);
            //setTimeout($.mobile.changePage("/"), 10);
            setTimeout(window.open('http://aork2.com', '_self'),10);
        }
      });
}


function sumaUnReto() {
    $nReto = parseInt(localStorage.getItem("nReto"));
    if (!$nReto) {
        $nReto = 0;
    }
    $nReto++;
    localStorage.setItem("nReto", $nReto);

}

// Función que prepara la pantalla de juego y lo inicia.
function iniciarReto() {
    $(".botonLetra").removeClass("pulsada");
    $(".botonLetra").show();
    $("#fondo").css("background-image", 'url(../images/6.png)');
    sumaUnReto();
    $esReto = true;
    $aciertosReto = parseInt(localStorage.getItem("aciertosReto"));
    $titulo = $track.title;
    $titulo = $titulo.toUpperCase();
    $("#insertarAudio").html(' \
                             <audio controls> \
                                <source src=" ' + $track.preview +  ' " type="audio/mpeg" id="audio"> \
                                Your browser does not support the audio element. \
                            </audio> '
    );
	$("audio").audioPlayer({});
    $vida = 6;
    $puntos = parseInt(localStorage.getItem("puntos"));
    $aux = "";
    for (var x=0; x < $titulo.length; x++) {
        if(/[A-Z]/.test($titulo.charAt(x))){
            $aux = $aux + "_";
        } else {
            $aux = $aux + $titulo[x];
        }
    }
    $("#adivina").html($aux);

    centrarVerticalmente("#divJuego","#bloqueJuego");
    $hacerTourJuego = localStorage.getItem("tourJuego");
    if (!$hacerTourJuego) {
        tourJuego();
        localStorage.setItem("tourJuego", true);
    }
    prepararPaginaAcierto();
};


// Al entrar al juego desde un enlace, esta función comprueba si se trata de un reto, tanto de canción individual o reto de artista.
function comprobarReto () {
    if ($idTrackReto != 0) {
        insertarReto($idTrackReto);
    } else if ($idArtistaReto != 0) {
        DZ.api('/artist/' + $idArtistaReto, function(json){
            if (json) {
                $tracklist = json.tracklist;
                $imagenArtista = json.picture;
                $deezerArtista = json.link;
                //$("#imagenRetoArtista").html("<a href='" + $deezerArtista + "'><img src='" + $imagenArtista + "' alt='imagen artista' /></a>");
								$("#imagenRetoArtista").attr("src", json.picture_big);
                $("#nombreRetoArtista").html(json.name);
								//$("#enlaceArtista").attr("href", $deezerArtista);

                //redireccionamos las imagenes de Deezer y Google Play ya que al entrar con dirección aork2.com/artista/xxx buscaría las imágenes en
                //aork2.com/artista/deezer.jpg y aork2.com/artista/Google_play.png

                $("#enlaceDeezer").attr("src", "http://aork2.com/images/deezer.jpeg");
                $("#logoPlay").attr("src", "http://aork2.com/images/Google_play2.png");
                $("#escucharListaArtista").attr("src", "http://aork2.com/images/deezer.jpeg");
                sumaUnReto();
                $esRetoArtista = true;
                centrarVerticalmente("#divAceptarArtista","#bloqueAceptarArtista");
                $.mobile.changePage("#paginaAceptarArtista",{});
            }
            else {
                alert ("Lo siento, no hemos encontrado al artista");
            }
        });
    } else {
        obtenerRetosDiarios ();
         centrarVerticalmenteInicio();
        $.mobile.changePage("#paginaInicio",{});
        $hacerTour = localStorage.getItem("tourPortada");
        if (!$hacerTour) {
            tourPortada();
            localStorage.setItem("tourPortada", true);
        }
    }
}
