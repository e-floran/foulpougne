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
        <h2>Dimanche 22 septembre</h2>
        <div className="homeDetailsContainer programContent">
          <h4>14h30 : bal folk avec Novar</h4>
          <img src="/pictures/2024_novar.jpg" alt="Novar" />
          <p>
          Novar… comme novateur. Un peu de trad, un peu d'électro. La clarté de la vielle à roue de Thierry Nouat en contraste avec l'obscurité des cornemuses de Toon Van Mierlo. Solidement soutenu par le clavier de Jeroen Geerinck et l'accordéon d'Aurélien Claranbaux, qui percute comme un coup de poing dans le noir... Un groupe de musiciens trad’ reconnus pour leur son "néo". Novar, comme un univers qui émerge des profondeurs de la Terre.
          </p>
          <p>Avec Toon Van Mierlo (accordéon diatonique, cornemuse), Jeroen Geerinck (mandole, clavier), Aurélien Claranbaux (accordéon chromatique bisonore), Thierry Nouat (vielle à roue).</p>
          <p>
          Salle des fêtes Joséphine Baker
          </p>
        </div>
      </section>
    </div>
  );
}
