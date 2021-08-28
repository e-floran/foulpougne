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
          <h3>
            21 heures. Le grand bal d'ouverture avec le duo Benoît Roblin -
            Christian Pacher
          </h3>
          <img
            src="/pictures/Duo-Roblin-Pacher_saison.png"
            alt="Le duo Roblin Pacher"
          />
          <p>
            Bal du Poitou et du Centre. Foulpougne Festival ouvre sa 4ème
            édition avec un duo exceptionnel&nbsp;! Benoît Roblin et Christian
            Pacher explorent avec brio et fougue les répertoires poitevins et
            berrichons. Ce beau duo tout frais tout chaud associe les riches et
            belles expériences musicales de Christian Pacher au violon, aux
            accordéons et au chant, et de Benoît Roblin à la vielle à roue et au
            chant. Le duo est inédit et à ne manquer sous aucun prétexte.{" "}
          </p>
        </div>
      </section>
    </div>
  );
}
