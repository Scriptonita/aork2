function centrarVerticalmente (div1, div2) {
    $(div1).css({"height": $(window).height()});
    $(div1).addClass("valign-wrapper");
    $(div2).addClass("valign");
}

function centrarVerticalmenteInicio () {
    $("#containerPaginaInicio").css({"height": $(window).height()});
    $("#divInicio").css({"height": $(window).height()*0.9});
    $("#divInicio").addClass("valign-wrapper");
    $("#menuInicio").addClass("valign");
    $(".botonesInicio").css({"height": $("#divInicio").height()/5});
    $(".nivel_solitario").css({"height": $(".botonesInicio").height()*0.6});
    $(".personitas_inicio").css({"height": $(".botonesInicio").height()});
    $(".personas_inicio").css({"height": $(".botonesInicio").height()*1.07});
    $("#durmiendo").css({"height": $(".botonesInicio").height()*1.06});
    $("#mesa_dj").css({"height": $(".botonesInicio").height()*0.7});
    //$("#candado_nivel_solitario").addClass("responsive-img");
}

function centrarVerticalmenteNiveles () {
  $("#containerPaginaNiveles").css({"height": $(window).height()});
  $("#divNiveles").css({"height": $(window).height()});
  $("#botonNivel").css({"height": $(window).height()*0.25});
  $("#divNiveles").addClass("valign-wrapper");
  $("#centrarNiveles").addClass("valign");
  $("#nivel1").css({"height": "100%"});
}

function centrarVerticalmenteJuego() {
  $("#paginaJuego").css({"height": $(window).height()});
  $("#containerJuego").css({"height": $(window).height()});
  $("#fondoTotal").css({"height": $(window).height()});
  $("#fondoTotal").addClass("valign-wrapper");
  $("#divJuego").addClass("valign");
}

function centrarVerticalmentePaginaAcierto() {
  $("#paginaAcierto").css({"height": $(window).height()});
  $("#containerPaginaAcierto").css({"height": $(window).height()});
  $("#containerPaginaAcierto").addClass("valign-wrapper");
  $("#centrarPaginaAcierto").addClass("valign");
  $("#enlaceDeezer").css({"height": $(window).height()/10});
  $("#enviarCancionAcierto").css({"height": $(window).height()/10});
}

function centrarVerticalmenteBuscarArtistas() {
  $("#paginaBuscarArtista").css({"height": $(window).height()});
  $("#containerBuscarArtista").css({"height": $(window).height()});
  $("#containerBuscarArtista").addClass("valign-wrapper");
  $("#centrarBuscarArtista").addClass("valign");
}

function centrarVerticalmenteEstilos() {
  $("#paginaEstilos").css({"height": $(window).height()});
  $("#divEstilos").css({"height": $(window).height()});
  $("#divEstilos").addClass("valign-wrapper");
  $("#contenedorEstilos").addClass("valign");
}

function centrarVerticalmenteFinDeNivel() {
  $("#pageNoMas").css({"height": $(window).height()});
  $("#divNoMas").css({"height": $(window).height()});
  $("#divNoMas").addClass("valign-wrapper");
  $("#centrarNoMas").addClass("valign");
}

function centrarVerticalmenteFinSeleccion() {
  $("#paginaFinEstilo").css({"height": $(window).height()});
  $("#estiloResultado").css({"height": $(window).height()});
  $("#estiloResultado").addClass("valign-wrapper");
  $("#estiloResultadoCentrar").addClass("valign");
}

function centrarVerticalmenteConCabecera (div1, div2, cabecera) {
    $(div1).css({"height": $(window).height() - $(cabecera).height()});
    $(div1).addClass("valign-wrapper");
    $(div2).addClass("valign");
    //$(".botonHome").css({"height": $(cabecera).height() * 0.8});
}

function centrarVerticalmenteConCabeceraYPie (div1, div2, cabecera, pie) {
    $(div1).css({"height": $(window).height() - ($(cabecera).height() * 2.7)});
    $(div1).addClass("valign-wrapper");
    $(div2).addClass("valign");
    //$(".botonHome").css({"height": $(cabecera).height() * 0.8});
}

