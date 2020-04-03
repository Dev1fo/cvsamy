import React from "react";
import ModalImage from "react-modal-image";
import medicalmapImg from "../docImg/medicalmap.PNG";
import tcsImg from "../docImg/tcs.PNG";
import tombarelImg from "../docImg/tombarel.PNG";
import webdevproImg from "../docImg/webdevpro.PNG";
import rsz_webdevpro from "../docImg/rsz_webdevpro.png";
import rsz_tombarelImg from "../docImg/rsz_tombarel.png";
import rsz_tcsImg from "../docImg/rsz_tcs.png";
import rsz_medicalmapImg from "../docImg/rsz_medicalmap.png";
function CollapaseFour() {
  return (
    <div
      id="collapseFour"
      className="collapse"
      aria-labelledby="headingFour"
      data-parent="#accordionExample"
    >
      <div className="card-body">
        <div className="bordure">
          {" "}
          <p>
            <a href="https://webdevpro.net/">
              <h2>Webdevpro: </h2>
            </a>
            • Développement d'un site de cours en ligne. <br />• Réalisation
            d’un moteur de recherche
            <ModalImage
              small={rsz_webdevpro}
              large={webdevproImg}
              alt="https://webdevpro.net"
            />
          </p>
          <p>
            <a href="http://tcs.alwaysdata.net">
              <h2>Tcs: </h2>
            </a>
            • Développement d'un module permettant l’affichage d’un bar chart
            dynamique . <br />• Réalisation d’un formulaire permettant la
            personnalisation du bar chart.
            <ModalImage
              small={rsz_tcsImg}
              large={tcsImg}
              alt="http://tcs.alwaysdata.net"
            />
          </p>
          <p>
            <a href="http://tombarel.fr">
              <h2>Tombarel: </h2>
            </a>
            • Développement d'un site pour le service d'urbanisme de la chambre
            des notaires des Bouches-du-Rhône <br />• Réalisation d’un espace
            administrateur.
            <ModalImage
              small={rsz_tombarelImg}
              large={tombarelImg}
              alt="http://tombarel.fr"
            />
          </p>
          <p>
            <a href="https://medicalmap.fr">
              <h2>Medical map: </h2>
            </a>
            • Développement d'un site intitulé Disponiblités personnel Médical{" "}
            <br />• Réalisation d’un calendrier dynamique( Ajout & Suppression
            d’évenements).
            <br />• Développement d’une recherche dynamique des adresses du
            monde.
            <ModalImage
              small={rsz_medicalmapImg}
              large={medicalmapImg}
              alt="https://medicalmap.fr"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default CollapaseFour;
