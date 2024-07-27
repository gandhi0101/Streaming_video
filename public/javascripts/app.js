// app.js
document.addEventListener('DOMContentLoaded', () => {
    const videoPlayer = document.getElementById('videoPlayer');

    // Hacer una petición al servidor para obtener el video
    fetch('http://localhost:3000/video')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            const videoURL = URL.createObjectURL(blob);
            videoPlayer.src = videoURL;
            videoPlayer.load();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

    // Opcional: Manejar eventos del video
    videoPlayer.addEventListener('play', () => {
        console.log('El video está reproduciéndose');
    });

    videoPlayer.addEventListener('pause', () => {
        console.log('El video está en pausa');
    });

    videoPlayer.addEventListener('ended', () => {
        console.log('El video ha terminado');
    });
});
