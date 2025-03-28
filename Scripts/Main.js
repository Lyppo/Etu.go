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
        left: 55px;
        margin: 0;
        font-size: 1.8vh;
    }
    
    #wifi {
        left: 20px;
    }
    
    #reseau {
        right: 60px;
    }
    
    #notif {
        right: 40px;
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
    }
`;

document.head.appendChild(style);
