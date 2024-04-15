// Définition de la classe pageInscription
class pageInscription {
    // Définition d'une méthode statique pour inscrire un utilisateur
    static inscrireUtilisateur(username) {
        // Affichage du nom d'utilisateur 
        console.log("Nom d'utilisateur :", username);
        
    }
}
// Fonction pour ouvrir la boîte de dialogue modale
function ouvrirModal() {
    document.getElementById("modal").style.display = "block";
  }
  
  // Fonction pour fermer la boîte de dialogue modale
  function fermerModal() {
    document.getElementById("modal").style.display = "none";
  }
  