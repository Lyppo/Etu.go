function requestFullscreen() {
    // Vérifie si le document n'est pas déjà en plein écran
    if (!document.fullscreenElement && 
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement &&
        !document.msFullscreenElement) {
        
        // Demande à afficher en plein écran
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    }
}

// Écoute les événements d'interaction de l'utilisateur
document.addEventListener('click', requestFullscreen);
document.addEventListener('keydown', requestFullscreen);
document.addEventListener('touchstart', requestFullscreen);
document.addEventListener('mousedown', requestFullscreen);