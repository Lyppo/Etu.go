async function destroy_main(event) {
    let main = document.querySelector('main');
    main.remove();
    requestFullscreen();
    let info = getProfilInfo();
    const requiredFields = ["name", "mdp", "nv_etude", "type_etude", "type_eval", "work_time"];

    for (let field of requiredFields) if (!info[field]) {
        document.body.appendChild(await lancement());
        return;
    }
    document.body.appendChild(await accueil());
}

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

async function lancement() {
    // Création de l'élément principal
    let main = document.createElement("main");
    main.id = "fond_bleu";

    // Création du div contenant le logo et les boutons
    let lancementDiv = document.createElement("div");
    lancementDiv.className = "lancement";

    // Ajout du logo
    let logo = document.createElement("img");
    logo.src = "Images/Etu.go-Logo-wbg.png";
    logo.alt = "etu.go logo";
    logo.id = "logo";

    // Création du bouton "C'EST PARTI !"
    let cestPartiDiv = document.createElement("div");
    cestPartiDiv.className = "cestparti";

    let cestPartiLink = document.createElement("a");

    let cestPartiText = document.createElement("p");
    cestPartiText.textContent = "C'EST PARTI !";

    // Ajout du texte au lien puis au div
    cestPartiLink.appendChild(cestPartiText);
    cestPartiDiv.appendChild(cestPartiLink);

    // Création du bouton "J'AI DÉJÀ UN COMPTE"
    let dejaCompteDiv = document.createElement("div");
    dejaCompteDiv.id = "login";
    dejaCompteDiv.className = "dejacompte";

    let dejaCompteLink = document.createElement("a");
    dejaCompteDiv.className = "liensc";

    let dejaCompteText = document.createElement("p");
    dejaCompteText.textContent = "J'AI DÉJÀ UN COMPTE";

    // Ajout du texte au lien puis au div
    dejaCompteLink.appendChild(dejaCompteText);
    dejaCompteDiv.appendChild(dejaCompteLink);

    // Ajout des éléments dans le div principal
    lancementDiv.appendChild(logo);
    lancementDiv.appendChild(cestPartiDiv);
    lancementDiv.appendChild(dejaCompteDiv);

    // Ajout du div principal dans le main
    main.appendChild(lancementDiv);

    let links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => link.remove());

    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "Style/lancement.css"; // Chemin du fichier CSS
    document.head.appendChild(link);
    return main;
}