function abrirEnlaceExterno (urlExt) {
    if (typeof navigator !== "undefined" && navigator.app) {
        // Mobile device.
        navigator.app.loadUrl(urlExt, {openExternal: true});
    } else {
        // Possible web browser
        window.open(urlExt, "_blank");
    }
}

function preparaRetoDiario () {
    $idRD = $retosDiarios.data[$indiceRD].id; //id del artista del reto diario
    $("#imgRetoDiario").css('background-image', 'url(https://api.deezer.com/artist/' + $idRD + '/image)');
    $("#imgRetoDiario").css('background-repeat', 'no-repeat');
    $("#imgRetoDiario").css('background-size', '85% 85%');
    $("#imgRetoDiario").css('background-position', 'center center');
    $("#imgRetoDiario").css('background-origin', 'content-box');
    $("#imgRetoDiario").css('background-color', 'white');
    //$("#imgRetoDiario").css("background-image", 'url(https://api.deezer.com/artist/' + $idRD + '/image)');
    //$("#imgRetoDiario").css("background-size", 'contain');
    $("#retoPortadaAutor").html($retosDiarios.data[$indiceRD].artista);
    $("#retoPortadaComentario").html($retosDiarios.data[$indiceRD].propone);
    //$("#imgRetoDiario").attr("src", "/images/play2.png");
}
/*
function preparaRetoDiario () {
    $("#imgRetoDiario").attr('src', '/images/cargando.gif');
    $idRD = $retosDiarios.data[$indiceRD].id; //id del artista del reto diario
    $("#imgRetoDiario").css("background-image", 'url(https://api.deezer.com/artist/' + $idRD + '/image)');
    $("#imgRetoDiario").css("background-size", 'contain');
    $("#retoPortadaAutor").html($retosDiarios.data[$indiceRD].artista);
    $("#retoPortadaComentario").html($retosDiarios.data[$indiceRD].propone);
    $("#imgRetoDiario").attr("src", "/images/play2.png");
}
*/
function obtenerRetosDiarios () {
    $.getJSON( "js/retos.json", function(){} )
        .done(function( json ) {
            $retosDiarios = json;
            $indiceRD = 0;
            $("#imgRetoDiario").attr("src", "/images/play2.png");
            preparaRetoDiario ();
        })
        .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            alert( "Reto diario - Request Failed: " + err );
        });
    $("#retoAnterior").attr("src", "/images/flecha-derecha-inactiva.png");
}

function desbloquearSiguienteNivel () {
  var aux = $nivelJugando + 1;
  if (localStorage.getItem("desbloquearNivel" + aux)) {
    console.log ("Nivel " + aux + " ya estaba desbloqueado");
    console.log ("Índice nivel " + aux + " = " + localStorage.getItem("indiceNivel" + $nivelJugando));
  } else {
    localStorage.setItem("desbloquearNivel" + aux, true);
    localStorage.setItem("indiceNivel" + aux, 0);
    localStorage.setItem("aciertosNivel" + aux, 0);
    console.log ("Se ha desbloqueado el Nivel " + aux);
  }
}

