const API_URL = "https://etu-go.antodu72210.workers.dev";

// Fonction pour récupérer un utilisateur
async function getUser(userId) {
    const response = await fetch(`${API_URL}/user/${userId}`);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error("Utilisateur non trouvé");
    }
}

// Fonction pour créer un nouvel utilisateur
async function newUser(name, email, mdp) {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, mdp })
    });
    return await response.json();
}

// Fonction pour modifier le nom d'un utilisateur
async function newName(userId, name) {
    const response = await fetch(`${API_URL}/edit/name/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
    });
    return response.text();
}

// Fonction pour ajouter une formation à un utilisateur
async function newFormation(userId, formation) {
    const response = await fetch(`${API_URL}/edit/formation/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formation })
    });
    return response.text();
}

// Fonction pour ajouter un cours
async function addCourse(userId, course) {
    const response = await fetch(`${API_URL}/edit/course/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ course })
    });
    return response.text();
}

// Fonction pour supprimer un cours
async function deleteCourse(userId, course) {
    const response = await fetch(`${API_URL}/delete/course/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ course })
    });
    return response.text();
}

// Fonction pour mettre à jour un utilisateur (données générales)
async function updateUser(userId, newData) {
    const response = await fetch(`${API_URL}/edit/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData)
    });
    return response.text();
}

// Fonction pour supprimer un utilisateur
async function deleteUser(userId) {
    const response = await fetch(`${API_URL}/delete/${userId}`, {
        method: "DELETE"
    });
    return response.text();
}

// Fonction pour connecter un utilisateur
async function login(userName, mdp) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, mdp })
    });

    if (response.ok) {
        return "Connexion réussie !";
    } else {
        throw new Error("Nom d'utilisateur ou mot de passe incorrect");
    }
}

async function testAPI() {
  console.log("🔄 Début des tests...");

  try {
      // 1️⃣ Création d'un utilisateur
      console.log("🟢 Test: Création d'un utilisateur...");
      const userResponse = await newUser("anto", "test@example.com", "password123");
      console.log("✅ Utilisateur créé:", userResponse);
      
      // Récupérer l'ID généré
      const userId = userResponse.id;
      if (!userId) throw new Error("❌ Erreur: Aucun ID retourné");

      // 2️⃣ Récupération de l'utilisateur
      console.log("🟢 Test: Récupération de l'utilisateur...");
      const userData = await getUser(userId);
      console.log("✅ Utilisateur récupéré:", userData);

      // 3️⃣ Modification du nom
      console.log("🟢 Test: Modification du nom...");
      const nameUpdate = await newName(userId, "Updated Name");
      console.log("✅ Nom mis à jour:", nameUpdate);

      // 4️⃣ Ajout d'une formation
      console.log("🟢 Test: Ajout d'une formation...");
      const formationUpdate = await newFormation(userId, "Développement Web");
      console.log("✅ Formation ajoutée:", formationUpdate);

      // 5️⃣ Ajout d'un cours
      console.log("🟢 Test: Ajout d'un cours...");
      const courseUpdate = await addCourse(userId, "JavaScript Avancé");
      console.log("✅ Cours ajouté:", courseUpdate);

      // 6️⃣ Suppression d'un cours
      console.log("🟢 Test: Suppression d'un cours...");
      const deleteCourseResponse = await deleteCourse(userId, "JavaScript Avancé");
      console.log("✅ Cours supprimé:", deleteCourseResponse);

      // 7️⃣ Mise à jour complète de l'utilisateur
      console.log("🟢 Test: Mise à jour complète...");
      const updateResponse = await updateUser(userId, { name: "Final Name", email: "final@example.com" });
      console.log("✅ Utilisateur mis à jour:", updateResponse);

      // 8️⃣ Connexion avec le bon mot de passe
      console.log("🟢 Test: Connexion...");
      const loginSuccess = await login("anto", "password123");
      console.log("✅ Connexion réussie:", loginSuccess);

  } catch (error) {
      console.error("❌ Erreur lors des tests:", error);
  }
}

// Exécuter tous les tests
testAPI();