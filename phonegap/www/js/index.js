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
    console.log("entro en examinarPush .... texto = " + texto);
    $retoPush = texto;
    $idArtistaReto = 0;
    $idTrackReto = 0;
    var aux = texto.split("/");
    console.log ("Cadena partida: ");
    for (var x = 0; x < aux.length; x++) {
        console.log (x + "....." + aux[x]);
    }
    if (typeof aux[3] == "undefined") {
        //centrarVerticalmente("#divInicio","#menuInicio");
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

function handleOpenURL(url) {
  console.log("received url: " + url);
  $abrirURL = url
  if ($abrirURL != null) {
      examinarPush ($abrirURL);
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

        console.log("Entra a onDeviceReady");
        obtenerRetosDiarios ();
        console.log("Hacia pagina de inicio");
        //centrarVerticalmente("#divInicio","#menuInicio");
        //$.mobile.changePage("#paginaInicio",{});
        $hacerTour = localStorage.getItem("tourPortada");
        if (!$hacerTour) {
            tourPortada();
            localStorage.setItem("tourPortada", true);
        }
        app.receivedEvent('deviceready');

        var Puship = window.plugins.puship;
        Puship.EnableLog = false;
        Puship.PushipAppId = "h1mCVGaP9dtGnwG"; //un ejemplo de puship_id podía ser "h1mCVGaP9dtGnwG”
        if (Puship.Common.GetCurrentOs()==Puship.OS.ANDROID){
            var GCMCode = "28654934133"; //este es el senderID fornido por google. Ejemplo “28654934133”
            Puship.GCM.Register(GCMCode,
                {
                    successCallback: function (pushipresult){
                        console.log("device registered with DeviceId:" + pushipresult.DeviceId);
                    },
                    failCallback: function (pushipresult){
                        console.log("error during registration: "+ JSON.stringify(pushipresult));
                    }
                });
        } else if (Puship.Common.GetCurrentOs()==Puship.OS.IOS){
            Puship.APNS.Register(
                {
                    successCallback: function (pushipresult){
                        console.log("device registered with DeviceId:" + pushipresult.DeviceId);
                    },
                    failCallback: function (pushipresult){
                        console.log("error during registration: "+ JSON.stringify(pushipresult));
                    }
                });
        } else if (Puship.Common.GetCurrentOs()==Puship.OS.WP){
            Puship.WP.Register(
                {
                    successCallback: function (pushipresult){
                        console.log("device registered with DeviceId:" + pushipresult.DeviceId);
                    },
                    failCallback: function (pushipresult){
                        console.log("error during registration: "+ JSON.stringify(pushipresult));
                    }
                });
        } else {
            console.log("Plataforma no soportada");
        }
        Puship.Common.OnPushReceived(function(event) {
            console.log("Push received");
            console.log("Message: " + event.notification.Alert);
            examinarPush (event.notification.Alert);
        });

        document.addEventListener("backbutton", handleBackButton, false);
        document.addEventListener("offline", onOffline, false);
        window.analytics.startTrackerWithId('UA-AAAAAAAA-Y');
        //$("#divAuxiliar").hide();
    },

    resume: function () {
        console.log("Resuming");
      },


    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    }
};
