import { Link } from "react-router-dom";

import "../styles/home.css";

export default function Friday() {
  return (
    <div className="pageContainer">
      <section className="innerMenu">
        <ul>
          <Link to={"/fullProgram/friday/"} title="Le programme du vendredi">
            <li>Vendredi</li>
          </Link>
          <Link to={"/fullProgram/saturday/"} title="Le programme du samedi">
            <li>Samedi</li>
          </Link>
          <Link to={"/fullProgram/sunday/"} title="Le programme du dimanche">
            <li>Dimanche</li>
          </Link>
        </ul>
      </section>
      <section className="homeContent">
        <h2>Vendredi 24 septembre</h2>
        <div className="homeDetailsContainer programContent">
          <h3>21 heures. Le bal, avec « Castanha é Vinovèl »</h3>
          <img src="/pictures/Castanha.jpg" alt="Castanha é Vinovèl" />
          <p>
            « Castanha é Vinovèl », c’est un duo de « musicaïres » biterrois
            créé en 2007, qui puise ses chansons et ses airs à danser dans le
            répertoire traditionnel occitan. Vielle à roue, accordéon, chants et
            rythmes se combinent à merveille pour offrir un son dans le plus pur
            esprit du balèti populaire. « Castanha é Vinovel » incite et invite
            le public à la danse, toutes générations confondues. « Lo Castanha é
            lo Vinovel fan dançar lo monde » comme le disent si bien Jean-Brice
            Viétri et Alain Beurrier.
          </p>
        </div>
      </section>
    </div>
  );
}
