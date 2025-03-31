

function obtenirMatieres() {
    /*renvoi une liste (array) avec comme valeurs les matieres en fonction de si l'utilisateur a coché dans le formulaire de la page menu-choix.html*/
    let matieres = ["Anglais","Histoire"];
    
    return matieres; 
}

var matieres = obtenirMatieres();

if (matieres.length != 0) {
	const planning = document.createElement('table');
	const tr = document.createElement('tr');

	const heures = document.createElement('th');
	heures.textContent = "H";
	heures.scope = "col";
	tr.appendChild(heures);

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

	planning.appendChild(tr);

	for (let i = 15; i < 20; i++) {
		const tr = document.createElement('tr');
		const th = document.createElement('th');
		th.textContent = i+"h00";
		th.scope = "col";
		tr.appendChild(th);
		for (let j = 1; j < 7; j++) {
			const th = document.createElement('th');
			const alea = Math.floor( Math.random() * 2 );
			if (alea == 0) {
				const mat = Math.floor( Math.random() * matieres.length);
				th.textContent = matieres[mat];
			}
			else {
				th.textContent = "";
			}
			th.scope = "col";
			tr.appendChild(th);	
		}
		planning.appendChild(tr);
	}


	const pl = document.getElementById('planning');
	pl.appendChild(planning);
}

document.head.appendChild(style);
