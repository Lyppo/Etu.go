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
    cestPartiLink.addEventListener("click", lancement2);

    // Ajout du texte au lien puis au div
    cestPartiLink.appendChild(cestPartiText);
    cestPartiDiv.appendChild(cestPartiLink);

    // Création du bouton "J'AI DÉJÀ UN COMPTE"
    let dejaCompteDiv = document.createElement("div");
    dejaCompteDiv.id = "login";
    dejaCompteDiv.className = "dejacompte";
    dejaCompteDiv.addEventListener("click", singIn);

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

async function lancement2() {
    // Création de l'élément principal
    let main = document.createElement("main");
    document.querySelector('main').remove();
    main.id = "fond_bleu";

    // Création du div contenant le logo et le texte
    let lancementDiv = document.createElement("div");
    lancementDiv.className = "lancement_2";

    // Ajout du logo
    let logo = document.createElement("img");
    logo.src = "Images/Etu.go-Logo-wbg.png";
    logo.alt = "etu.go logo";
    logo.id = "logo";

    // Ajout du texte
    let questionDiv = document.createElement("div");
    questionDiv.id = "question1";

    let questionText = document.createElement("p");
    questionText.textContent = "QUELQUES QUESTIONS POUR PERSONNALISER TES RÉVISIONS";

    questionDiv.appendChild(questionText);

    lancementDiv.append(logo, questionDiv);

    // ----- FOOTER -----
    let footer = document.createElement("footer");

    let continuerDiv = document.createElement("div");
    continuerDiv.id = "sing-in";
    continuerDiv.className = "continuer";

    let continuerLink = document.createElement("a");
    continuerLink.addEventListener('click', niveauEtude);

    let continuerText = document.createElement("p");
    continuerText.textContent = "CONTINUER";

    continuerLink.appendChild(continuerText);
    continuerDiv.appendChild(continuerLink);
    footer.appendChild(continuerDiv);

    // Suppression des anciens styles
    let links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => link.remove());

    // Ajout du style spécifique
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "Style/lancement.css";
    document.head.appendChild(link);

    // Ajout de tous les éléments au main
    main.appendChild(lancementDiv);
    main.appendChild(footer);

    document.body.appendChild(main);
}

async function niveauEtude() {
    // Suppression de l'ancien main s'il existe
    document.querySelector('main')?.remove();

    // Création du nouvel élément main
    let main = document.createElement("main");
    main.id = "fond_bleu";

    // ----- SECTION NIVEAU -----
    let niveauDiv = document.createElement("div");
    niveauDiv.className = "niveau";

    // Barre de progression
    let progressBar = document.createElement("div");
    progressBar.className = "progress_bar";

    let progression = document.createElement("div");
    progression.className = "progression";

    progressBar.appendChild(progression);

    // Logo
    let logo = document.createElement("img");
    logo.src = "Images/Etu.go-Logo-wbg.png";
    logo.alt = "etu.go logo";
    logo.id = "logo";

    // Question
    let questionDiv = document.createElement("div");
    questionDiv.className = "questions";

    let questionText = document.createElement("p");
    questionText.textContent = "Quel est ton niveau d'étude ?";

    questionDiv.appendChild(questionText);

    // Regrouper les éléments
    niveauDiv.append(progressBar, logo, questionDiv);

    // ----- LISTE DES NIVEAUX -----
    let listeContainer = document.createElement("div");
    let liste = document.createElement("ul");
    liste.className = "liste";

    const niveaux = [
        { label: "Collège", id: "College" },
        { label: "Lycée", id: "Lycee" },
        { label: "BUT", id: "BUT" },
        { label: "Licence", id: "Licence" },
        { label: "Master", id: "Master" },
        { label: "BTS", id: "BTS" },
        { label: "Autre", id: "Autre" }
    ];

    niveaux.forEach(niveau => {
        let li = document.createElement("li");
        li.id = niveau.id;

        let img = document.createElement("img");
        img.src = "Images/"; // À compléter
        img.alt = "";

        let p = document.createElement("p");
        p.textContent = niveau.label;

        li.append(img, p);
        li.addEventListener("click", () => {
            let profil = getProfilInfo() || {};
            profil.nv_etude = niveau.id;
            saveNvEtude(profil);
            document.querySelectorAll(".liste li").forEach(el => el.classList.remove("selected"));
            li.classList.add("selected");
        });

        liste.appendChild(li);
    });

    listeContainer.appendChild(liste);

    // ----- FOOTER -----
    let footer = document.createElement("footer");

    let continuerDiv = document.createElement("div");
    continuerDiv.id = "nv-etude";
    continuerDiv.className = "continuer";

    let continuerLink = document.createElement("a");
    continuerLink.addEventListener('click', () => {
        if (saveNvEtude() != null) domaineEtudes();
    });

    let continuerText = document.createElement("p");
    continuerText.textContent = "CONTINUER";

    continuerLink.appendChild(continuerText);
    continuerDiv.appendChild(continuerLink);
    footer.appendChild(continuerDiv);

    // Nettoyage des anciens styles
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => link.remove());

    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "Style/lancement.css";
    document.head.appendChild(link);

    // Ajout des éléments au main
    main.append(niveauDiv, listeContainer, footer);
    document.body.appendChild(main);

    saveNvEtude();
}

