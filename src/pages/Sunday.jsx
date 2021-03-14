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
        <h2>Dimanche 26 septembre</h2>
        <div className="homeDetailsContainer programContent">
          <h3>15h-17h. Le p’tit bal avec le groupe « Ma petite »</h3>
          <img src="/pictures/Ma petite.jpeg" alt="Ma petite" />
          <p>
            Le répertoire de « Ma Petite » est issu du collectage engagé voici
            plusieurs années par Perrine Vrignault qui a retenu des textes et
            des musiques qui traitent de la condition de la femme. Cette
            thématique est au cœur de l’identité du groupe. « Ma Petite »
            propose une mise en danse de ces textes avec des sonorités
            nouvelles, tout en conservant la structure des danses
            traditionnelles. Les fins connaisseurs des bals folk y découvriront
            -ou redécouvriront- des morceaux traditionnels mais avec des
            sonorités modernes. “C’est un bal qui colle au corps pour le bonheur
            de tous, et comme on est obligé de rien, il peut s’écouter également
            les yeux fermés” décrit l’un de ces fins connaisseurs.{" "}
          </p>
          <p>
            Avec Perrine Vrignault (voix, accordéon), Maxime Dancre
            (percussions), Maxime Barbeau (accordéon diatonique) et Thomas
            Fossaert (saxophone).
          </p>
        </div>
      </section>
    </div>
  );
}
