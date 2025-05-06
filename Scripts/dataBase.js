const URL = "https://etu-go.antodu72210.workers.dev/";

/* ==========================
  FONCTIONS COOKIES
========================== */

// Supprime tous les cookies
function clearCookies() {
  document.cookie.split("; ").forEach((cookie) => {
    let [key] = cookie.split("=");
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
  console.log("✅ Tous les cookies ont été supprimés !");
}

// Crée un cookie
function setCookie(name, value, days = 36500) {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  if (name == "name") value = value.replace(/\s+/g, "_");
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/;`;
}

// Récupère un cookie spécifique
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    let [key, value] = cookie.split("=");
    if (key === name) return decodeURIComponent(value);
  }
  return null;
}

// Récupère tous les cookies sous forme d’objet
function getProfilInfo() {
  let cookieDict = {};
  document.cookie.split("; ").forEach((cookie) => {
    let [key, value] = cookie.split("=");
    cookieDict[key] = decodeURIComponent(value);
  });
  return cookieDict;
}

/* ==========================
  FONCTIONS UTILISATEUR
========================== */

// 📌 Envoie les infos utilisateur (création / mise à jour)
async function newUser() {
  try {
    let cookiesData = getProfilInfo();
    const requiredFields = ["name", "mdp", "nv_etude", "type_etude", "type_eval", "work_time"];

    for (let field of requiredFields) {
      if (!cookiesData[field]) throw new Error(`❌ Champ manquant : ${field}`);
    }

    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cookiesData),
    });

    // Vérifier si le serveur renvoie une erreur spécifique pour un conflit
    if (response.status === 409) {
      console.log("❌ Le pseudonyme est déjà pris. Veuillez choisir un autre pseudonyme.");
      return 409;
    }

    if (!response.ok) throw new Error(`❌ Erreur HTTP: ${response.status}`);

    const data = await response.json();
    console.log("✅ Données utilisateur envoyées :", data);
    return data;
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi des données :", error);
    alert(error.message);  // Afficher l'erreur dans une alerte
  }
}

// 📌 Récupère les infos utilisateur à partir du pseudonyme et du mot de passe
async function getUser() {
  try {
    let name = getCookie("name");
    let mdp = getCookie("mdp");

    if (!name || !mdp) throw new Error("❌ Pseudonyme ou mot de passe introuvable dans les cookies.");

    let pseudoKey = name.replace(/\s+/g, "_");

    const response = await fetch(`${URL}${pseudoKey}/${encodeURIComponent(mdp)}`, {
      method: "GET",
    });

    if (!response.ok) throw new Error(`❌ Erreur HTTP: ${response.status}`);

    const data = await response.json();
    console.log("✅ Données utilisateur récupérées :", data);
    return data;
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des données :", error);
  }
}