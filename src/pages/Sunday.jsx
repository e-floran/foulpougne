import { Link } from "react-router-dom";

import "../styles/home.css";

export default function Sunday() {
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
        <h2>Dimanche 24 septembre</h2>
        <div className="homeDetailsContainer programContent">
          <h4>14h30 : le bel après-midi avec « 21 Boutons »</h4>
          <img src="/pictures/21_boutons.jpg" alt="21 Boutons" />
          <p>
          Mais comment font-ils ? Lui en Catalogne, elle en Belgique. Réponse : ils font… Malgré la distance qui les sépare. Et ça dure depuis 2006 ! Et brillamment ! Tout là-haut, Marinette Bonnert. Tout en bas, Pere Romani. Deux accordéons diatoniques qui s’accordent à merveille. 17 ans de balades, de virées, de voyages avec 21 boutons d’un côté, 21 boutons de l’autre (c’est le minimum pour un diato !), beaucoup de kilomètres, de pays traversés, de musiciens rencontrés, de solides amitiés forgées… En ce bel après-midi dominical, ils sont là, à Gond-Pontouvre, pour refermer la page de « Foulpougne Festival » 2023. Ils vous attendent. 
          </p>
          <p>Avec Marinette Bonnert (accordéon diatonique) et Pere Romani (accordéon diatonique).</p>
        </div>
      </section>
    </div>
  );
}
