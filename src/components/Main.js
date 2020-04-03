import React from "react";
import CardHeader from "./CardHeader";
import Collapase from "./Collapase";
import CollapaseTwo from "./CollapaseTwo";
import CollapaseThree from "./CollapaseThree";
import CollapaseFour from "./CollapaseFour";

function Main() {
  return (
    <div id="content_container">
      <div className="block">
        <h1>Profile</h1>

        <blockquote className="profile_quote">
          <p>
            "There is no end to education. It is not that you read a book, pass
            an examination, and finish with education. The whole of life, from
            the moment you are born to the moment you die, is a process of
            learning."
          </p>
          <p>Jiddu Krishnamurti.</p>
          <span className="entypo-quote"></span>
        </blockquote>
      </div>
      <div className="block resp">
        <h2>A few words about me</h2>
        <p>
          Ma vision globale des projets me permet de déterminer les priorités
          afin de respecter les deadlines ainsi que la stratégie de
          l'entreprise.
          <br />
          Très sociable, je m'adapte aisément aux différentes personnalités.{" "}
        </p>
      </div>

      <section className="accordeon container">
        <div className="accordion" id="accordionExample">
          <div className="card">
            <CardHeader
              name={"Formations"}
              move="formation"
              content="#collapseOne"
              fontaws="fas fa-graduation-cap"
            />
            <Collapase />
          </div>

          <div className="card">
            {/* <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <h2 id="competence" className="fas fa-award"> Compétences</h2>
                                </button>
                            </h2>
                        </div> */}
            <CardHeader
              name="Compétences"
              move="competence"
              content="#collapseTwo"
              fontaws="fas fa-award"
            />
            <CollapaseTwo />
          </div>

          <div className="card">
            {/* <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                 <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                     <h2 id="experience" className="fas fa-plus"> Expériences</h2>
                                </button>
                            </h2>
                        </div> */}
            <CardHeader
              name="Expériences"
              move="experience"
              content="#collapseThree"
              fontaws="fas fa-plus"
            />
            <CollapaseThree />
          </div>

          <div className="card">
            {/* <div className="card-header" id="headingFour">
                            <h2 className="mb-0">
                                <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <h2 id="projet" className="fas fa-project-diagram"> Projets </h2>
                                </button>
                            </h2>
                        </div> */}
            <CardHeader
              name="Projets"
              move="projet"
              content="#collapseFour"
              fontaws="fas fa-project-diagram"
            />
            <CollapaseFour />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