function comprobarBloqueoNivel (x) {
  var desbloqueado = false;
  if (localStorage.getItem("desbloquearNivel" + x)) {
    console.log("Entras al nivel " + x);
    $nivelJugando = x;
    desbloqueado = true;
  } else {
    console.log("Nivel " + x + " bloqueado");
  }
  return desbloqueado;
}
/*
function pantallaNivelesBloqueos () {
  $("#nAcertadasN" + x).html(parseInt(localStorage.getItem("puntos")));
  $("#nFalladasN" + x).html();
  for (x=2; x < 7; x++) {
    if (localStorage.getItem("desbloquearNivel" + x)) {
      $("#img_nivel_" + x).attr("src", "/images/nivel_abierto.png");
      $("#nAcertadasN" + x).html();
      $("#nFalladasN" + x).html();
    }
  }
}
*/
function pantallaNiveles () {
  var indice1 = parseInt(localStorage.getItem("indiceNivel1"));
  var aciertos1 = parseInt(localStorage.getItem("aciertosNivel1"));
  $("#nCancionesN1").html(indice1);
  $("#nAcertadasN1").html(aciertos1);
  $("#nFalladasN1").html(indice1 - aciertos1);
  // Si el segundo nivel está desbloqueado comprobamos todos, si no nos lo ahorramos
  if (localStorage.getItem("desbloquearNivel2")) {
    for (x=2; x < 7; x++) {
      var indice = parseInt(localStorage.getItem("indiceNivel" + x));
      var aciertos = parseInt(localStorage.getItem("aciertosNivel" + x));
      if (localStorage.getItem("desbloquearNivel" + x)) {
        $("#img_nivel_" + x).attr("src", "/images/nivel_abierto.png");
        $("#nCancionesN" + x).html(indice);
        $("#nAcertadasN" + x).html(aciertos);
        $("#nFalladasN" + x).html(indice - aciertos);
      }
    }
  }
}



function PlaySound() {
  var x = document.createElement("audio");
  x.src ="/audios/boton.wav";
  x.play();
}

/*
function cancionesRepetidas () {
    //$todas = null;
    var ind = 1;
    var total = 0;
    $.getJSON( "js/niveles/_nivel1.json", function(){} )
                    .done(function( json ) {
                        $todas = json;
                        total = json.data.length;
                    })
                    .fail(function( jqxhr, textStatus, error ) {
                        var err = textStatus + ", " + error;
                        alert( "Request Failed: " + err );
              });

    for (x=2; x<7; x++) {
        $.getJSON( "js/niveles/_nivel" + x + ".json", function(){} )
            .done(function( json ) {
                        var aux = json;
                        ind++;
                        for (var z=0; z < json.data.length; z++ ) {
                            $todas.data.push(json.data[z]);

                            for (var y = 0; y < $todas.data.length-1; y++) {
                                if ($todas.data[y].id == json.data[z].id) {
                                    console.log ("REPETIDA: nivel " + x + " ... id = " + json.data[z].id);
                                }
                            }

                        }
                        console.log ("Nivel " + ind + ": Se han añadido " + json.data.length + " canciones");
                        total += json.data.length;
                        //console.log("En total debe haber " + total + " canciones.");
                  })
            .fail(function( jqxhr, textStatus, error ) {
                      var err = textStatus + ", " + error;
                      alert( "Request Failed: " + err );
              });
    }
}
*/
function emulaboton() {
  centrarVerticalmente("#divFinRetoArtista", "#bloqueFinRetoArtista");
  //admob.showInterstitialAd();
  $.mobile.changePage("#paginaFinRetoArtista",{});

  }