async function domaineEtudes() {
    // Suppression de l'ancien main
    document.querySelector('main')?.remove();

    // Création du nouvel élément main
    let main = document.createElement("main");
    main.id = "fond_bleu";

    // ----- SECTION DOMAINE -----
    let domaineDiv = document.createElement("div");
    domaineDiv.className = "domaine_etudes";

    let progressBar = document.createElement("div");
    progressBar.className = "progress_bar";

    let progression = document.createElement("div");
    progression.className = "progression";
    progressBar.appendChild(progression);

    let logo = document.createElement("img");
    logo.src = "Images/Etu.go-Logo-wbg.png";
    logo.alt = "etu.go logo";
    logo.id = "logo";

    let questionDiv = document.createElement("div");
    questionDiv.className = "questions";

    let questionText = document.createElement("p");
    questionText.textContent = "Sur quoi porte tes études ?";
    questionDiv.appendChild(questionText);

    domaineDiv.append(progressBar, logo, questionDiv);

    // ----- LISTE DES DOMAINES -----
    const domaines = [
        { id: "Math", label: "Mathématiques", img: "Images/Math.png" },
        { id: "Com", label: "Communication / Marketing", img: "Images/Com.png" },
        { id: "Droit", label: "Droit", img: "Images/Droit.png" },
        { id: "Psy", label: "Psychologie", img: "Images/Psy.png" },
        { id: "Ges", label: "Gestion d'entreprises", img: "Images/Ges.png" },
        { id: "Med", label: "Médecine / Pharmacie", img: "Images/Med.png" },
        { id: "Langue", label: "Langues", img: "Images/Langue.png" },
        { id: "Autres", label: "Autre", img: "Images/Autres.png" }
    ];

    let listeContainer = document.createElement("div");
    let liste = document.createElement("ul");
    liste.className = "liste";

    domaines.forEach(domaine => {
        let li = document.createElement("li");
        li.id = domaine.id;

        let img = document.createElement("img");
        img.src = domaine.img;
        img.alt = "";

        let p = document.createElement("p");
        p.textContent = domaine.label;

        li.append(img, p);

        li.addEventListener("click", () => {
            let profil = getProfilInfo() || {};
            profil.type_etude = domaine.id;
            saveTypeEtude(profil);
            document.querySelectorAll(".liste li").forEach(el => el.classList.remove("selected"));
            li.classList.add("selected");
        });

        liste.appendChild(li);
    });

    listeContainer.appendChild(liste);

    // ----- FOOTER -----
    let footer = document.createElement("footer");

    let continuerDiv = document.createElement("div");
    continuerDiv.id = "domainebtn";
    continuerDiv.className = "continuer";

    let continuerLink = document.createElement("a");
    continuerLink.addEventListener('click', () => {
        if (saveTypeEtude() != null) evaluation();
    });

    let continuerText = document.createElement("p");
    continuerText.textContent = "CONTINUER";

    continuerLink.appendChild(continuerText);
    continuerDiv.appendChild(continuerLink);
    footer.appendChild(continuerDiv);

    // Nettoyage des anciens styles
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => link.remove());

    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "Style/lancement.css";
    document.head.appendChild(link);

    // Insertion dans le DOM
    main.append(domaineDiv, listeContainer, footer);
    document.body.appendChild(main);

    saveTypeEtude();
}

