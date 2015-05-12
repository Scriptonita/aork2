function centrarVerticalmente (div1, div2) {
    $(div1).css({"height": $(window).height()});
    $(div1).addClass("valign-wrapper");
    $(div2).addClass("valign");
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

$(document).on('pageinit', function () {
    //$.mobile.ajaxEnabled = false;

    // Página del Menú Principal
    $(".botonHomeCabecera").css({"height": $("#cabeceraAcierto").height() * 0.8});

    $("#botonInicioJugar").click(function(event){
        event.stopImmediatePropagation();
        $tracks = {};
        $.getJSON( "js/tracks.json", function(){} )
            .done(function( json ) {
                $tracks = json;
                //$tracks = $tracksInd;
                $tipoJuego = "1";
                $esReto = false;
                //$indice = 0;
                $puntos = parseInt(window.localStorage.getItem("puntos"));
                if (!$puntos) {
                    $puntos = 0;
                }
                $("#miVida").html($vida);
                $("#misPuntos").html($puntos);
                $indice = parseInt(window.localStorage.getItem("indice"));
                if (!$indice) {
                    $indice = 0;
                }
                // Para prevenir algún error que haga que el índice sea mayor que el número de canciones
                // lo que provocaría un error en $titulo = $track.title que detendría el juego.
                // Redirigimos a PageNoMas. En caso distinto seguimos con el juego.
                if ($indice >= $tracks.data.length) {
                    $("#noMasJuegosGanados").html($aciertos + "/" + $indice);
                    $("#noMasPuntos").html("Total de puntos.");
                    centrarVerticalmente("#divNoMas", "#centrarNoMas");
                    $.mobile.changePage("#pageNoMas",{transition: "flip"});
                } else {
                    $aciertos = parseInt(window.localStorage.getItem("aciertos"));
                    if (!$aciertos) {
                        $aciertos = 0;
                    }
                    iniciarJuego();
                    centrarVerticalmente("#divJuego","#bloqueJuego");
                    $.mobile.changePage("#paginaJuego",{});
                    setTimeout("prepararPaginaAcierto()",3000);
                }

            })
            .fail(function( jqxhr, textStatus, error ) {
                var err = textStatus + ", " + error;
                alert( "Request Failed: " + err );
                $.mobile.changePage("#paginaInicio",{});

        });
        window.analytics.trackView('Hacia Juego Individual')
        $.mobile.changePage("#paginaCargando",{});
    });

    $("#botonInicioArtista").click(function(event){
        event.stopImmediatePropagation();
        $tipoJuego = "3";
        $("#compartirBuscarArtista").hide();
        $("#divResultadoBuscarArtista").hide();
        $("#divBuscarArtista").show();
        window.analytics.trackView('Pantalla Buscar Artista');
        $.mobile.changePage("#paginaBuscarArtista",{});
    });

    $("#botonInicioEstilos").click(function(event){
        event.stopImmediatePropagation();
        $esReto = false;
        centrarVerticalmenteConCabecera("#divEstilos","#contenedorEstilos","#cabeceraEstilos");
        window.analytics.trackView('Pantalla Estilos');
        $.mobile.changePage("#paginaEstilos",{});
    });

    $("#botonInicioCrear").click(function(event){
        event.stopImmediatePropagation();
        $tipoJuego = "2";
        $("#compartir").hide();
        $("#resultadoBusqueda").hide();
        $("#divBusqueda").show();
        window.analytics.trackView('Pantalla Retar');
        $.mobile.changePage("#paginaCrear",{});
    });

    $("#imgCC").click(function(event){
        event.stopImmediatePropagation();
        centrarVerticalmente("#divLicencia", "#bloqueLicencia");
        window.analytics.trackView('Pantalla Licencia');
        $.mobile.changePage("#paginaLicencia",{});
    });

    // =========================================================================================================
    // =========================================================================================================

    // PageNoMas - Eventos en los botones de la página

    $("#botonNoMasSalir").click(function(event){
        event.stopImmediatePropagation();
        $.mobile.changePage("#paginaInicio",{});
    });

    $("#botonNoMasReiniciar").click(function(event){
        event.stopImmediatePropagation();
        window.localStorage.setItem("indice", 0);
        window.localStorage.setItem("aciertos", 0);
        $.mobile.changePage("#paginaInicio",{});
    });

    $("#botonNoMasRetar").click(function(event){
        event.stopImmediatePropagation();
        $("#compartir").hide();
        $("#resultadoBusqueda").hide();
        $.mobile.changePage("#paginaCrear", {});
    });

    $("#botonNoMasEstilo").click(function(event){
        event.stopImmediatePropagation();
        //mostrarEstilos();
        $esReto = false;
        centrarVerticalmenteConCabecera("#divEstilos","#contenedorEstilos","#cabeceraEstilos");
        $.mobile.changePage("#paginaEstilos",{});
    });

    // =========================================================================================================
    // =========================================================================================================

    $(".botonAyuda").click(function(event){
        event.stopImmediatePropagation();
        $("#infoJuegosGanados").html($aciertos + "/" + $indice);
        $("#infoPuntos").html($puntos);
        centrarVerticalmente("#divInfo","#centrarInfo");
        window.analytics.trackView('Pantalla Ayuda');
        $.mobile.changePage("#pageInfo",{transition: "flow", changeHash: false});
    });

    $("#botonInfoSalir").click(function(event){
        event.stopImmediatePropagation();
        if ($tipoJuego == "1") {
            window.localStorage.setItem("indice", $indice+1);
        }
        centrarVerticalmente("#divInicio","#menuInicio");
        $.mobile.changePage("#paginaInicio",{});
    });

    $("#botonInfoSeguir").click(function(event){
        event.stopImmediatePropagation();
        $.mobile.changePage("#paginaJuego", {});
    });

    $("#botonInfoRetar").click(function(event){
        event.stopImmediatePropagation();
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
        centrarVerticalmente("#divVolver","#centrarVolver");
        $.mobile.changePage("#volverInicio",{transition: "flow"});
    });

    $("#botonVolverSi").click(function(event){
        event.stopImmediatePropagation();
        if ($esReto) {
            $nReto++;
            window.localStorage.setItem("nReto", $nReto);
        } else if ($tipoJuego == "1") {
            $indice++;
            window.localStorage.setItem("indice", $indice);
        }
        $("#insertarAudio").html('');
        $("#retoAudio").html('');
        centrarVerticalmente("#divInicio","#menuInicio");
        $.mobile.changePage("#paginaInicio",{});
    });

    $("#botonVolverNo").click(function(event){
        event.stopImmediatePropagation();
        $.mobile.changePage("#paginaJuego", {});
    });

    $(".botonHomeCabecera").click(function(event){
        event.stopImmediatePropagation();
        centrarVerticalmente("#divInicio","#menuInicio");
        $.mobile.changePage("#paginaInicio",{});
    });

    // Página del Juego

    $(".botonLetra").click(function(event){
        event.stopImmediatePropagation();
        var letra = $(this).html();
        console.log ("Has pulsado: " + letra);
        if (!$(this).hasClass("pulsada")) {
            $(this).addClass("pulsada");
            comprobarLetra(letra);
        }
        //$(this).hide();
    });

    // Página estilos
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

    // Página Acierto
    // tipos de juego:
    //        1-Normal(primer botón);
    //        2-Categorías(tercer botón)
    //        3-Juego por Artista
    $("#botonSiguiente").click(function(event){
        event.stopImmediatePropagation();
        $("#misPuntos").html($puntos);
        if ($tipoJuego == "1") {
            if ($indice < $tracks.data.length-1) {
                $indice++;
                var resto = $indice % 10;
                if (resto == 0) {
                    admob.showInterstitialAd();
                }
                iniciarJuego();
                $.mobile.changePage("#paginaJuego",{});
                setTimeout("prepararPaginaAcierto()",3000);
            } else {
                $("#finAciertos").html($aciertos + "/" + $indice);
                window.analytics.trackView('Pantalla Fín Juego Individual');
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
                window.localStorage.setItem("puntos", $puntos);
                centrarVerticalmenteConCabecera ("#estiloResultado", "#estiloResultadoCentrar", "#cabeceraFinEstilo");
                admob.showInterstitialAd();
                window.analytics.trackView('Pantalla Fín Estilo ' + $estilo);
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
                window.localStorage.setItem("puntos", $puntos);
                $("#imagenFinRetoArtista").html("<a href='" + $deezerArtista + "'><img src='" + $imagenArtista + "' alt='imagen artista' /></a>");
                centrarVerticalmente("#divFinRetoArtista", "#bloqueFinRetoArtista");
                admob.showInterstitialAd();
                window.analytics.trackView('Pantalla Fín Artista');
                $.mobile.changePage("#paginaFinRetoArtista",{});
            }
        }
    });

    // Página Acierto Reto
    $("#botonRetar").click(function(event){
        event.stopImmediatePropagation();
        $("#compartir").hide();
        $("#resultadoBusqueda").hide();
        $.mobile.changePage("#paginaCrear",{});
    });

    $("#botonFin").click(function(event){
        event.stopImmediatePropagation();
        $.mobile.changePage("#paginaEstilos",{});
    });

    $("#botonFinEstilos").click(function(event){
        event.stopImmediatePropagation();
        $.mobile.changePage("#paginaEstilos",{});
    });

    // Pagina Aceptar Reto Artista

    $("#botonAceptarRetoArtista").click(function(event){
        event.stopImmediatePropagation();
        $tipoJuego = "3";
        $aciertos = 0;
        $puntos = parseInt(window.localStorage.getItem("puntos"));
        $("#misPuntos").html($puntos);
        $.mobile.changePage("#paginaCargando",{});
        jugarEsteArtista (null, $tracklist, $imagenArtista);
    });

    $("#botonSalirRetoArtista").click(function(event){
        event.stopImmediatePropagation();
        $.mobile.changePage("#paginaInicio",{});
    });

    // Página Fín Reto Artista

    $("#botonIrRetarArtista").click(function(event){
        event.stopImmediatePropagation();
        $tipoJuego = "3";
        $("#compartirBuscarArtista").hide();
        $("#divResultadoBuscarArtista").hide();
        $("#divBuscarArtista").show();
        $.mobile.changePage("#paginaBuscarArtista",{});
    });

    $("#botonSalirFinRetoArtista").click(function(event){
        event.stopImmediatePropagation();
        $.mobile.changePage("#paginaInicio",{});
    });

    $(".botonCaptura").click(function(event){
        event.stopImmediatePropagation();
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
        $.mobile.changePage("#paginaAcierto",{});
    });

    $("#botonCapTwitter").click(function(event){
        event.stopImmediatePropagation();
        window.plugins.socialsharing.shareViaTwitter($compartirCaptura, 'file://' + $captura, 'http://aork2.com', function() {sumaCompartir(10)}, function(errormsg){alert("Lo sentimos, ha habido un error.")});
    });

    $("#botonCapFacebook").click(function(event){
        event.stopImmediatePropagation();
        window.plugins.socialsharing.shareViaFacebook($compartirCaptura, 'file://' + $captura, 'http://aork2.com', function() {sumaCompartir(10)}, function(errormsg){alert("Lo sentimos, ha habido un error.")});
    });

    $("#botonCapCompartir").click(function(event){
        event.stopImmediatePropagation();
        window.plugins.socialsharing.share(null, $compartirCaptura, 'file://' + $captura, 'http://aork2.com', function() {sumaCompartir(10)}, function(errormsg){alert("Lo sentimos, ha habido un error.")});
    });

    $("#botonCapWhatsapp").click(function(event){
        event.stopImmediatePropagation();
        window.plugins.socialsharing.shareViaWhatsApp($compartirCaptura, 'file://' + $captura, 'http://aork2.com', function() {sumaCompartir(10)}, function(errormsg){alert("Lo sentimos, ha habido un error.")});
    });

    // Pagina Licencia

    $("#logoGitHub").click(function(event){
        event.stopImmediatePropagation();
        abrirEnlaceExterno('https://github.com/Scriptonita/aork2');
    });

    $("#botonSalirLicencia").click(function(event){
        event.stopImmediatePropagation();
        $.mobile.changePage("#paginaInicio",{});
    });


});
