// Funciones para los Tours del juego


function tourPortada() {
  var msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10, btn, btn_e, btn_f; 
  if ($idioma = "es") {
    msg1 = "<b>Bienvenido a Aork2</b><br /><br />El juego del ahorcado con canciones.<br /><br />El juego está optimizado para jugar<br />con el móvil en posición vertical";
    msg2 = "<b>Juego Individual</b><br /><br />Juega al ahorcado con<br />más de 140 canciones<br /> de todos los estilos";
    msg3 = "<b>Juego por artista</b><br /><br />Busca un grupo o artista y<br />juega con 10 canciones<br />suyas o mándaselas como<br />reto a un amigo";
    msg4 = "<b>Juego por estilos</b><br /><br />12 estilos de música<br />diferentes.<br />10 canciones en<br />cada estilo";
    msg5 = "<b>Reta a un amigo</b><br /><br />Busca una canción y mándasela<br />a un amigo como reto a través<br />de whatsapp, facebook, twitter, etc...";
    msg6 = "<b>#RetoAork2</b><br /><br />Todos los días un reto nuevo<br />con un artista diferente";
    msg7 = "<b>Retos anteriores</b><br /><br />Accede a retos<br />anteriores";
    msg8 = "<b>Redes Sociales</b><br /><br />Siguenos en Twitter<br />y en Facebook.<br />Mándanos tus retos<br />y podrán salir<br />en portada";
    msg9 = "<b>Deezer</b><br /><br />Más de 35 millones<br />de canciones para<br />jugar, gracias a<br />Deezer";
    msg10 = "¡Esto es todo!<br /><br /><b>Disfruta Aork2</b>";
    btn = "Siguiente";
    btn_e = "Empezar tour";
    btn_f = "Terminar";
  } else {
    msg1 = "<b>Welcome to Aork2</b><br /><br />The Hangman with songs.<br /><br />The game is optimized for<br />play in portrait position";
    msg2 = "<b>Single mode</b><br /><br />Play hangman with<br />over 140 songs<br />of all styles";
    msg3 = "<b>Artist mode</b><br /><br />Search an artist<br />and play with 10 of  his song.<br />Or challenge your<br />friends with these songs";
    msg4 = "<b>Styles mode</b><br /><br />12 musical styles.<br />10 songs in each style";
    msg5 = "<b>Challenge your friends</b><br /><br />Search a song and<br />challenge your friends through<br />whatsapp, facebook, twitter, etc...";
    msg6 = "<b>#RetoAork2</b><br /><br />A new challenge<br />every day";
    msg7 = "<b>Previus challenge</b><br /><br />Access previous challenges";
    msg8 = "<b>Social media</b><br /><br />Follow us on<br />Twitter & Facebook.<br />Send us your challenges<br />to appear in #RetoAork2";
    msg9 = "<b>Deezer</b><br /><br />More than<br />35 million<br />songs<br />to play<br />from Deezer";
    msg10 = "This is all!!<br /><br /><b>Enjoy Aork2</b>";
    btn = "Next";
    btn_e = "Start";
    btn_f = "Finish";
  }


  tourPortada = [{
                "msg": msg1, // tour bubble / dialog text
                "actionName": false, // name of Mixpanel event used for funnel analysis - spaces are fine, use friendly names. You'll need to setup MP yourself however and include the libs.
                "selector": "body", // selector for highlighted feature. Comma seperated list = (dialog target, additional items to pop above mask). Don't forget your '.' or '#'
                "position": "center", // dialog location in relation to target (selector). top, bottom, left, right, (or 'center' which centers to screen)
                "btnMsg":btn_e, // if you'd like a button on the dialog simply add a message here
                "nextSelector": "#tour_dialog_btn", // does the user need to do something specific to advance? For example, clicking the tour bubble ok button. Omit for any action click to advance.
                "waitForTrigger": false // should we pause the tour here? while the user does something? Pass a seletor as the trigger to resume the tour from this point
            }, {
                "msg": msg2,
                "selector": "#botonInicioJugar",
                "position": "right",
                "btnMsg": btn,
            }, {
                "msg": msg3,
                "selector": "#botonInicioArtista",
                "position": "bottom",
                "btnMsg": btn,
            }, {
                "msg": msg4,
                "selector": "#botonInicioEstilos",
                "position": "left",
                "btnMsg": btn,
            }, {
                "msg": msg5,
                "selector": "#botonInicioCrear",
                "position": "bottom",
               "btnMsg": btn,
            }, {
                "msg": msg6,
              "selector": "#retosAork2",
                "position": "top",
                "btnMsg": btn,
            }, {
                "msg": msg7,
              "selector": "#retoPosterior",
                "position": "right",
                "btnMsg": btn,
            }, {
                "msg": msg8,
                "selector": "#bloqueRedesSociales",
              "position": "top",
                "btnMsg": btn,
            }, {
                "msg": msg9,
                "selector": "#divDeezer",
                "position": "top",
                "btnMsg": btn,
            }, {
                "msg": msg10,
              "selector": "body",
                "position": "center",
                "btnMsg": btn_f
            }];
    $.tour(tourPortada); 
}