$(document).on('pageinit', function () {
    //$.mobile.ajaxEnabled = false;

    //$('.carousel.carousel-slider').carousel({fullWidth: true});
    //emulaboton();
    // Página del Menú Principal
    //$(".botonHomeCabecera").css({"height": $("#cabeceraAcierto").height() * 0.8});

    $("#botonInicioJugar").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        centrarVerticalmenteNiveles();
        pantallaNiveles();
        $.mobile.changePage("#paginaNiveles",{});
    });

    $(".botonNivel").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        if (!$enTour) {
            $tracks = {};
            var desbloqueado = false;
            switch ($(this).attr("id")) {
              case "nivel1":
                $nivelJugando = 1;
                desbloqueado = true;
                break;
              case "nivel2":
                desbloqueado = comprobarBloqueoNivel (2);
                break;
              case "nivel3":
                desbloqueado = comprobarBloqueoNivel (3);
                break;
              case "nivel4":
                desbloqueado = comprobarBloqueoNivel (4);
                break;
              case "nivel5":
                desbloqueado = comprobarBloqueoNivel (5);
                break;
              case "nivel6":
                desbloqueado = comprobarBloqueoNivel (6);
                break;
              default:
                break;
            }
            if (desbloqueado) {
              $.getJSON( "js/niveles/" + $(this).attr("id") + ".json", function(){} )
                  .done(function( json ) {
                      $tracks = json;
                      //$tracks = $tracksInd;
                      $tipoJuego = "1";
                      $esReto = false;
                      //$indice = 0;
                      $puntos = parseInt(localStorage.getItem("puntos"));
                      if (!$puntos) {
                          $puntos = 0;
                      }
                      $("#miVida").html($vida);
                      $("#misPuntos").html($puntos);
                      $indice = parseInt(localStorage.getItem("indiceNivel" + $nivelJugando));
                      if (!$indice) {
                          $indice = 0;
                      }
                      // Para prevenir algún error que haga que el índice sea mayor que el número de canciones
                      // lo que provocaría un error en $titulo = $track.title que detendría el juego.
                      // Redirigimos a PageNoMas. En caso distinto seguimos con el juego.
                      if ($indice >= $tracks.data.length) {
                          $("#noMasJuegosGanados").html($aciertos + "/" + $indice);
                          $("#noMasPuntos").html($puntos);
                          centrarVerticalmenteFinDeNivel();
                          $.mobile.changePage("#pageNoMas",{transition: "flip"});
                      } else {
                          $aciertos = parseInt(localStorage.getItem("aciertosNivel" + $nivelJugando));
                          if (!$aciertos) {
                              $aciertos = 0;
                          }
                          iniciarJuego();
                          centrarVerticalmenteJuego();
                          $.mobile.changePage("#paginaJuego",{});
                          setTimeout("prepararPaginaAcierto()",3000);
                      }

                  })
                  .fail(function( jqxhr, textStatus, error ) {
                      var err = textStatus + ", " + error;
                      alert( "Request Failed: " + err );
                      $.mobile.changePage("#paginaInicio",{});

              });
              $.mobile.changePage("#paginaCargando",{});
            }
        }
    });

    $("#botonInicioArtista").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        if (!$enTour) {
            $tipoJuego = "3";
            $("#compartirBuscarArtista").hide();
            $("#divResultadoBuscarArtista").hide();
            $("#divBuscarArtista").show();
            centrarVerticalmenteBuscarArtistas();
            $.mobile.changePage("#paginaBuscarArtista",{});
        }
    });

    $("#botonInicioEstilos").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        if (!$enTour) {
            $esReto = false;
            centrarVerticalmenteEstilos();
            $.mobile.changePage("#paginaEstilos",{});
        }
    });

    $("#botonInicioCrear").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        if (!$enTour) {
            $tipoJuego = "2";
            $("#compartir").hide();
            $("#resultadoBusqueda").hide();
            $("#divBusqueda").show();
            $.mobile.changePage("#paginaCrear",{});
        }
    });

    $("#imgRetoDiario").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        if (!$enTour) {
            $tipoJuego = "3";
            $idTrackReto = 0;
            $idArtistaReto = $idRD;
            comprobarReto();
        }
    });

    /*
    $("#imgCC").click(function(event){
        event.stopImmediatePropagation();
        centrarVerticalmente("#divLicencia", "#bloqueLicencia");
        $.mobile.changePage("#paginaLicencia",{});
    });*/

    $("#retoAnterior").click(function(event){
        event.stopImmediatePropagation();
        if (!$enTour) {
            if ($indiceRD > 0) {
                PlaySound();
                //$("#retoAnterior").removeClass("noHayMas");
                $("#retoAnterior").attr("src", "/images/flecha-derecha-activa.png");
                $indiceRD--;
                preparaRetoDiario ();
            }
            if ($indiceRD == 0) {
                //$("#retoAnterior").addClass("noHayMas");
                $("#retoAnterior").attr("src", "/images/flecha-derecha-inactiva.png");
            }
            //$("#retoPosterior").removeClass("noHayMas");
            $("#retoPosterior").attr("src", "/images/flecha-izquierda-activa.png");
        }
    });

    $("#retoPosterior").click(function(event){
        event.stopImmediatePropagation();
        if (!$enTour) {
            if ($indiceRD < $retosDiarios.data.length-1) {
                PlaySound();
                //$("#retoPosterior").removeClass("noHayMas");
                $("#retoPosterior").attr("src", "/images/flecha-izquierda-activa.png");
                $indiceRD++;
                preparaRetoDiario ();
            }
            if ($indiceRD == $retosDiarios.data.length-1) {
                //$("#retoPosterior").addClass("noHayMas");
                $("#retoPosterior").attr("src", "/images/flecha-izquierda-inactiva.png");
            }
            //$("#retoAnterior").removeClass("noHayMas");
            $("#retoAnterior").attr("src", "/images/flecha-derecha-activa.png");
        }
    });

    $("#promo").click(function(event){
      event.stopImmediatePropagation();
      abrirEnlaceExterno($enlacePromo);
    });

    // =========================================================================================================
    // =========================================================================================================

    // PageNoMas - Eventos en los botones de la página

    $("#botonNoMasSalir").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $.mobile.changePage("#paginaInicio",{});
    });

    $("#botonNoMasReiniciar").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        localStorage.setItem("indiceNivel" + $nivelJugando, 0);
        localStorage.setItem("aciertosNivel" + $nivelJugando, 0);
        pantallaNiveles();
        $.mobile.changePage("#paginaNiveles",{});
    });

    // =========================================================================================================
    // =========================================================================================================

    // PageNoMasNiveles - Eventos en los botones de la página

    $("#botonNoMasNivelesSalir").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $.mobile.changePage("#paginaInicio",{});
    });

    $("#botonNoMasNivelesReiniciar").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        localStorage.setItem("indiceNivel" + $nivelJugando, 0);
        localStorage.setItem("aciertosNivel" + $nivelJugando, 0);
        $.mobile.changePage("#paginaInicio",{});
    });

    $("#botonNoMasNivelesRetar").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $("#compartir").hide();
        $("#resultadoBusqueda").hide();
        $.mobile.changePage("#paginaCrear", {});
    });

    $("#botonNoMasNivelesEstilo").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        //mostrarEstilos();
        $esReto = false;
        centrarVerticalmenteConCabecera("#divEstilos","#contenedorEstilos","#cabeceraEstilos");
        $.mobile.changePage("#paginaEstilos",{});
    });

    // =========================================================================================================
    // =========================================================================================================



    $(".botonAyuda").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $("#infoJuegosGanados").html($aciertos + "/" + $indice);
        $("#infoPuntos").html($puntos);
        centrarVerticalmente("#divInfo","#centrarInfo");
        $.mobile.changePage("#pageInfo",{transition: "flow", changeHash: false});
    });

    $("#botonInfoSalir").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        if ($tipoJuego == "1") {
            localStorage.setItem("indiceNivel" + $nivelJugando, $indice+1);
        }
        centrarVerticalmente("#divInicio","#menuInicio");
        $.mobile.changePage("#paginaInicio",{});
    });

    $("#botonInfoSeguir").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $.mobile.changePage("#paginaJuego", {});
    });

    $("#botonInfoRetar").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $("#compartir").hide();
        $("#resultadoBusqueda").hide();
        $.mobile.changePage("#paginaCrear", {});
    });

    /*$(".botonHome").click(function(event){
        event.stopImmediatePropagation();
        centrarVerticalmente("#divInicio","#menuInicio");
        $.mobile.changePage("#paginaInicio",{});
    });*/

    $(".botonHome").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        centrarVerticalmente("#divVolver","#centrarVolver");
        $.mobile.changePage("#volverInicio",{transition: "flow"});
    });

    $("#botonVolverSi").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $("#insertarAudio").html('');
        $("#retoAudio").html('');
        if ($tipoJuego == "1") {
            $indice++;
            localStorage.setItem("indiceNivel" + $nivelJugando, $indice);
        }
        if ($esReto) {
            $nReto++;
            localStorage.setItem("nReto", $nReto);
            window.open('http://aork2.com', '_self');
        } else {
            centrarVerticalmente("#divInicio","#menuInicio");
            $.mobile.changePage("#paginaInicio",{});
        }

    });

    $("#botonVolverNo").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $.mobile.changePage("#paginaJuego", {});
    });

    $(".botonHomeCabecera").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        // Si $esReto o $esRetoArtista redirigimos a aork2.com para que cargue de nuevo la web con la URL limpia,
        // si no podría causar problemas posteriormente.
        if ($esReto || $esRetoArtista) {
            window.open('http://aork2.com', '_self');
        } else {
            centrarVerticalmente("#divInicio","#menuInicio");
            $.mobile.changePage("#paginaInicio",{});
        }

    });