async function evaluation() {
    // Suppression de l'ancien main
    document.querySelector('main')?.remove();

    // Création de l'élément main
    let main = document.createElement("main");
    main.id = "fond_bleu";

    // ----- SECTION ÉVALUATION -----
    let evalDiv = document.createElement("div");
    evalDiv.className = "evaluation";

    let progressBar = document.createElement("div");
    progressBar.className = "progress_bar";
    let progression = document.createElement("div");
    progression.className = "progression";
    progressBar.appendChild(progression);

    let logo = document.createElement("img");
    logo.src = "Images/Etu.go-Logo-wbg.png";
    logo.alt = "etu.go logo";
    logo.id = "logo";

    let questionDiv = document.createElement("div");
    questionDiv.className = "questions";
    let questionText = document.createElement("p");
    questionText.textContent = "Comment es-tu évalué(e) ?";
    questionDiv.appendChild(questionText);

    evalDiv.append(progressBar, logo, questionDiv);

    // ----- LISTE DES MODES D'ÉVALUATION -----
    const evaluations = [
        { id: "controle", label: "Contrôle continu", img: "" },
        { id: "partiels", label: "Partiels en fin d'année", img: "" }
    ];

    let listeContainer = document.createElement("div");
    let liste = document.createElement("ul");
    liste.className = "liste";

    evaluations.forEach(evalItem => {
        let li = document.createElement("li");
        li.id = evalItem.id;

        let img = document.createElement("img");
        img.src = evalItem.img;
        img.alt = "";

        let p = document.createElement("p");
        p.textContent = evalItem.label;

        li.append(img, p);

        li.addEventListener("click", () => {
            let profil = getProfilInfo() || {};
            profil.evaluation = evalItem.id;
            saveTypeEval(profil);
            document.querySelectorAll(".liste li").forEach(el => el.classList.remove("selected"));
            li.classList.add("selected");
        });

        liste.appendChild(li);
    });

    listeContainer.appendChild(liste);

    // ----- FOOTER -----
    let footer = document.createElement("footer");

    let continuerDiv = document.createElement("div");
    continuerDiv.id = "evalbtn";
    continuerDiv.className = "continuer";

    let continuerLink = document.createElement("a");
    continuerLink.addEventListener('click', () => {
        if (saveTypeEval() != null) tempsRevisions();
    });

    let continuerText = document.createElement("p");
    continuerText.textContent = "CONTINUER";

    continuerLink.appendChild(continuerText);
    continuerDiv.appendChild(continuerLink);
    footer.appendChild(continuerDiv);

    // Nettoyage des anciens styles
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => link.remove());

    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "Style/lancement.css";
    document.head.appendChild(link);

    // Insertion dans le DOM
    main.append(evalDiv, listeContainer, footer);
    document.body.appendChild(main);

    saveTypeEval();
}

async function tempsRevisions() {
    // Suppression de l'ancien <main>
    document.querySelector('main')?.remove();

    // Création de l'élément main
    let main = document.createElement("main");
    main.id = "fond_bleu";

    // ----- SECTION TEMPS DE RÉVISION -----
    let tempsDiv = document.createElement("div");
    tempsDiv.className = "temps_rev";

    let progressBar = document.createElement("div");
    progressBar.className = "progress_bar";
    let progression = document.createElement("div");
    progression.className = "progression";
    progressBar.appendChild(progression);

    let logo = document.createElement("img");
    logo.src = "Images/Etu.go-Logo-wbg.png";
    logo.alt = "etu.go logo";
    logo.id = "logo";

    let questionDiv = document.createElement("div");
    questionDiv.className = "questions";
    let questionText = document.createElement("p");
    questionText.textContent = "Combien de temps par jour peux-tu consacrer aux révisions ?";
    questionDiv.appendChild(questionText);

    tempsDiv.append(progressBar, logo, questionDiv);

    // ----- LISTE DES CHOIX -----
    const tempsOptions = [
        { id: "0.5h", text: "Moins de 30 minutes" },
        { id: "1h", text: "Entre 30 minutes et 1 heure" },
        { id: "2h", text: "Entre 1 et 2 heures" },
        { id: "3h", text: "Entre 2 et 3 heures" },
        { id: "+3h", text: "Plus de 3 heures" }
    ];

    let listeContainer = document.createElement("div");
    let liste = document.createElement("ul");
    liste.className = "liste";

    tempsOptions.forEach(option => {
        let li = document.createElement("li");
        li.id = option.id;

        let p = document.createElement("p");
        p.textContent = option.text;

        li.appendChild(p);

        li.addEventListener("click", () => {
            let profil = getProfilInfo() || {};
            profil.temps_revision = option.id;
            saveTempsRev(profil);
            document.querySelectorAll(".liste li").forEach(el => el.classList.remove("selected"));
            li.classList.add("selected");
        });

        liste.appendChild(li);
    });

    listeContainer.appendChild(liste);

    // ----- FOOTER -----
    let footer = document.createElement("footer");

    let continuerDiv = document.createElement("div");
    continuerDiv.id = "tempsbtn";
    continuerDiv.className = "continuer";

    let continuerLink = document.createElement("a");
    continuerLink.addEventListener('click', () => {
        if (saveTempsRev() != null) pret();
    });

    let continuerText = document.createElement("p");
    continuerText.textContent = "CONTINUER";

    continuerLink.appendChild(continuerText);
    continuerDiv.appendChild(continuerLink);
    footer.appendChild(continuerDiv);

    // Nettoyage des anciens styles
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => link.remove());

    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "Style/lancement.css";
    document.head.appendChild(link);

    // Insertion dans le DOM
    main.append(tempsDiv, listeContainer, footer);
    document.body.appendChild(main);

    saveTempsRev();
}

