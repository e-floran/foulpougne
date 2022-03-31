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
        <h2>Vendredi 23 septembre</h2>
        <div className="homeDetailsContainer programContent">
          <h3>20h30 : double bal en ouverture !</h3>
          {/* <img
            src="/pictures/Duo-Roblin-Pacher_saison.png"
            alt="Le duo Roblin Pacher"
          /> */}
          <h4>20h30 : bal avec « Trio Traezh »</h4>
          <p>
            Voilà un trio qui nous arrive de Bretagne pour ouvrir le festival
            2022 ! « Trio Traezh », en breton, c’est la grève… Non, non, pas la
            grève à la mode syndicalo-râleuse, mais plutôt ce vaste espace
            maritime qui se découvre à marée basse, humide, riche, sablonneux,
            vivifiant quand le vent d’Ouest vient le caresser. C’est là, sur
            cette grève que l’on peut s’initier à toutes les danses bretonnes,
            bien sûr, mais pas que... Car Christophe (guitare), Philippe
            (accordéons) et Cécile (clarinette) proposent une palette musicale
            extrêmement variée, véritable voyage dans le temps et dans l’espace.
            Entre ridée et polka, entre scottish et mazurka. En avant ! Cécile
            SIX : clarinette, Camille GUITTET : violoncelle, Philippe SOUFFOIS :
            accordéon diatonique et chromatique, tin et low whistles
          </p>
          <p>Cécile SIX : clarinette,</p>
          <p>Christophe LEFÈVRE : guitare,</p>
          <p>
            Philippe SOUFFOIS : accordéon diatonique et chromatique, tin et low
            whistles
          </p>
          <h4>22h45 : bal solo avec Rémi Geffroy</h4>
          <img src="/pictures/Rémi Geffroy.jpg" alt="Rémi Geffroy" />
          <p>
            Rémy Geffroy ? Le p’tit gars qui monte, qui monte ? La vérité est
            peut-être là. Une vérité à toucher du doigt lors de ce bal du 23
            septembre qui va ouvrir « Foulpougne Festival » de belle manière.
            Accordéoniste mais aussi compositeur, curieux de tout, Rémi Geffroy
            se laisse porter par toutes sortes d’influences : les cultures
            traditionnelles, bien sûr, mais aussi le jazz, le pop-rock, la
            variété… Autant de sources d’inspiration qui transpirent des quatre
            albums sortis depuis 2012, à l’image d’« Odysseus », le tout
            dernier, sorti en 2021 après un an de travail. Aujourd’hui, Rémi
            Geffroy court les bals, les festivals, avec envie, avec gourmandise,
            avec passion. Cette fois, ce sera bal solo. L’artiste, en contact
            direct avec son public. Pour une bonne tranche de bonheur partagé.
          </p>
          <h4>Images, images…</h4>
          <p>
            Durant tout le festival, vous pourrez découvrir les meilleurs
            moments du festival 2021, grâce à la projection permanente de ces
            images sur grand écran, dans la salle des fêtes, au cœur même du
            festival.
          </p>
          <img src="/pictures/Jeff Dantin - expo photo.jpg" alt="Jeff Dantin" />
          <p>
            Et juste à côté, vous irez à la découverte des clichés étonnants,
            sensibles, drôles parfois, tendres, sensuels à l’occasion de
            Jean-François Dantin. « Jeff », pour les intimes, c’est ce baroudeur
            du clic-clac qui arpente les festivals trad’ depuis les années 80,
            et en rapporte des instantanés qui parlent, qui disent l’intime de
            la danse et de la musique traditionnelle. Discret, pas vu pas pris,
            Jeff Dantin ne danse pas. Ne sait même pas ce qui différencie un
            dièse d’un bémol. Mais Jeff fait partie de la famille. De la grande
            famille du trad’.
          </p>
        </div>
      </section>
    </div>
  );
}
