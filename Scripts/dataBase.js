const URL = 'https://etu-go.antodu72210.workers.dev/';

// Fonction pour initialiser le cookie avec l'ID
function setCookie(id) {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 100); // Le cookie dure 100 ans (effectivement "infinie")
    document.cookie = `user_id=${id}; expires=${expires.toUTCString()}; path=/`;
}

// Fonction pour récupérer l'ID à partir du cookie
function getID() {
    // Récupérer tous les cookies
    const cookies = document.cookie.split('; ');
  
    // Chercher le cookie 'user_id'
    const userIdCookie = cookies.find(cookie => cookie.startsWith('user_id='));
  
    // Si le cookie existe, extraire l'ID et le retourner
    if (userIdCookie) {
        const userId = userIdCookie.split('=')[1]; // Extraire la valeur après '='
        return userId;
    } else {
        // Si le cookie n'existe pas, retourner -1
        return false;
    }
}
  
// Fonction pour créer un nouvel utilisateur
async function newUser() {
    try {
      // Exécution de la requête GET vers le worker
      const response = await fetch('https://etu-go.antodu72210.workers.dev/', { method: 'GET' });
  
      // Vérifie si la réponse est correcte
      if (!response.ok) {
        throw new Error('Erreur lors de la création de l\'utilisateur');
      }
  
      const data = await response.json();
      
      // Initialisation du cookie avec l'ID récupéré
      setCookie(data.id);
  
      console.log('Nouvel utilisateur créé, ID stocké dans le cookie:', data.id);

      return data.id;
    } catch (error) {
      console.error('Erreur dans la création de l\'utilisateur:', error);
    }
}

console.log(getID());
  
// Appel de la fonction et utilisation de .then() pour gérer le résultat
newUser().then(id => {
    console.log('ID utilisateur récupéré:', id);
    console.log(getID());
});

/*

nv etude
domaine d'etude
type d'evaluation
temps de revision
pseudo et mdp

*/