async function pret() {
    // Supprime l'ancien <main> s'il existe
    document.querySelector('main')?.remove();

    // Création du nouveau main
    let main = document.createElement("main");
    main.id = "fond_bleu";

    // ----- SECTION PRÊT -----
    let pretDiv = document.createElement("div");
    pretDiv.className = "pret";

    // Barre de progression
    let progressBar = document.createElement("div");
    progressBar.className = "progress_bar";
    let progression = document.createElement("div");
    progression.className = "progression";
    progressBar.appendChild(progression);

    // Logo
    let logo = document.createElement("img");
    logo.src = "Images/Etu.go-Logo-wbg.png";
    logo.alt = "etu.go logo";
    logo.id = "logo";

    // Texte
    let message = document.createElement("p");
    message.textContent = "PRÊT À RÉUSSIR ?";

    pretDiv.append(progressBar, logo, message);

    // ----- FOOTER -----
    let footer = document.createElement("footer");

    let continuerDiv = document.createElement("div");
    continuerDiv.id = "pretbtn";
    continuerDiv.className = "continuer";

    let continuerLink = document.createElement("a");
    continuerLink.addEventListener('click', connexion);

    let continuerText = document.createElement("p");
    continuerText.textContent = "CONTINUER";

    continuerLink.appendChild(continuerText);
    continuerDiv.appendChild(continuerLink);
    footer.appendChild(continuerDiv);

    // Nettoyage des anciens styles
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => link.remove());

    // Ajout des nouvelles feuilles de style
    let link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "Style/lancement.css";
    document.head.appendChild(link1);

    let link2 = document.createElement("link");
    link2.rel = "stylesheet";
    document.head.appendChild(link2);

    // Ajout au DOM
    main.append(pretDiv, footer);
    document.body.appendChild(main);
}

async function connexion() {
    // Suppression de l'ancien main
    document.querySelector('main')?.remove();

    // Création du main
    const main = document.createElement("main");
    main.id = "fond_bleu";

    // ----- EN-TÊTE -----
    const connexionDiv = document.createElement("div");
    connexionDiv.className = "connexion";

    const progressBar = document.createElement("div");
    progressBar.className = "progress_bar";
    const progression = document.createElement("div");
    progression.className = "progression";
    progressBar.appendChild(progression);

    const logo = document.createElement("img");
    logo.src = "Images/Etu.go-Logo-wbg.png";
    logo.alt = "etu.go logo";
    logo.id = "logo";

    connexionDiv.append(progressBar, logo);

    // ----- FORMULAIRE -----
    const formDiv = document.createElement("div");
    formDiv.className = "formulaire";

    const inputIdentifiant = document.createElement("input");
    inputIdentifiant.type = "text";
    inputIdentifiant.placeholder = "Identifiant";
    inputIdentifiant.className = "champ";
    inputIdentifiant.id = "identifiant";  // Ajout d'un id pour faciliter la récupération

    const inputMdp = document.createElement("input");
    inputMdp.type = "password";
    inputMdp.placeholder = "Mot de passe";
    inputMdp.className = "champ";
    inputMdp.id = "motDePasse";  // Ajout d'un id pour faciliter la récupération

    formDiv.append(inputIdentifiant, inputMdp);

    // ----- FOOTER -----
    const footer = document.createElement("footer");

    const continuerDiv = document.createElement("div");
    continuerDiv.id = "connexionbtn";
    continuerDiv.className = "continuer";

    const continuerLink = document.createElement("a");
    continuerLink.addEventListener("click", async function() {
        let identifiant = document.querySelector("#identifiant").value.trim();
        let motDePasse = document.querySelector("#motDePasse").value.trim();
        document.querySelector("#identifiant").value = identifiant;
        document.querySelector("#motDePasse").value = motDePasse;
        if (login(identifiant, motDePasse)) {
            rep = await newUser();
            if (rep == null) {
                alert("Erreur lors de la connexion");
            }
            else if (rep == "409") {
                alert("❌ Le pseudo est déjà pris. Veuillez choisir un autre pseudo.");
            }
            else {
                document.querySelector('main').remove();
                document.body.appendChild(accueil());
            }
        }
    });

    const continuerText = document.createElement("p");
    continuerText.textContent = "CONTINUER";

    continuerLink.appendChild(continuerText);
    continuerDiv.appendChild(continuerLink);
    footer.appendChild(continuerDiv);

    // Nettoyage des anciens styles
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => link.remove());

    // Ajout des nouveaux styles
    const link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "Style/lancement.css";
    document.head.appendChild(link1);

    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    document.head.appendChild(link2);

    // Insertion dans le DOM
    main.append(connexionDiv, formDiv, footer);
    document.body.appendChild(main);
}

