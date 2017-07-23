
$check = [];
$json = null;
$contador = 0; // Contador total de canciones
$total = 0; // Contador de fallos totales
$ccn = 0; // contador canciones nivel
$cfn = 0; // contador de fallos nivel

function imprime(z) {
  $contador++;
  $("#cont").html($contador);
  $("#canciones").append ("\
  <p> ------------------------------------------------------- <p> \
  <p> Cancion: <a href='http://api.deezer.com/search?q=" + $json.data[z].title +  "' target='_blank'>" + $json.data[z].title + "</a> </p> \
  <p> Artista: <a href='http://api.deezer.com/search?q=" + $json.data[z].artist.name + "' target='_blank'>" + $json.data[z].artist.name + "</a> </p> \
  <p> Album: <a href='" + $json.data[z].album.tracklist + "' target='_blank'>" + $json.data[z].album.title + "</a> </p> \
  <p> Id: " + $json.data[z].id + " </p> \
  <p> Preview: <a href=' " + $json.data[z].preview + "'>" + $json.data[z].preview + " </a></p>");
}

function imprime_seleccion(z) {
  $contador++;
  $("#cont").html($contador);
  $("#canciones").append ("\
  <p> ------------------------------------------------------- <p> \
  <p> Cancion: <a href='http://api.deezer.com/search?q=" + $json.tracks.data[z].title +  "' target='_blank'>" + $json.tracks.data[z].title + "</a> </p> \
  <p> Artista: <a href='http://api.deezer.com/search?q=" + $json.tracks.data[z].artist.name + "' target='_blank'>" + $json.tracks.data[z].artist.name + "</a> </p> \
  <p> Album: <a href='" + $json.tracks.data[z].album.tracklist + "' target='_blank'>" + $json.tracks.data[z].album.title + "</a> </p> \
  <p> Id: " + $json.tracks.data[z].id + " </p> \
  <p> Preview: <a href=' " + $json.tracks.data[z].preview + "'>" + $json.tracks.data[z].preview + " </a></p>");
}

function niveles (x) {
  $("#canciones").append (" \
  <p> ***************************************************************************************** </p> \
  <p> +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ </p> \
  <p> NIVEL " + x + " </p> \
  <p> +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ </p> \
  <p> ***************************************************************************************** </p> \
  ");
}

function selecciones (x) {
  $("#canciones").append (" \
  <p> ***************************************************************************************** </p> \
  <p> +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ </p> \
  <p> SELECCION " + x + " </p> \
  <p> +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ </p> \
  <p> ***************************************************************************************** </p> \
  ");
}


$(function() {
    $( "#nivel1" ).click(function (event) {
        event.stopImmediatePropagation();
        checkear(1);
    });
});

$(function() {
    $( "#nivel2" ).click(function (event) {
        event.stopImmediatePropagation();
        $("#canciones").html("");
        checkear(2);
    });
});

$(function() {
    $( "#nivel3" ).click(function (event) {
        event.stopImmediatePropagation();
        $("#canciones").html("");
        checkear(3);
    });
});

$(function() {
    $( "#nivel4" ).click(function (event) {
        event.stopImmediatePropagation();
        $("#canciones").html("");
        checkear(4);
    });
});

$(function() {
    $( "#nivel5" ).click(function (event) {
        event.stopImmediatePropagation();
        $("#canciones").html("");
        checkear(5);
    });
});

$(function() {
    $( "#nivel6" ).click(function (event) {
        event.stopImmediatePropagation();
        $("#canciones").html("");
        checkear(6);
    });
});

$(function() {
    $( "#exitos" ).click(function (event) {
        event.stopImmediatePropagation();
        checkear_seleccion("top");
    });
});

$(function() {
    $( "#especiales" ).click(function (event) {
        event.stopImmediatePropagation();
        $("#canciones").html("");
        checkear_seleccion("esp");
    });
});

$(function() {
    $( "#pop" ).click(function (event) {
        event.stopImmediatePropagation();
        $("#canciones").html("");
        checkear_seleccion("pop");
    });
});

$(function() {
    $( "#rock" ).click(function (event) {
        event.stopImmediatePropagation();
        $("#canciones").html("");
        checkear_seleccion("rock");
    });
});

$(function() {
    $( "#hiphop" ).click(function (event) {
        event.stopImmediatePropagation();
        $("#canciones").html("");
        checkear_seleccion("hiphop");
    });
});

$(function() {
    $( "#bso" ).click(function (event) {
        event.stopImmediatePropagation();
        $("#canciones").html("");
        checkear_seleccion("bso");
    });
});

function checkear(x) {
    $cfn = 0;
    $.getJSON( "/js/niveles/nivel" + x + ".json", function(){} )
        .done(function( json ) {
            niveles (x);
            $json = json;
            for (var z = 0; z < json.data.length; z ++) {
              $.ajax({url: json.data[z].preview, async: false})
              .done(function() {
                console.log ("OK");
              })
              .fail(function() {
                imprime (z)
                console.log("ERROR");
                $("#nFalloN" + x).html($cfn++);
              })
              $("#nCancN" + x).html(z+1 + " / " + json.data.length);
            }
        })
        .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            alert( "Request Failed: " + err );
          }
    );
    //console.log ($check);
}

function checkear_seleccion(x) {
    $cfn = 0;
    $.getJSON( "/js/seleccion/" + x + ".json", function(){} )
        .done(function( json ) {
            selecciones (x);
            $json = json;
            for (var z = 0; z < json.tracks.data.length; z ++) {
              $.ajax({url: json.tracks.data[z].preview, async: false})
              .done(function() {
                console.log ("OK");
              })
              .fail(function() {
                imprime_seleccion (z)
                console.log("ERROR");
                $("#nFallo_" + x).html($cfn++);
              })
              $("#nCanc_" + x).html(z+1 + " / " + json.tracks.data.length);
            }
        })
        .fail(function( jqxhr, textStatus, error ) {
            var err = textStatus + ", " + error;
            alert( "Request Failed: " + err );
          }
    );
    //console.log ($check);
}
