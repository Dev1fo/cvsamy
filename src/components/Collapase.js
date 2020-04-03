import React from "react";

function Collapase() {
  return (
    <div
      id="collapseOne"
      className="collapse"
      aria-labelledby="headingOne"
      data-parent="#accordionExample"
    >
      <div className="card-body">
        <div className="bordure">
          <p>
            {" "}
            <strong>2019</strong>: Formation « Développeur Front-End » à Doranco
            HTML5, CSS3, JAVASCRIPT, MYSQL, PHP, JQUERY, Bootstrap, AdobeXD
            Photoshop, Angular 8, MongoDB, Méthode agile
          </p>
          <p>
            {" "}
            <strong>2019</strong>: Formation « Développeur Front-End » au Greta
            Boulogne-Billancourt, NodeJs, React, JAVASCRIPT, MYSQL, PHP,JQUERY,
            Bootstrap, Gimp
          </p>
          <p>
            {" "}
            <strong>2017</strong>: Licence Informatique à Université de
            Cergy-Pontoise
          </p>
          <p>
            {" "}
            <strong>2011</strong>: Polytech Paris Sud ( Ecole préparatoire pour
            école d’ingénieur) Option : Développement Web
          </p>
          <p>
            {" "}
            <strong>Langues</strong>: Anglais Courant.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Collapase;
