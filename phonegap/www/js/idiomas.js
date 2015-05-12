
// Traducción a idiomas distintos del español

function traducir ($idioma) {
	switch ($idioma) {
                        
		default:
            $mensajeErrorConexion = "All songs are played from Deezer in streaming. You can\'t play offline"
            $noConexion = "Sorry!! You are offline"
			// Página de carga // Loading Page
			$("#mensajeCargando").html("Loading");

			// Página de inicio // Home Page
			$("#botonInicioJugar").html("Play");
			$("#botonInicioArtista").html("Artists Game");
			$("#botonInicioEstilos").html("Styles game");
			$("#botonInicioCrear").html("Challenge a friend");
			$("#gracias").html("Thanks to");

			// Página de Juego por estilos // Styles Page
			$("#mensajeCabeceraEstilos").html("Musical styles");
			$("#spanMensajeSeleccion").html("This selection is weekly provided by ");
			$("#197").html("Latin");
			$("#85").html("Alternative");
			$("#98").html("Clasic");
			$("#32").html("Europe");

			// Página del Juego // Game Page
			$("#puntuacion").html("Score: ");
			$("#mensajeTituloCancion").html("Song title");

			// Página de Reto // Challenge Game Page
			$(".vida").html("Life: ");
			$(".puntuacion").html("Score: ");
			$("#puntuacionReto").html("Score: ");
			$("#mensajeTituloCancionReto").html("Song title");
			$compartirText = "Do you know this song? "; // A ver si conoces esta canción
		    $compartirSummary = "Hangman with songs";
		    $compartirTitleTwitter = "#aork2 Do you know this song? "; // A ver si conoces esta canción
		    $compartirTitleFacebook = "Do+you+know+this+song?"; // A+ver+si+conoces+esta+canción
		    $compartirTitleGoogle = "Hangman with songs";
		    $compartirTitleWhatsapp = "Hangman with songs";
            $compartirTitleTelegram = "Hangman with songs";

			// Página de acierto // Result page
			$("#aciertoAutor").html("Author: ");
			$("#aciertoAlbum").html("Album: ");
			$("#escucharCancion").html("Play on");
            $("#textoCapturaCanciones").html("+10 points");
			$("#botonSiguiente").html("Continue");
			$("#botonRetar").html("Challenge a friend");

			// Página Fín del Juego // End of game Page
			//¡¡Has llegado al final del Juego!!
			$("#finMensaje1").html("You've reached the end of the game !!");
			//Has acertado:
			$("#finMensaje2").html("You guessed it:");
			//Vamos añadiendo canciones, vuelve pronto.
			$("#finMensaje3").html("We are adding songs, come back soon.");
			$("#botonFin").html("Continue");

			// Página Fín de juego en estilos // 
			// ¡¡Has llegado al final del Juego por estílos en
			$("#estilosMensaje1").html("You've reached the end of the game by style: ");
			// Has acertado: 
			$("#estilosMensaje2").html("You guessed it:");
			// Las canciones de cada estilo cambian semanalmente, así que vuelve a jugar la semana que viene con las nuevas canciones. 
			$("#estilosMensaje3").html("The songs of each style changes weekly, so play again next week with new songs.");
			$("#botonFinEstilos").html("Continue");

			// Página Crear Ahorcado
			$("#cabeceraCrearReto").html("Challenge a friend");
			$("#retoMensaje").html("Search, choose a song and challenge a friend to know if he knows it.<br /><br /> Your friend don't need the app to play, they can play in mobile browser.");
			$("#retoGanasPuntos").html("You win 20 points!!");
			$("#labelCajon").html("title, artist...");
			$("#botonBuscarCancion").html("Search");
			$("#botonLimpiarCancion").html("Clean");

			// Página de Dialogo para abandonar juego
			// ¿Realmente quieres abandonar el juego?
			$("#mensajeVolverInicio").html("Do you really want to quit?");
			$("#botonVolverSi").html("Yes");
			$("#botonVolverNo").html("No");

			// Página información durante el juego

			$("#cabeceraInfo").html("Game info");
			//aork2 es el clásico juego del ahorcado pero tratando de adivinar el título de la canción que se propone.
			$("#mensajeInfo1").html("aork2 is the typical hangman game but in this case your goal is to guess the title of the proposed song");
			//Puedes buscar una canción y retar a un amigo a ver si la conoce a través de Twitter, Facebook, whatsapp o email. Si quieres probar, sin necesidad de registrarte, ni dar datos, solo pulsa el siguiente botón.
			$("#mensajeInfo2").html("You can look for a song and challenge a friend by Twitter, Facebook, whatsapp or Google+ to see if he or she can guess it. If you want to try, you don't need to register or give personal dates, just push the button");
			$("#botonInfoRetar").html("Challenge");
			// Llevas acertadas: 
			$("#mensajeInfo3").html("Guessed songs:");
			$("#mensajeInfo4").html("Points: ");
			$("#botonInfoSalir").html("Exit");
			$("#botonInfoSeguir").html("Play");

			//Página de información cuando no hay más canciones
			$("#cabeceraNoMas").html("No more songs");
			//En estos momentos no hay más canciones disponibles en el modo de juego individual. Vamos añadiendo canciones, por lo que puedes volver a probar en un tiempo y seguro que tienes más suerte.
			$("#mensajeNoMas1").html("At this moment there are no more songs available in the individual game. We are adding songs, you can try again in a while and you will have more luck");
			//Puedes buscar una canción y retar a un amigo a ver si la conoce a través de Twitter, Facebook, whatsapp o email. Si quieres probar, sin necesidad de registrarte, ni dar datos, solo pulsa el siguiente botón.
			$("#mensajeNoMas2").html("You can look for a song and challenge a friend by Twitter, Facebook, whatsapp or Google+ to see if he or she can guess it. If you want to try, you don't need to register or give personal dates, just push the button");
			$("#botonNoMasRetar").html("Challenge");
			//También puedes jugar de modo invividual por estilos de música
			$("#mensajeNoMas3").html("You can also try the individual game and try the different styles of music");
			$("#botonNoMasEstilo").html("Styles Game");
			//O si lo prefieres, puedes volver a jugar todas las canciones desde el principio.<br />No te preocupes, no perderás tus puntos logrados.
			$("#datosInfo").html("Or if you prefer, you can play again all the songs, don't worry, you will not lose your points");
			//Llevas acertadas:
			$("#mensajeNoMas4").html("Guessed songs:");
			$("#mensajeNoMas5").html("Points: ");
			$("#botonNoMasSalir").html("Exit");
			$("#botonNoMasReinciar").html("Restart");

			// Otras
			$enhorabuena = "Congratulations!!";
			$hasFallado = "Sorry, you failed";
			$idiomaArtista = "Artist";
			$idiomaAlbum = "Album";
			$idiomaTitulo = "Title";
			$idiomaSinResultado = "Sorry, no results.";
			$idiomaSinCancion = "Sorry, no song";

			// Página Artista

			$("#cabeceraBuscarArtista").html("Search for a singer or group");
			$("#MensajeBuscarArtista").html("Play with the songs of a singer of your choice");
			$("#labelBuscarArtista").html("Singer, group...");
            $("#cajonBuscarArtista").attr("placeholder", "Touch here");
			$("#botonBuscarArtista").html("Search");
			$("#botonLimpiarBuscarArtista").html("Clean");
			$("#retoBuscarArtista").html("Get 35 points sharing the challenge with friends.<br /><br /> Your friend don't need the app to play, they can play in mobile browser.");

			// Página Aceptar Reto Artista

			$("#spanRetoArtista").html("You have been challenged to play hangman with ");
			$("#spanRetoArtista2").html(" songs");
			$("#preguntaAceptarReto").html("Do you accept the challenge?");
			$("#botonAceptarRetoArtista").html("Ok");
			$("#botonSalirRetoArtista").html("Exit");

			// Página Fín Reto Artista

			$("#mensajeFinRetoArtista").html("The challenge is over");
			$("#mensajeFRA1").html("You're right ");
			$("#puntosExtraFRA").html("You get ");
			$("#puntosExtraFRA3").html(" extra points");
			$("#preguntarFinRetoArtista").html("Want to challenge a friend?");
			$("#botonIrRetarArtista").html("Challenge");
			$("#botonSalirFinRetoArtista").html("Exit");

			// Compartir artista

			$compartirTextArt = "Do you know this songs? "; // A ver si conoces esta canción
		    $compartirSummaryArt = "Hangman with songs";
		    $compartirTitleTwitterArt = "#aork2 Do you accept this aork2 Artist Challenge? "; // A ver si conoces esta canción
		    $compartirTitleFacebookArt = "Do+you+know+this+songs?"; // A+ver+si+conoces+esta+canción
		    $compartirTitleGoogleArt = "Hangman with songs";
		    $compartirTitleWhatsappArt = "Hangman challenge with songs by one artist";
            $compartirTitleTelegramArt = "Hangman challenge with songs by one artist";
            
            $(".textoCaptura").html("Share this screen with friends and win 10 extra points");
            $("#botonVolverCaptura").html("Back");
            
            // Página Licencia
            $("#textoLicencia").html("You can get the source from GitHub. Touch the cat.");
			break;
            
	}
}