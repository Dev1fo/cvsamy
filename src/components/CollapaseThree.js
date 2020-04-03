import React from "react";

function CollapaseThree() {
  return (
    <div
      id="collapseThree"
      className="collapse"
      aria-labelledby="headingThree"
      data-parent="#accordionExample"
    >
      <div className="card-body">
        <div className="bordure">
          <p
            style={{
              borderBottom: "1px dashed #48da9b",
              paddingBottom: "30px"
            }}
          >
            {" "}
            <h1>Hcube Conseil</h1>
            <h2>De janvier 2020 à maintenant</h2>
            <h4>Client :TOMBAREL</h4>
            <h5>Projet </h5>
            • Développement d'un site pour le service d'urbanisme de la chambre
            des notaires des Bouches-du-Rhône
            <br />• Réalisation d’un espace administrateur
            <br />
            <br />
            <h4>Client : Medical Map</h4>
            <h5>Projet </h5>
            • Développement d'un site intitulé Disponiblités personnel Médical
            <br />• Réalisation d’un calendrier dynamique( Ajout & Suppression
            d’évenements)
            <br />• Développement d’une recherche dynamique des adresses du
            monde
            <br />
            <br />
            <h4>Client : Idemia</h4>
            <h5>Projet </h5>
            • Développement d'un site et d’une application mobile pour IDEMIA
            <br />• Réalisation du mockup du site pour Pc, tablette et
            smartphone
            <br />• Préparation de l’environnement technique en React Native
          </p>
          <p
            style={{
              borderBottom: "1px dashed #48da9b",
              paddingBottom: "30px"
            }}
          >
            {" "}
            <h1>TCS France</h1>
            <h2>Juin 2018 - Janvier 2019</h2>
            <h5>Projet </h5>
            • Mise en place d’une application de visualisation de données en
            format Json
            <br />• Mise en place de deux versions ( React & Angular 7)
            <br />• Récupération de données depuis un fichier Json ou url.
            <br />• Peut être animé ou non lors de l’affichage des données
          </p>
          <p
            style={{
              borderBottom: "1px dashed #48da9b",
              paddingBottom: "30px"
            }}
          >
            {" "}
            <h1>ADUX</h1>
            <h2>Janvier 2018 - Mai 2018</h2>
            <h5>Projet </h5>
            • Objectif de la mission chez la société Adux, rendre les sites
            responsives pour tout types d’écrans.
            <br />• Utilisation des téchnologies Media Queries et le Grid
            <br />• Prendre en charge l’ensemble des projets du pôle, sous le
            suivi d’un chef de projet
            <br />• Encadrement et suivi technique d’une équipe de 6 personnes
            en mode agile
          </p>
          <p
            style={{
              borderBottom: "1px dashed #48da9b",
              paddingBottom: "30px"
            }}
          >
            {" "}
            <h1>UCP</h1>
            <h2>Janvier 2017-Novembre 2017</h2>
            <h5>Projet </h5>
            • Création d’un site de Sondage Dynamique
            <br />• Formulaire dynamique avec back-office administrateur
            <br />• Espace étudiant avec limitation du temps du sondage
            <br />• Affichage des résultats des sondages en image
            <br /> • Analyse de la qualité du code avec les normes W3C
            <br /> • Mise en place du parcours utilisateurs UX/UI
          </p>
        </div>
      </div>
    </div>
  );
}

export default CollapaseThree;