/*
    $(".botonHomeBajo").click(function(event){
        event.stopImmediatePropagation();
        // Si $esReto o $esRetoArtista redirigimos a aork2.com para que cargue de nuevo la web con la URL limpia,
        // si no podría causar problemas posteriormente.
        if ($esReto || $esRetoArtista) {
            window.open('http://aork2.com', '_self');
        } else {
            centrarVerticalmente("#divInicio","#menuInicio");
            $.mobile.changePage("#paginaInicio",{});
        }
    });
*/

    // Página del Juego

    $(".botonLetra").click(function(event){
        event.stopImmediatePropagation();
        if (!$enTour) {
             var letra = $(this).html();
            console.log ("Has pulsado: " + letra);
            if (!$(this).hasClass("pulsada")) {
                $(this).addClass("pulsada");
                $(this).removeClass("z-depth-2");
                $(this).addClass("z-depth-1");
                var encontrado = comprobarLetra(letra);
                if (encontrado) {
                  $(this).addClass("pulsadaOk");
                } else {
                  $(this).addClass("pulsadaKo");
                }
            }
            //$(this).hide();
        }
    });

    // Página estilos
    $(".botonEstilo").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $("#botonSiguiente").show();
        $("#botonRetar").hide();
        $tipoJuego = "2";
        $aciertos = 0;
        $tracksEstilo = {};
        //estiloId = $(this)[0].id;
        //$estilo = $(this).html();
        $estilo = $(this)[0].id;
        $("#botonSeleccionAcabada").html($(this).html());
        console.log("estilo: " + $estilo);
        $.getJSON( "js/seleccion/" + $estilo + ".json", function(){} )
            .done(function( json ) {
                $tracksEstilo = json.tracks.data;
                for (var x=0; x < json.tracks.data.length; x++) {
                    console.log("$tracksEstilo: " + $tracksEstilo[x].id);
                    console.log("$tracksEstilo: " + $tracksEstilo[x].title);
                }
                $indiceEstilo = 0;
                iniciarJuegoEstilo();
                centrarVerticalmente("#divJuego","#bloqueJuego");
                $.mobile.changePage("#paginaJuego",{});
                if ($estilo == "esp") {
                  tourEspecial();
                }
                setTimeout("prepararPaginaAcierto()",3000);
            })
            .fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                alert( "Request Failed: " + err );
            });
    });

    /*
    $(".botonEstilo").click(function(event){
        event.stopImmediatePropagation();
        $("#botonSiguiente").show();
        $("#botonRetar").hide();
        $tipoJuego = "2";
        $aciertos = 0;
        $tracksEstilo = {};
        estiloId = $(this)[0].id;
        $estilo = $(this).html();
        console.log("estilo: " + estiloId);
        DZ.api('editorial/' + estiloId +'/charts', function(json){
            $tracksEstilo = json.tracks.data;
            for (var x=0; x < json.tracks.data.length; x++) {
                console.log("$tracksEstilo: " + $tracksEstilo[x].id);
                console.log("$tracksEstilo: " + $tracksEstilo[x].title);
            }
            $indiceEstilo = 0;
            iniciarJuegoEstilo();
        });
        centrarVerticalmente("#divJuego","#bloqueJuego");
        $.mobile.changePage("#paginaJuego",{});
        setTimeout("prepararPaginaAcierto()",3000);
    });


    */

    // Página Acierto
    // tipos de juego:
    //        1-Normal(primer botón);
    //        2-Categorías(tercer botón)
    //        3-Juego por Artista
    $("#botonSiguiente").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $("#misPuntos").html($puntos);
        if ($tipoJuego == "1") {
            if ($indice < $tracks.data.length-1) {
                $indice++;
                /*
                var resto = $indice % 10;
                if (resto == 0) {
                    admob.showInterstitialAd();
                }
                */
                iniciarJuego();
                $.mobile.changePage("#paginaJuego",{});
                setTimeout("prepararPaginaAcierto()",3000);
            } else {
                var auxInd = $indice + 1;
                $("#finAciertos").html($aciertos + "/" + auxInd);
                $("#textoNivelJugando").html($nivelJugando);
                if ($nivelJugando <= 5) {
                  $("#textoNivelDesbloqueado").html($nivelJugando + 1);
                  desbloquearSiguienteNivel();
                } else {
                  $("#proximoNivel").html("Fín del Juego");
                }
                centrarVerticalmenteConCabecera("#bloquePaginaFin", "#divPaginaFin", "#cabeceraFinJuego");
                $.mobile.changePage("#paginaFin",{});
            }
        } else if ($tipoJuego == "2") {
            if ($indiceEstilo < $tracksEstilo.length-1) {
                $indiceEstilo++;
                iniciarJuegoEstilo();
                console.log("$indiceEstilo: " + $indiceEstilo + " || $tracksEstilo.length: " + $tracksEstilo.length);
                $.mobile.changePage("#paginaJuego",{});
                setTimeout("prepararPaginaAcierto()",3000);
            } else {
                $("#estiloAcabado").html($estilo);
                $("#estiloAciertos").html($aciertos + "/" + $tracksEstilo.length);
                var bono = $aciertos * 10;
                $("#totalBonoEstilo").html($aciertos + " x 10 = " + bono);
                var total = $puntos + bono
                $("#totalSumaEstilo").html($puntos + " + " + bono + " = " + total );
                $puntos = total;
                localStorage.setItem("puntos", $puntos);
                //centrarVerticalmenteConCabecera ("#estiloResultado", "#estiloResultadoCentrar", "#cabeceraFinEstilo");
                //admob.showInterstitialAd();
                centrarVerticalmenteFinSeleccion();
                $.mobile.changePage("#paginaFinEstilo",{});
            }
        } else if ($tipoJuego == "3") {
           if ($indice < $tracks.data.length-1) {
                $indice++;
                iniciarJuego();
                $.mobile.changePage("#paginaJuego",{});
                setTimeout("prepararPaginaAcierto()",3000);
            } else {
                var aux = $indice + 1;
                $("#mensajeFRA2").html($aciertosReto + "/" + aux);
                if ($aciertosReto == $indice) {
                    $("#puntosExtraFRA2").html("30");
                    $puntos += 30;
                } else if ($aciertosReto >= (aux/2)) {
                    $("#puntosExtraFRA2").html("15");
                    $puntos += 15;
                } else {
                    $("#puntosExtraFRA2").html("0");
                }
                localStorage.setItem("puntos", $puntos);
                $("#imagenFinRetoArtista").html("<a href='" + $deezerArtista + "'><img src='" + $imagenArtista + "' alt='imagen artista' /></a>");
                centrarVerticalmente("#divFinRetoArtista", "#bloqueFinRetoArtista");
                //admob.showInterstitialAd();
                $.mobile.changePage("#paginaFinRetoArtista",{});
            }
        }
    });
