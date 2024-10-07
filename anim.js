// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { text: "‎ ", time: 0 },
    { text: "‎ ", time: 2 },
    { text: "‎ ", time: 4 },
    // Añade más líneas aquí con su tiempo correspondiente
];

// Animar las letras
function updateLyrics() {
    var time = Math.floor(audio.currentTime);
    var currentLine = lyricsData.find(
        (line) => time >= line.time && time < line.time + 6
    );

    if (currentLine) {
        // Calcula la opacidad basada en el tiempo en la línea actual
        var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
        var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

        // Aplica el efecto de aparición
        lyrics.style.opacity = opacity;
        lyrics.innerHTML = currentLine.text;
    } else {
        // Restablece la opacidad y el contenido si no hay una línea actual
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}

// Actualiza las letras cada 100 ms (0.1 segundos) en lugar de 1000 ms
setInterval(updateLyrics, 100);

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
    var titulo = document.querySelector(".titulo");
    titulo.style.animation = "fadeOut 3s ease-in-out forwards"; // Duración y función de temporización de la desaparición
    setTimeout(function () {
        titulo.style.display = "none"; // Espera 3 segundos antes de ocultar completamente
    }, 3000);
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);

// Previene el parpadeo de pantalla blanca al hacer clic en el enlace
document.querySelector('.botones a').addEventListener('click', function(e) {
    e.preventDefault(); // Previene la acción predeterminada del enlace
    document.body.style.opacity = '0'; // Cambia la opacidad a 0
    setTimeout(() => {
        window.location.href = 'flower.html'; // Luego rediriges a la nueva página
    }, 500); // Espera el tiempo de la transición
});