async function singIn() {
    // Suppression de l'ancien main
    document.querySelector('main')?.remove();

    // Création du main
    const main = document.createElement("main");
    main.id = "fond_bleu";

    // ----- EN-TÊTE -----
    const connexionDiv = document.createElement("div");
    connexionDiv.className = "connexion";

    const logo = document.createElement("img");
    logo.src = "Images/Etu.go-Logo-wbg.png";
    logo.alt = "etu.go logo";
    logo.id = "logo";
    logo.style.paddingTop = "2vh";

    connexionDiv.append(logo);

    // ----- FORMULAIRE -----
    const formDiv = document.createElement("div");
    formDiv.className = "formulaire";

    const inputIdentifiant = document.createElement("input");
    inputIdentifiant.type = "text";
    inputIdentifiant.placeholder = "Identifiant";
    inputIdentifiant.className = "champ";
    inputIdentifiant.id = "identifiant";  // Ajout d'un id pour faciliter la récupération

    const inputMdp = document.createElement("input");
    inputMdp.type = "password";
    inputMdp.placeholder = "Mot de passe";
    inputMdp.className = "champ";
    inputMdp.id = "motDePasse";  // Ajout d'un id pour faciliter la récupération

    formDiv.append(inputIdentifiant, inputMdp);

    // ----- FOOTER -----
    const footer = document.createElement("footer");

    const continuerDiv = document.createElement("div");
    continuerDiv.id = "connexionbtn";
    continuerDiv.className = "continuer";

    const continuerLink = document.createElement("a");
    continuerLink.addEventListener("click", async function() {
        let identifiant = document.querySelector("#identifiant").value.trim();
        let motDePasse = document.querySelector("#motDePasse").value.trim();
        document.querySelector("#identifiant").value = identifiant;
        document.querySelector("#motDePasse").value = motDePasse;
        if (login(identifiant, motDePasse)) {
            rep = await getUser();
            if (rep == null) {
                alert("mot de passe ou identifiant incorrect");
            }
            else {
                rep = rep.data;
                clearCookies();
                setCookie("name", rep.name);
                setCookie("mdp", rep.mdp);
                setCookie("nv_etude", rep.nv_etude);
                setCookie("type_etude", rep.type_etude);
                setCookie("type_eval", rep.type_eval);
                setCookie("work_time", rep.work_time);
                document.querySelector('main').remove();
                document.body.appendChild(accueil());
            }
        }
    });

    const continuerText = document.createElement("p");
    continuerText.textContent = "CONTINUER";

    continuerLink.appendChild(continuerText);
    continuerDiv.appendChild(continuerLink);
    footer.appendChild(continuerDiv);

    // Nettoyage des anciens styles
    document.querySelectorAll('link[rel="stylesheet"]').forEach(link => link.remove());

    // Ajout des nouveaux styles
    const link1 = document.createElement("link");
    link1.rel = "stylesheet";
    link1.href = "Style/lancement.css";
    document.head.appendChild(link1);

    const link2 = document.createElement("link");
    link2.rel = "stylesheet";
    document.head.appendChild(link2);

    // Insertion dans le DOM
    main.append(connexionDiv, formDiv, footer);
    document.body.appendChild(main);
}

function accueil() {

    user= getProfilInfo();

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
    let nom = user.name.toUpperCase();
    if (nom.length > 10) {
        nom = nom.substring(0, 7) + "...";
    }
    texteTop.innerHTML = `<h2>SALUT, ${nom} !</h2><p>Heureux de te revoir</p>`;

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

    let p1 = document.createElement("p");
    let strong = document.createElement("strong");
    strong.textContent = "Mes leçons";
    p1.appendChild(strong);

    let p2 = document.createElement("p");
    p2.textContent = "Voir tout";

    p2.addEventListener("click", () => {
        window.location.href = "cours.html";
    });

    grid12.appendChild(p1);
    grid12.appendChild(p2);

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

    divAnnales.addEventListener("click", () => {
        window.location.href = "annales.html";
    });

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