function accueil() {

    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => link.remove());
    
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "Style/app.css";
    document.head.appendChild(link);

    // 4. Création de la structure du body

    let main = document.createElement("main");

    // ----- HEADER -----
    let header = document.createElement("header");

    let infoBar = document.createElement("div");
    infoBar.id = "info-bar";

    let accountDiv = document.createElement("div");
    accountDiv.id = "account";

    let userImg = document.createElement("img");
    userImg.src = "Images/user-top.png";
    userImg.id = "userimg";

    let texteTop = document.createElement("div");
    texteTop.id = "texte-top";
    texteTop.innerHTML = "<h2>SALUT, MATHIS !</h2><p>Heureux de te revoir</p>";

    let messageImg = document.createElement("img");
    messageImg.src = "Images/message-top.png";
    messageImg.id = "messageimg";

    let deconnexion = document.createElement("a");
    deconnexion.href = "index.html";
    deconnexion.id = "deconnection";
    deconnexion.addEventListener("click", clearCookies);

    let deconnexionImg = document.createElement("img");
    deconnexionImg.src = "Images/deconnection.png";
    deconnexion.appendChild(deconnexionImg);

    accountDiv.append(userImg, texteTop, messageImg, deconnexion);

    let bar = document.createElement("div");
    bar.id = "bar";
    bar.innerHTML = `<a href="menu-choix.html"><p>CRÉER UN PLANNING DE RÉVISIONS</p></a>`;

    header.append(infoBar, accountDiv, bar);

    // ----- MES LEÇONS -----
    let mesLecons = document.createElement("div");
    mesLecons.className = "mes_lecons";

    let grid12 = document.createElement("div");
    grid12.className = "grid12";
    grid12.innerHTML = "<p><strong>Mes leçons</strong></p><p>Voir tout</p>";

    let grid14 = document.createElement("div");
    grid14.className = "grid14";

    let flecheGauche = document.createElement("div");
    flecheGauche.id = "fleche_gauche";
    flecheGauche.innerHTML = `<img src="Images/symbole-fleche-droite.png" alt="fleche">`;

    let lecons = [
        { img: "Images/lecon_anglais.jpg", titre: "Anglais", progression: "60%" },
        { img: "Images/lecon_math.jpg", titre: "Math", progression: "64%" }
    ];

    lecons.forEach(lecon => {
        let bloc = document.createElement("div");
        bloc.className = "lecons_bloc";
        bloc.innerHTML = `
            <img src="${lecon.img}" alt="${lecon.titre} image">
            <h4>${lecon.titre}</h4>
            <div class="progress_bar"><div class="progression"></div></div>
            <div class="pourcent13">
                <img src="Images/etoile.png" alt="etoile"><p>${lecon.progression}</p><img src="Images/coeur.jpg" alt="coeur">
            </div>`;
        grid14.appendChild(bloc);
    });

    let flecheDroite = document.createElement("div");
    flecheDroite.id = "fleche_droite";
    flecheDroite.innerHTML = `<img src="Images/symbole-fleche-droite.png" alt="fleche">`;

    grid14.prepend(flecheGauche);
    grid14.appendChild(flecheDroite);
    mesLecons.append(grid12, grid14);

    // ----- CATÉGORIES -----
    let categories = document.createElement("div");
    categories.className = "categories";

    let categoriesGrid12 = document.createElement("div");
    categoriesGrid12.className = "grid12";
    categoriesGrid12.innerHTML = "<p><strong>Catégories</strong></p><p>Voir tout</p>";

    let categoriesGrid14 = document.createElement("div");
    categoriesGrid14.className = "grid14";

    let categoriesData = [
        { img: "Images/quizz .png", titre: "Quiz" },
        { img: "Images/flashcards.png", titre: "Flashcards" },
        { img: "Images/canal.png", titre: "Canal" },
        { img: "Images/destination.png", titre: "Destination" }
    ];

    categoriesData.forEach(cat => {
        let div = document.createElement("div");
        div.innerHTML = `<img src="${cat.img}" alt="image ${cat.titre}"><p>${cat.titre}</p>`;
        categoriesGrid14.appendChild(div);
    });

    let planningDiv = document.createElement("div");
    planningDiv.id = "planning";

    categories.append(categoriesGrid12, categoriesGrid14, planningDiv);

    // ----- FOOTER -----
    let centreDiv = document.createElement("div");
    centreDiv.id = "centre";

    // Création du footer
    let footer = document.createElement("footer");
    footer.id = "footer";

    // --- Accueil ---
    let divAccueil = document.createElement("div");
    let aAccueil = document.createElement("a");
    let imgAccueil = document.createElement("img");
    imgAccueil.src = "Images/maison.png";
    let pAccueil = document.createElement("p");
    pAccueil.textContent = "Accueil";

    aAccueil.append(imgAccueil, pAccueil);
    divAccueil.appendChild(aAccueil);
    footer.appendChild(divAccueil);

    // --- Annales ---
    let divAnnales = document.createElement("div");
    let aAnnales = document.createElement("a");
    let imgAnnales = document.createElement("img");
    imgAnnales.src = "Images/boussole.png";
    let pAnnales = document.createElement("p");
    pAnnales.textContent = "Annales";

    aAnnales.append(imgAnnales, pAnnales);
    divAnnales.appendChild(aAnnales);
    footer.appendChild(divAnnales);

    // --- Planning ---
    let divPlanning = document.createElement("div");
    let aPlanning = document.createElement("a");
    let imgPlanning = document.createElement("img");
    imgPlanning.src = "Images/planning.png";
    let pPlanning = document.createElement("p");
    pPlanning.textContent = "Planning";

    aPlanning.append(imgPlanning, pPlanning);
    divPlanning.appendChild(aPlanning);
    footer.appendChild(divPlanning);

    // --- Ami(e)s ---
    let divAmis = document.createElement("div");
    let aAmis = document.createElement("a");
    let imgAmis = document.createElement("img");
    imgAmis.src = "Images/communaute.png";
    let pAmis = document.createElement("p");
    pAmis.textContent = "Ami(e)s";

    aAmis.append(imgAmis, pAmis);
    divAmis.appendChild(aAmis);
    footer.appendChild(divAmis);

    // Ajout du footer au body ou autre parent
    document.body.appendChild(footer);

    centreDiv.appendChild(footer);

    // ----- AJOUTER TOUS LES ÉLÉMENTS À MAIN -----
    main.append(header, mesLecons, categories, centreDiv);

    let scriptPlanning = document.createElement("script");
    scriptPlanning.src = "Scripts/Planning.js";
    document.body.appendChild(scriptPlanning);

    return main;
}


document.querySelector('#launch-app').addEventListener('click', destroy_main);