import { Link } from "react-router-dom";

import "../styles/header.css";

export default function Header() {
  return (
    <header>
      <Link to="/" title="Accueil">
        <img
          src="../../foulpougne-logo.jpg"
          alt="Foulpougne festival"
          className="logoImg"
        />
      </Link>
      <nav>
        <ul>
          <Link to="/festival/" title="Présentation de Foulpougne Festival">
            <li>Le Festival</li>
          </Link>
          <Link
            to="/fullProgram/friday/"
            title="Le programme de la prochaine édition"
          >
            <li>Programme</li>
          </Link>
          <Link
            to="/informations/"
            title="Tous les tarifs et comment se rendre au festival"
          >
            <li>Tarifs et infos pratiques</li>
          </Link>
          <Link to="/summaries/" title="Résumés de nos éditions précédentes">
            <li>Historique</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
