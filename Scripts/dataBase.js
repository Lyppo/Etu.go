// Enregistrer un utilisateur via une requête POST
async function registerUser() {
    const user = {
      id: "user123",
      name: "Alice",
      email: "alice@example.com"
    };
  
    const response = await fetch('https://etu-go.antodu72210.workers.dev/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  
    if (response.ok) {
      const data = await response.text();
      console.log('Utilisateur enregistré:', data);
    } else {
      console.error('Erreur lors de l\'enregistrement:', response.statusText);
    }
  }
  
registerUser();  

// Lire un utilisateur via une requête GET
async function getUser(userId) {
    const response = await fetch(`https://etu-go.antodu72210.workers.dev/user/${userId}`);
  
    if (response.ok) {
      const userData = await response.json();
      console.log('Données de l\'utilisateur:', userData);
    } else {
      console.error('Utilisateur non trouvé:', response.statusText);
    }
  }
  
console.log(getUser('user123'));
  