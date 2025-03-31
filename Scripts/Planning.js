

function obtenirMatieres() {
    /*renvoi une liste (array) avec comme valeurs les matieres en fonction de si l'utilisateur a coché dans le formulaire de la page menu-choix.html*/
    let matieres = ["Anglais","Histoire"];
    
    return matieres; 
}

var matieres = obtenirMatieres();

const planning = document.createElement('table');
const cap = document.createElement('thread');
const tr = document.createElement('tr');
const lundi = document.createElement('th');
lundi.textContent = "Lundi";
lundi.scope = "col";
tr.appendChild(lundi);
const mardi = document.createElement('th');
mardi.textContent = "Mardi";
mardi.scope = "col";
tr.appendChild(mardi);
const mercredi = document.createElement('th');
mercredi.textContent = "Mercredi";
mercredi.scope = "col";
tr.appendChild(mercredi);
const jeudi = document.createElement('th');
jeudi.textContent = "Jeudi";
jeudi.scope = "col";
tr.appendChild(jeudi);
const vendredi = document.createElement('th');
vendredi.textContent = "Vendredi";
vendredi.scope = "col";
tr.appendChild(vendredi);
const samedi = document.createElement('th');
samedi.textContent = "Samedi";
samedi.scope = "col";
tr.appendChild(samedi);
const dimanche = document.createElement('th');
dimanche.textContent = "Dimanche";
dimanche.scope = "col";
tr.appendChild(vendredi);



planning.appendChild(tr);


const pl = document.getElementById('planning');
pl.appendChild(planning);

document.head.appendChild(style);