/*
    $("#cuadroAndroid").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        window.open('https://play.google.com/store/apps/details?id=com.aork2.app', '_blank');
    });
*/
    $("#enviarCancionAcierto").click(function(event){
      event.stopImmediatePropagation();
      $url = 'http://aork2.com/' + $track.id;
      $("#botonFacebookAcierto").html('<span id="button_1"></span>');
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
      $("#botonTwitterAcierto").html('<span id="button_2"></span>');
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

      $("#botonWhatsappAcierto").html('<span id="button_3"></span>');
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

      $("#botonCompartirAcierto").html('<span id="button_4"></span>');
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

      $('#compartirEstaCancion').modal('open');
    });

    // Página Acierto Reto
    $("#botonRetar").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $("#compartir").hide();
        $("#resultadoBusqueda").hide();
        $("#divBusqueda").show();
        $.mobile.changePage("#paginaCrear",{});
    });

    $("#botonFin").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        if ($nivelJugando == 6) {
            centrarVerticalmente("#divNoMasNiveles", "#centrarNoMasNiveles");
            $.mobile.changePage("#pageNoMasNiveles",{});
        } else {
            pantallaNiveles();
            $.mobile.changePage("#paginaNiveles",{});
        }

    });

    $("#botonFinEstilos").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $.mobile.changePage("#paginaEstilos",{});
    });

    // Pagina Aceptar Reto Artista

    $("#botonAceptarRetoArtista").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $tipoJuego = "3";
        $aciertos = 0;
        $puntos = parseInt(localStorage.getItem("puntos"));
        $("#misPuntos").html($puntos);
        $.mobile.changePage("#paginaCargando",{});
        jugarEsteArtista (null, $tracklist, $imagenArtista);
    });

    $("#botonSalirRetoArtista").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        window.open('http://aork2.com', '_self');
    });

    // Página Fín Reto Artista

    $("#botonIrRetarArtista").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $tipoJuego = "3";
        $("#compartirBuscarArtista").hide();
        $("#divResultadoBuscarArtista").hide();
        $("#divBuscarArtista").show();
        $.mobile.changePage("#paginaBuscarArtista",{});
    });

    $("#escucharListaArtista").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        window.open('http://www.deezer.com/artist/' + $idArtistaReto + '?app_id=158051', '_blank');
    });

    $("#botonSalirFinRetoArtista").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        window.open('http://aork2.com', '_self');
    });

    $(".botonCaptura").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        navigator.screenshot.save(function(error,res){
        if(error){
            console.error(error);
        }else{
            //alert('ok ' + res.filePath); //should be path/to/myScreenshot.jpg
            $captura = res.filePath;
            $("#imagenCapturada").attr("src", $captura);
            centrarVerticalmente("#divCaptura", "#centrarCaptura");
            $.mobile.changePage("#paginaCaptura",{});
          }
        },'jpg',50,'aork2');
    });

    $("#botonVolverCaptura").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $.mobile.changePage("#paginaAcierto",{});
    });

    $("#botonCapTwitter").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        window.plugins.socialsharing.shareViaTwitter($compartirCaptura, 'file://' + $captura, 'http://aork2.com', function() {sumaCompartir(10)}, function(errormsg){alert("Lo sentimos, ha habido un error.")});
    });

    $("#botonCapFacebook").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        window.plugins.socialsharing.shareViaFacebook($compartirCaptura, 'file://' + $captura, 'http://aork2.com', function() {sumaCompartir(10)}, function(errormsg){alert("Lo sentimos, ha habido un error.")});
    });

    $("#botonCapCompartir").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        window.plugins.socialsharing.share(null, $compartirCaptura, 'file://' + $captura, 'http://aork2.com', function() {sumaCompartir(10)}, function(errormsg){alert("Lo sentimos, ha habido un error.")});
    });

    $("#botonCapWhatsapp").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        window.plugins.socialsharing.shareViaWhatsApp($compartirCaptura, 'file://' + $captura, 'http://aork2.com', function() {sumaCompartir(10)}, function(errormsg){alert("Lo sentimos, ha habido un error.")});
    });

    // Pagina Licencia

    $("#logoGitHub").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        abrirEnlaceExterno('https://github.com/Scriptonita/aork2');
    });

    $("#botonSalirLicencia").click(function(event){
        event.stopImmediatePropagation();
        PlaySound();
        $.mobile.changePage("#paginaInicio",{});
    });

});
