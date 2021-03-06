function limpiarArtistas(){
    $('#listaBuscarArtista').html("");
    $("#listaBuscarArtista").show();
    $("#cajonBuscarArtista").val("");
    $("#cajonBuscarArtista").focus();
    $("#artistaElegido").hide();
    $("#artistaElegido").html("");
    $("#compartirBuscarArtista").hide();
    $("#divBuscarArtista").show();
    $("#gifCargandoBuscarArtista").hide();
    $("#explicacionBuscarArtista").show();
    $("#divResultadoBuscarArtista").hide();
};


// Esta función nos devuelve una lista de 10 canciones para jugar, evitando que haya repeticiones de canciones y borrando información no deseada para el juego en el título de la canción
// como por ejemplo (remastered) / (radio edit.) / etc...
function devuelveLista10(listado) {
    var aux = listado.data.shift();
    listado.total--;
    var parentesis = aux.title.split(" (");
    var sinParentesis = parentesis[0];
    var existe = false;
    for (var x = 0; x < $tracks.total; x++) {
        var titTracks = $tracks.data[x].title.toLowerCase();
        var tituAux = sinParentesis.toLowerCase();
        if (titTracks == tituAux) {
            existe = true;
            //console.log("El título ya existe: " + sinParentesis);
            break;
        }
    }
    // Comprobamos que el título sea jugable, que contenga letras permitidas, aceptaremos que es jugable si tiene al menos 3 letras.
    var jugable = 0;
    for (var x=0; x < sinParentesis.length; x++) {
        if(/[a-z]/.test(sinParentesis.charAt(x))){
            jugable++;
        }
    }
    if (!existe && jugable > 2) {
        $tracks.data[$tracks.total] = aux;
        $tracks.data[$tracks.total].title = sinParentesis;
        $tracks.total++;
        //console.log ("Añadido titulo: " + sinParentesis);
    }
    if ($tracks.total < 10 && listado.total > 0) {
        devuelveLista10(listado);
    }
}


// Busca el listado de canciones del artista o grupo deseado, limitando la búsqueda a 50 canciones.
function jugarEsteArtista (event, tracklist, imagen) {
    var aux = tracklist.split(".com");
    //DZ.api(aux[1]+'&limit=10', function(json){
    DZ.api(aux[1]+'&limit=50', function(json){
        //$tracks = json;
        $tracks = {data: Array (typeof json.data), next: json.next, total: 0};
        devuelveLista10(json);
        if ($tracks.data.length > 0) {
            $indice = 0;
            $aciertosReto = 0;
            iniciarJuego();
            centrarVerticalmente("#divJuego","#bloqueJuego");
            $.mobile.changePage("#paginaJuego",{});
            $("#imagenAutor").html("<img src='" + imagen + "' />");
            setTimeout("prepararPaginaAcierto()",3000);
        } else {
            centrarVerticalmente("#divInicio","#bloqueJuego");
            $.mobile.changePage("#paginaInicio",{});
            alert ("Lo siento, no se ha encontrado ninguna canción");
        }

    });
}

function suma30(){
    $puntos = parseInt(window.localStorage.getItem("puntos"));
    $puntos += 35; // cambiado a 35
    window.localStorage.setItem("puntos", $puntos);
}

// Función que devuelce un listado de coincidencias con la palabra / nombre que hayamos introducido en la pagina de búsqueda de artista
// Nos da la posibilidad de retar a un amigo directamente desde los resultados.
function buscarArtista(aux){
			limpiarArtistas();
            $("#divResultadoBuscarArtista").show();
            $("#gifCargandoBuscarArtista").show();
            DZ.api('/search/artist?q='+aux+'&limit=10', function(json){
                if (json.data.length > 0) {
                    $("#gifCargandoBuscarArtista").hide();
                    for (var i=0, len = json.data.length; i<len ; i++)
                    {
                        artista = json.data[i].name.replace(/(['"])/g, "\\$1");
                        $('#listaBuscarArtista').append(
                          '<div class="collection-item"> \
                                <p id="nombreArtistaText">' + json.data[i].name + '</p> \
                                <div class="ui-grid-a"> \
                                    <br /> \
                                    <div class="ui-block-a"> \
                                        <img src="' + json.data[i].picture + '"/> \
                                    </div> \
                                    <div class="ui-block-b"> \
                                        <span id="retarArtistaText">Manda tu reto</span>  \
                                        <br />  \
                                        <div class="row"> \
                                            <div class="col s6"><span id="botonFacebook_' + i + '"></span></div>      \
                                            <div class="col s6"><span id="botonTwitter_' + i + '"></span></div>       \
                                        </div> \
                                        <div class="row"> \
                                            <div class="col s6"><span id="botonWhatsapp_' + i + '"></span></div>      \
                                            <div class="col s6"><span id="botonCompartir_' + i + '"></span></div>         \
                                        </div>          \
                                    </div> \
                                    <br />  \
                                </div>  \
                                <br /> \
                                <a id="botonAJugarArtista" onclick="jugarEsteArtista(event, \'' + json.data[i].tracklist + '\',\'' + json.data[i].picture + '\');$deezerArtista=\'' + json.data[i].name + '\';$imagenArtista=\'' + json.data[i].picture + '\'" class="btn-large waves-effect waves-light botones_inicio">Jugar</a>\
                            </div>' );

                            $url = 'http://aork2.com/artista/' + json.data[i].id;

                            $("#botonTwitter_"  + i).html('<a onclick="compartirTwitter(\''  + $compartirTitleTwitterArt + '\', \''  + $url + '\', 35)"><img src="images/twitter.png" alt="" /></a>');
                            $("#botonFacebook_" + i).html('<a onclick="compartirFacebook(\'' + $compartirTitleFacebookArt + '\', \'' + $url + '\', 35)"><img src="images/facebook.png" alt="" /></a>');
                            $("#botonCompartir_" + i).html('<a onclick="compartirCompartir(\'' + $compartirTitleTelegramArt + '\', \'' + $url + '\', 35)"><img src="images/compartir.png" alt="" /></a>');
                            $("#botonWhatsapp_" + i).html('<a onclick="compartirWhatsapp(\'' + $compartirTitleWhatsappArt + '\', \'' + $url + '\', 35)"><img src="images/whatsapp.png" alt="" /></a>');
                    }
                } else {
                    $('#listaBuscarArtista').html($idiomaSinResultado);
                }
			});
            $("#divBuscarArtista").hide();
};
