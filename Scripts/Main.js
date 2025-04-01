const camera = document.createElement('div');
camera.id = 'camera';
const geste = document.createElement('div');
geste.id = 'geste';

const wifi = document.createElement('img');
wifi.id = 'wifi';
wifi.src = 'Images/wifi.png';

const heure = document.createElement('p');
heure.id = 'heure';

function obtenirHeure() {
    const date = new Date();
    let heures = date.getHours();
    let minutes = date.getMinutes();
    const ampm = heures >= 12 ? 'Pm' : 'Am';

    heures = heures % 12;
    heures = heures ? heures : 12;
  
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    return `${heures}:${minutes} ${ampm}`;
}
heure.textContent = obtenirHeure();

const reseau = document.createElement('img');
reseau.id = 'reseau';
reseau.src = 'Images/reseau.png';

const notif = document.createElement('img');
notif.id = 'notif';
notif.src = 'Images/notif.png';

const batterie = document.createElement('img');
batterie.id = 'batterie';
batterie.src = 'Images/batterie.png';

const bar = document.querySelector('main');
bar.prepend(camera, geste, wifi, heure, reseau, notif, batterie);

document.addEventListener('DOMContentLoaded', function () {
    const notifIcon = document.getElementById('notif');

    if (!notifIcon) {
        console.error("❌ Erreur : L'icône de notification n'existe pas !");
        return;
    }

    // Création du panneau de notifications
    const notifPanel = document.createElement('div');
    notifPanel.id = 'notifPanel';
    Object.assign(notifPanel.style, {
        position: 'absolute',
        height: '91%',
        width: '43.5vh',
        backgroundColor: 'rgba(50, 50, 50, 0.95)',
        borderRadius: '2vh',
        padding: '2vh',
        color: 'white',
        display: 'none', // Caché par défaut
        zIndex: '200',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    });

    // Ajout d'une croix pour fermer
    const closeNotif = document.createElement('span');
    closeNotif.textContent = "✖";
    Object.assign(closeNotif.style, {
        position: 'absolute',
        top: '1.5vh',
        right: '2vh',
        cursor: 'pointer',
        fontSize: '2vh',
        color: 'white'
    });

    closeNotif.addEventListener('click', function () {
        notifPanel.style.display = 'none';
    });

    // Conteneur des notifications
    const notifContainer = document.createElement('div');
    notifContainer.id = 'notifContainer';
    Object.assign(notifContainer.style, {
        width: '100%',
        overflowY: 'auto',
        maxHeight: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '3vh'
    });

    // Message par défaut
    const notifText = document.createElement('p');
    notifText.id = "notifText";
    notifText.textContent = "Aucune notification";
    notifText.style.fontSize = '2vh';
    notifText.style.marginTop = '4vh';

    notifPanel.appendChild(closeNotif);
    notifPanel.appendChild(notifText);
    notifPanel.appendChild(notifContainer);

    // Ajout du panneau dans "main" (assurez-vous que "bar" existe)
    const bar = document.querySelector('main');
    if (bar) {
        bar.prepend(notifPanel);
    } else {
        console.error("❌ Erreur : Élément 'main' introuvable !");
    }

    // Toggle d'affichage du panneau au clic sur l’icône de notification
    notifIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        notifPanel.style.display = (notifPanel.style.display === 'none' ? 'flex' : 'none');
    });

    // Cacher le panneau si on clique ailleurs
    document.addEventListener('click', function (event) {
        if (event.target !== notifIcon && event.target !== notifPanel && !notifPanel.contains(event.target)) {
            notifPanel.style.display = 'none';
        }
    });

});

// Fonction pour ajouter une notification
function ajouterNotification(message) {
    const notifContainer = document.getElementById('notifContainer');
    const notifText = document.getElementById('notifText');

    if (!notifContainer) {
        console.error("❌ Erreur : notifContainer introuvable !");
        return;
    }

    // Supprime le message "Aucune notification" s'il existe
    if (notifText) {
        notifText.remove();
    }

    // Création d'un nouvel élément pour la notification
    const nouvelleNotif = document.createElement('div');
    nouvelleNotif.classList.add('notification');
    nouvelleNotif.textContent = message;
    Object.assign(nouvelleNotif.style, {
        backgroundColor: '#444',
        padding: '1vh',
        margin: '1vh 0',
        borderRadius: '1vh',
        width: '90%',
        textAlign: 'left',
        color: 'white'
    });

    // Ajoute la notification en haut
    notifContainer.prepend(nouvelleNotif);
}

// Attendre que le DOM soit prêt avant d'ajouter des notifications
window.onload = function () {
    ajouterNotification("🔔 Nouveau message reçu !");
    ajouterNotification("📑 Etu.go : il est l'heure de réviser !");
    ajouterNotification("✅ Téléchargement terminé !");
};




const style = document.createElement('style');
style.textContent = `
    body {
        background-color: #222;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100vh;
        margin: 0;
    }

    main {
        width: 100vw;
        height: 100vh;
        background-color: #dee0df;
    }

    #camera, #geste {
        display: none;
    }
    
    #info-bar p {
    	padding-left:5vh;
    }

    #heure, #wifi, #reseau, #notif, #batterie {
        position: absolute;
        z-index: 10;
        top: 3vh;
        transform: translate(-50%, -50%);
        height: 1.8vh;
    }
    
    #heure {
        left: 70px;
        margin: 0;
        font-size: 1.8vh;
    }
    
    #wifi {
        left: 20px;
    }
    
    #reseau {
        right: 100px;
    }
    
    #notif {
        right: 60px;
    }
    
    #batterie {
        right: 20px;
    }

    /* sur pc */
    @media (hover: hover) and (pointer: fine) {
        main {
            height: 95vh;
            width: auto;
            aspect-ratio: 9 / 18;
            border-radius: 3vh;
            box-shadow: #fff 0 0 1vh;
            border: 0.3vh solid #000;
            overflow: hidden;
	        overflow-y: auto;
            scrollbar-width: none; /* Cacher la barre sur Firefox */
        }

        main::-webkit-scrollbar {
            display: none; /* Cacher la barre sur Chrome, Safari, Edge */
        }

        #camera, #geste {
            display: block;
            z-index: 10;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            background-color: #000;
        }

        #camera {
            top: calc(2vh + 3%);
            border-radius: 50%;
            width: 1.5vh;
            height: 1.5vh;
            box-shadow: inset #888 0 0 0.5vh;
        }

        #geste {
            bottom: calc(2vh + 2%);
            border-radius: 0.5vh;
            width: 15vh;
            height: 0.5vh;
        }
        
        #heure {
            left: calc(50vw - 16vh);
            margin: 0;
            font-size: 1.8vh;
        }

        #heure, #wifi, #reseau, #notif, #batterie {
            top: 4.5vh;
        }
    
        #wifi {
            left: calc(50vw - 21vh);
        }
        
        #reseau {
            left: calc(50vw + 15vh);
        }
        
        #notif {
            left: calc(50vw + 18vh);
        }
        
        #batterie {
            left: calc(50vw + 21vh);
        }
        
        #footer {
            transform:translate(-50%, -2.5vh);
            width:42vh;
            padding-bottom:3vh;
        }
        
    }
`;

document.head.appendChild(style);