function tourJuego() {
  var msg1, msg2, msg3, msg4, msg5, msg6, msg7, btn, btn_e, btn_f; 
  if ($idioma = "es") {
    msg1 = "<b>Este es el juego del Aork2</b><br /><br />Debes adivinar el título de la canción<br /><br />El juego está optimizado para jugar<br /> con el móvil en posición vertical";
    msg2 = "<b>Escucha la canción</b><br /><br />Para iniciar la canción pulsa<br />sobre el botón Play";
    msg3 = "<b>Teclado</b><br /><br />Pulsa sobre las letras que creas<br />que están contenidas en <br />el título de la canción";
    msg4 = "<b>Aciertos</b><br /><br />Las letras que pertenezcan al título<br />de la canción irán apareciendo en su sitio";
    msg5 = "<b>6 vidas</b><br /><br />Por cada<br />fallo al<br />elegir letra<br />pierdes<br />una vida";
    msg6 = "<b>Tus puntos</b><br /><br />Aquí puedes ver<br /> los puntos que<br />vas acumulando";
    msg7 = "¡Ya puedes jugar!<br /><br /><b>Disfruta Aork2</b>";
    btn = "Siguiente";
    btn_e = "Empezar tour";
    btn_f = "Terminar";
  } else {
    msg1 = "<b>It is Aork2</b><br /><br />Guess the song title.<br /><br />The game is optimized for<br />play in portrait position";
    msg2 = "<b>Listen the song</b><br /><br />Touch the play button<br />and listen the song";
    msg3 = "<b>Keyboard</b><br /><br />Touch the letters that<br />you think they are in<br />the title song";
    msg4 = "<b>Success</b><br /><br />The letters will appear<br />in the appropriate place";
    msg5 = "<b>6 lives</b><br /><br />You lose<br />one live<br />for each<br />mistake";
    msg6 = "<b>Your points</b><br /><br />You can see<br />your points";
    msg7 = "<b>Start playing!!</b><br /><br />Enjoy Aork2";
    btn = "Next";
    btn_e = "Start";
    btn_f = "Finish";
  }

    tourJuego = [{
                "msg": msg1, // tour bubble / dialog text
                "actionName": false, // name of Mixpanel event used for funnel analysis - spaces are fine, use friendly names. You'll need to setup MP yourself however and include the libs.
                "selector": "body", // selector for highlighted feature. Comma seperated list = (dialog target, additional items to pop above mask). Don't forget your '.' or '#'
                "position": "center", // dialog location in relation to target (selector). top, bottom, left, right, (or 'center' which centers to screen)
                "btnMsg": btn_e, // if you'd like a button on the dialog simply add a message here
                "nextSelector": "#tour_dialog_btn", // does the user need to do something specific to advance? For example, clicking the tour bubble ok button. Omit for any action click to advance.
                "waitForTrigger": false // should we pause the tour here? while the user does something? Pass a seletor as the trigger to resume the tour from this point
            }, {
                "msg": msg2,
                "selector": "#insertarAudio",
                "position": "bottom",
                "btnMsg": btn,
            }, {
                "msg": msg3,
                "selector": "#teclado",
                "position": "top",
                "btnMsg": btn,
            }, {
                "msg": msg4,
                "selector": "#adivina",
                "position": "bottom",
                "btnMsg": btn,
            }, {
                "msg": msg5,
                "selector": "#indicadorVida",
                "position": "bottom",
                "btnMsg": btn,
            }, {
                "msg": msg6,
                "selector": "#indicadorPuntos",
                "position": "bottom",
                "btnMsg": btn,
            }, {
                "msg": msg7,
                "selector": "body",
                "position": "center",
                "btnMsg": btn_f
            }];
    $.tour(tourJuego);
}


