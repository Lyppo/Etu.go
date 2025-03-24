function requestFullscreen() {
    if (!document.fullscreenElement && // Vérifie si le document n'est pas déjà en plein écran
        !document.mozFullScreenElement && // Firefox
        !document.webkitFullscreenElement && // Safari
        !document.msFullscreenElement) { // Internet Explorer/Edge
      // Demande à afficher en plein écran
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) { // Safari
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
    }
  }

  // Regroupe tous les événements utilisateurs dans un seul endroit
  function triggerFullscreenOnInteraction(event) {
    requestFullscreen();
    // Retirer les écouteurs après que l'événement ait été déclenché
    document.removeEventListener('click', triggerFullscreenOnInteraction);
    document.removeEventListener('keydown', triggerFullscreenOnInteraction);
    document.removeEventListener('touchstart', triggerFullscreenOnInteraction);
    document.removeEventListener('mousedown', triggerFullscreenOnInteraction);
  }

  // Écoute les événements d'interaction de l'utilisateur
  document.addEventListener('click', triggerFullscreenOnInteraction);
  document.addEventListener('keydown', triggerFullscreenOnInteraction); // Pour la touche
  document.addEventListener('touchstart', triggerFullscreenOnInteraction); // Pour les appareils tactiles
  document.addEventListener('mousedown', triggerFullscreenOnInteraction); // Pour les clics souris