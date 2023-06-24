import { Link } from "react-router-dom";

import "../styles/summaries.css";
import "../styles/program.css";

export default function FullProgram() {
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
      <section className="summariesContent programContent">
        <h2>23, 24 et 25 septembre</h2>
        {/* <h3>À venir</h3> */}
        {/* <img
          src="/pictures/Djamila Lemasle - expo photo.jpg"
          alt="Djamila Lemasle"
        />
        <p>
          Durant les trois jours que dure le festival, les danseurs et les
          musiciens pourront découvrir le travail de Djamila Lemasle, danseuse,
          musicienne, photographe.
        </p>
        <p>
          « Le virus m’a piquée quand j’étais ado, en Bretagne, où je passais
          mes vacances pour gagner trois francs six sous. J’y ai découvert les
          festou-noz. Une fois que l’on a le virus, il ne vous lâche plus ! »
          Djamila Lemasle, travailleuse sociale à la ville, valse autant avec
          les mots qu’avec son corps : elle demeure intarissable sur le sujet.
          Fidèle depuis des années du Grand Bal de l’Europe, qui se déroule à
          Gennetines (Allier), son regard s’illumine quand elle évoque ce
          tourbillon joyeux qui unit des hommes et des femmes « de tous âges et
          de tous milieux. C’est multiculturel ! On pense souvent que les danses
          trad’, ça n’attire que les vieux, mais pas du tout ». Avec ses
          appareils, Djamila fixe depuis longtemps ces regards qui se croisent,
          ces corps qui dansent, ces rires, ces sourires, ces jours et ces nuits
          sans fin où seules comptent la musique et la danse. La vie quoi !
        </p>
        <h3>Le diaporama</h3>
        <img src="/pictures/diaporama.JPG" alt="L'édition 2019" />
        <p>
          Ca danse, ça virevolte, ça tourne, ça sort des dièses et des bémols.
          Et puis des sourires aux anges, des rires fous, des mains qui ne se
          lâchent plus, des mains qui enlacent des tailles… De la couleur, de la
          chaleur, du bonheur en images. C’est ça la photo : pour voir le
          meilleur de l’édition 2019. En boucle sur grand écran durant les trois
          jours du festival.
        </p> */}
      </section>
    </div>
  );
}