function tourAcierto() {
  var msg1, msg2, msg3, msg4, msg5, msg6, msg7, btn, btn_e, btn_f; 
  if ($idioma == "es") {
    msg1 = "<b>Página de Aciertos</b><br /><br />Aquí sabrás si has ganado<br />o perdido.";
    msg2 = "<b>Resultado</b><br /><br />Aquí puedes ver<br />el resultado del juego";
    msg3 = "<b>Puntos</b><br /><br />Tus puntos anteriores<br /><br />(+) ó (-)<br />+10 si ganas<br />-5 si pierdes<br /><br />+ Número de vidas";
    msg4 = "<b>Título correcto</b><br /><br />El título correcto de la canción<br />con la que has jugado";
    msg5 = "<b>Escucha la canción</b><br /><br />Si quieres, puedes<br />escuchar la canción<br />completa en Deezer";
    msg6 = "<b>Continuar</b><br /><br />Continúa con el juego"
    msg7 = "<b>Salir</b><br /><br />Ir al menú<br />principal";
    msg8 = "Ya puedes continuar<br /><br /><b>Disfruta Aork2</b>";
    btn = "Siguiente";
    btn_e = "Empezar tour";
    btn_f = "Terminar";
  } else {
    msg1 = "<b>Success</b><br /><br />Know if you have won<br /><br />or lost";
    msg2 = "<b>Result</b><br /><br />Congratulations<br />or Sorry";    
    msg3 = "<b>Points</b><br /><br />Previous points<br /><br />(+) or (-)<br />+10 if you win<br />-5 if you loose<br /><br />+ lifes";
    msg4 = "<b>Song Title</b><br /><br />The correct title of<br />the song that you played";
    msg5 = "<b>Listen the song</b><br /><br />You can listen<br />the entire song in Deezer";
    msg6 = "<b>Continue</b><br /><br />Continue playing";
    msg7 = "<b>Exit</b><br /><br />Go to<br />Start Menu";
    msg8 = "<b>End of tour</b><br /><br />Enjoy Aork2";
    btn = "Next";
    btn_e = "Start";
    btn_f = "Finish";
  }

    tourAcierto = [{
                "msg": msg1, // tour bubble / dialog text
                "actionName": false, // name of Mixpanel event used for funnel analysis - spaces are fine, use friendly names. You'll need to setup MP yourself however and include the libs.
                "selector": "body", // selector for highlighted feature. Comma seperated list = (dialog target, additional items to pop above mask). Don't forget your '.' or '#'
                "position": "center", // dialog location in relation to target (selector). top, bottom, left, right, (or 'center' which centers to screen)
                "btnMsg": btn_e, // if you'd like a button on the dialog simply add a message here
                "nextSelector": "#tour_dialog_btn", // does the user need to do something specific to advance? For example, clicking the tour bubble ok button. Omit for any action click to advance.
                "waitForTrigger": false // should we pause the tour here? while the user does something? Pass a seletor as the trigger to resume the tour from this point
            }, {
                "msg": msg2,
                "selector": "#resultado",
                "position": "bottom",
                "btnMsg": btn,
            }, {
                "msg": msg3,
                "selector": "#marcador",
                "position": "bottom",
                "btnMsg": btn,
            }, {
                "msg": msg4,
                "selector": "#tituloObjetivo",
                "position": "bottom",
                "btnMsg": btn,
            }, {
                "msg": msg5,
                "selector": "#botonDeezer",
                "position": "top",
                "btnMsg": btn,
            }, {
                "msg": msg6,
                "selector": "#pieAcierto",
                "position": "top",
                "btnMsg": btn,
            }, {
                "msg": msg7,
                "selector": "#imgHomeCabecera",
                "position": "bottom",
                "btnMsg": btn,
            }, {
                "msg": msg8,
                "selector": "body",
                "position": "center",
                "btnMsg": btn_f
            }];
    $.tour(tourAcierto);
}