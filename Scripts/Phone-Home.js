document.getElementById("launch-app").addEventListener("click", function() {
    window.location.href = "lancement.html";
});

function obtenirHeure() {
    const date = new Date();
    let heures = date.getHours();
    let minutes = date.getMinutes();
  
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    return `${heures}h${minutes}`;
}
  
function obtenirDate() {
    const date = new Date();
    const mois = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    const jours = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  
    const jourSemaine = jours[date.getDay()];
    const jourMois = date.getDate();
    const moisNom = mois[date.getMonth()];
  
    return `${jourSemaine} ${jourMois} ${moisNom}`;
}

const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');

timeElement.textContent = obtenirHeure();
dateElement.textContent = obtenirDate();