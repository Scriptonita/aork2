$aciertos = 0;
$aciertosReto = 0;
$indice = 0;
$vida = 6;
$advOffline = false;
$mensajeErrorConexion = 'Todas las canciones del juego se reproducen en streaming desde Deezer. Es imposible jugar sin conexión.';
$noConexion = "¡¡Lo siento!! No tienes conexión";
$puntos = parseInt(window.localStorage.getItem("puntos"));
if (isNaN($puntos)) {
  $puntos = 0;
  window.localStorage.setItem("puntos", $puntos);
}
$esReto = false;
$esRetoArtista = false
$ads = false;
$tipoJuego = "1";
$enhorabuena = "¡¡Enhorabuena!!";
$hasFallado = "Lo siento, has fallado";
$idiomaPuntos = "Puntos";
$idiomaArtista = "Artista";
$idiomaAlbum = "Álbum";
$idiomaTitulo = "Título";
$idiomaSinResultado = "Lo sentimos, no hay resultados.";
$idiomaSinCancion = "Lo sentimos, no se encuentra la canción";
$compartirText = "¿Conoces esta canción?: ";
$compartirSummary = "ahorcado con canciones";
$compartirTitleTwitter = "#aork2 ¿Conoces esta canción? ";
$compartirTitleFacebook = "¿Conoces+esta+canci%F3n?"; // A+ver+si+conoces+esta+canción
$compartirTitleGoogle = "Aork2 - Juego del Ahorcado con canciones";
$compartirTitleWhatsapp = "Ahorcado con canciones";
$compartirTitleTelegram = "Ahorcado con canciones";

$compartirTextArt = "¿Aceptas el reto? Acierta las canciones de este artista: "; // A ver si conoces esta canción
$compartirSummaryArt = "ahorcado con canciones por artista";
$compartirTitleTwitterArt = "#aork2 ¿Aceptas el reto? Acierta las canciones de este artista: "; // A ver si conoces esta canción
$compartirTitleFacebookArt = "¿Aceptas el reto? Acierta las canciones de este artista: "; // A+ver+si+conoces+esta+canción
$compartirTitleGoogleArt = "¿Aceptas el reto? Acierta las canciones de este artista: ";
$compartirTitleWhatsappArt = "¿Aceptas el reto? Acierta las canciones de este artista: ";
$compartirTitleTelegramArt = "¿Aceptas el reto? Acierta las canciones de este artista: ";

$compartirCaptura = "Jugando al aork2";

$enTour = false;

$estilos = {
  data: [
    {
      "id": "132",
      "name": "Pop",
      "type": "genre"
    },
    {
      "id": "152",
      "name": "Rock",
      "type": "genre"
    },
    {
      "id": "116",
      "name": "Hip Hop",
      "type": "genre"
    },
    {
      "id": "85",
      "name": "Alternativo",
      "type": "genre"
    },
    {
      "id": "165",
      "name": "R&B/Soul/Funk",
      "type": "genre"
    },
    {
      "id": "144",
      "name": "Reggae",
      "type": "genre"
    },
    {
      "id": "153",
      "name": "Blues",
      "type": "genre"
    },
    {
      "id": "197",
      "name": "Latino",
      "type": "genre"
    },
    {
      "id": "98",
      "name": "Clásica",
      "type": "genre"
    },
    {
      "id": "113",
      "name": "Dance",
      "type": "genre"
    },
    {
      "id": "106",
      "name": "Electro",
      "type": "genre"
    },
    {
      "id": "32",
      "name": "Europa",
      "type": "genre"
    },
    {
      "id": "129",
      "name": "Jazz",
      "type": "genre"
    },
    {
      "id": "95",
      "name": "Música para niños",
      "type": "genre"
    },
    {
      "id": "173",
      "name": "Películas/Juegos",
      "type": "genre"
    }
]}
