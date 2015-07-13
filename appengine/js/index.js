/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


// Esta función examina el mensaje push recibido y divide la dirección obtenida para reconocer los datos y preparar el juego
function examinarPush (texto) {
    $retoPush = texto;
    $idArtistaReto = 0;
    $idTrackReto = 0;
    var aux = texto.split("/");
    console.log ("Cadena partida: ");
    for (var x = 0; x < aux.length; x++) {
        console.log (x + "....." + aux[x]);
    }
    if (typeof aux[3] == "undefined") {
        centrarVerticalmente("#divInicio","#menuInicio");
        $.mobile.changePage("#paginaInicio",{}); 
    } else if (aux[3] == "artista") {
        $idArtistaReto = aux[4];
        comprobarReto();
    } else if (aux[3] != "") {
        $idTrackReto = aux[3];
        comprobarReto();
    }  
}

// Para evitar errores al darle al botón de retroceso que nos podría llevar a pantallas de las que ya se han borrado los datos.
function handleBackButton() {
    if ($.mobile.activePage.attr('id') == 'paginaInicio') {
        navigator.app.exitApp();
    } else if ($.mobile.activePage.attr('id') == 'paginaEstilos' || $.mobile.activePage.attr('id') == 'paginaEstilos' || $.mobile.activePage.attr('id') == 'paginaAcierto' || $.mobile.activePage.attr('id') == 'paginaFin' 
              || $.mobile.activePage.attr('id') == 'paginaEstilos' || $.mobile.activePage.attr('id') == 'paginaCrear' || $.mobile.activePage.attr('id') == 'paginaBuscarArtista' 
              || $.mobile.activePage.attr('id') == 'paginaAceptarArtista' || $.mobile.activePage.attr('id') == 'paginaFinRetoArtista' ){
        $.mobile.changePage('#paginaInicio');
    }else{
        alert ("No puedes retroceder aquí");
    }
}

// Comprobación de que hay conexión a internet para poder descargar los datos necesarios del juego, como la canción a jugar.
function onOffline() {
    // Handle the offline event
    if ($advOffline) {
        alert ($noConexion);
    } else {
        navigator.notification.alert(
        $mensajeErrorConexion,  // message
        $.mobile.changePage('#paginaInicio'),         // callback
        'Error de Conexión',            // title
        'Ok'                  // buttonName
        );
        $advOffline = true;
    }
    
}


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log("Entra a DeviceReady");
        app.receivedEvent('deviceready');
        $aInicio = true;
        
        // Registro de dispositivo en DevicePush
        devicePush.register({
            idUser: 'XXXXXXXXXXXXXXXXXXXX', // Tu ID de usuario en Device Push
            //idApplication: 'bc44-9d4d-25cb-a738' // El ID de aplicación en Device Push
            idApplication: 'AAAA-BBBB-CCCC-DDDD' // El ID de aplicación en Device Push
        }); 
        
        
        // Cuando se recibe una notificación por mensaje Push  
        devicePush.notificationReceived(function(textNotification) {
            var texto = textNotification;
            examinarPush (texto); 
            $aInicio = false;
        });
        
        window.plugins.webintent.getUri(function(url) {
            if(url !== "" && url !== null) {
            // url is the url the intent was launched with
                console.log("Se ha obtenido una URL: "+ url);
                examinarPush (url);
            }
        }); 
        
        document.removeEventListener('deviceready', onDeviceReady, false);
        admob.createBannerView({publisherId: "pub-XXXXXXXXXXXXXXX", interstitialAdId: "ca-app-pub-XXXXXXXXXXXXXXX/YYYYYYYYYY"}); 
       
        document.addEventListener("deviceready", onDeviceReady, false);
        document.addEventListener("backbutton", handleBackButton, true);
        document.addEventListener("offline", onOffline, false);
        
        if ($aInicio) {
            console.log("Hacia pagina de inicio");
            centrarVerticalmente("#divInicio","#menuInicio");        
            $.mobile.changePage("#paginaInicio",{});
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        /*
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        */
        console.log('Received Event: ' + id);
    }
};
