import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getDatabase, ref, push, get, set} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyBZlAJtl6tAtQmXTrY3KE9sp0t235aCLdY",
    authDomain: "galactic-jumper.firebaseapp.com",
    databaseURL: "https://galactic-jumper-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "galactic-jumper",
    storageBucket: "galactic-jumper.appspot.com",
    messagingSenderId: "1092579576445",
    appId: "1:1092579576445:web:47c9986dd7f3327eb9bf14"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function createUserIfNotExists(playerName) {
    const userRef = ref(db, 'scores/' + playerName);

    get(userRef).then((snapshot) => {
        if (!snapshot.exists()) {
            // Créer l'utilisateur avec un score initial de 0 si nécessaire
            set(userRef, { score: 0 });
            console.log("Utilisateur créé avec un score initial de 0");
        } else {
            console.log("Utilisateur existe déjà.");
        }
    }).catch(error => {
        console.error("Erreur lors de la vérification de l'existence de l'utilisateur :", error);
    });
} 


function sendScoreToFirebase(score, playerName) {
    const scoreRef = ref(db, 'scores/' + playerName);

    // Récupérer le score actuel pour comparer
    get(scoreRef).then((snapshot) => {
        if (snapshot.exists()) {
            const currentScore = snapshot.val().score;

            // Comparer le nouveau score avec le score actuel
            if (score > currentScore) {
                // Met à jour le score de l'utilisateur seulement s'il est supérieur
                set(scoreRef, { score: score })
                .then(() => {
                    console.log("Nouveau record! Score mis à jour avec succès : " + score);
                })
                .catch(error => {
                    console.error("Erreur lors de la mise à jour du score :", error);
                });
            } else {
                console.log("Le score soumis (" + score + ") n'est pas meilleur que le record actuel (" + currentScore + "). Mise à jour non effectuée.");
            }
        } else {
            // Si aucun score n'est trouvé, cela signifie que c'est le premier score pour cet utilisateur
            set(scoreRef, { score: score })
            .then(() => {
                console.log("Premier score enregistré avec succès : " + score);
            })
            .catch(error => {
                console.error("Erreur lors de l'enregistrement du premier score :", error);
            });
        }
    }).catch(error => {
        console.error("Erreur lors de la récupération du score existant :", error);
    });
}


window.createUserIfNotExists = createUserIfNotExists;
window.sendScoreToFirebase = sendScoreToFirebase;

export { db, ref, set, get };