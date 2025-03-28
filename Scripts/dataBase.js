// Enregistrer un utilisateur via une requête POST
async function registerUser() {
  const user = {
    id: "user123",
    name: "Alice",
    email: "alice@example.com"
  };

  try {
    const response = await fetch('https://etu-go.antodu72210.workers.dev/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    const data = await response.text();
    if (response.ok) {
      console.log('✅ Utilisateur enregistré:', data);
    } else {
      console.error('❌ Erreur lors de l\'enregistrement:', response.status, data);
    }
  } catch (error) {
    console.error('⚠️ Erreur réseau:', error);
  }
}

// Lire un utilisateur via une requête GET
async function getUser(userId) {
  try {
    const response = await fetch(`https://etu-go.antodu72210.workers.dev/user/${userId}`);

    if (response.ok) {
      const userData = await response.json();
      console.log('✅ Données de l\'utilisateur:', userData);
    } else {
      const errorMessage = await response.text();
      console.error('❌ Utilisateur non trouvé:', response.status, errorMessage);
    }
  } catch (error) {
    console.error('⚠️ Erreur réseau:', error);
  }
}

// Exécuter les fonctions
registerUser().then(() => getUser('user123'));

function newUser() {
  // créé un nouvel id pour crée une donné utilisateur
}

function newName(name) {
  // ajoute un nom à l'utilisateur
}

function newFormation(formation) {
  // ajoute une formation a l'utilisateur
}

// faire de meme avec update et delete

function addCourse(course) {
  // ajoute un cours
}

// de meme pour ajouter et supprimer un cours

function login(userName, mdp) {
  // test la connection d'un utilisateur
}