import { Link } from "react-router-dom";

import "../styles/home.css";

export default function Saturday() {
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
        <h2>Samedi 24 septembre</h2>
        <div className="homeDetailsContainer programContent">
          <h4>10 heures : stage de danses débutants</h4>
          <img
            src="/pictures/Stage danses débutants.jpg"
            alt="danses débutants"
          />
          <p>
            Si vous avez deux pieds, deux jambes, deux bras, alors vous êtes
            parfaitement équipés pour venir participer à ce stage qui ne demande
            aucune disposition particulière. Si ce n’est un soupçon de curiosité
            pour découvrir les danses traditionnelles, toujours très festives.
            Avec les animateurs et les musiciens présents, vous irez à la
            rencontre des grands classiques des bals folk : scottish, en dro,
            polka, cercle circassien, bourrée, chapeloise…
          </p>
          <h4>10h-12h puis 14h-17h : stage de musique d’ensemble</h4>
          <img
            src="/pictures/Stage musique d'ensemble.JPG"
            alt="musique d'ensemble"
          />
          <p>
            Rémi Geffroy sera l’artisan de ce stage qui s’étendra sur toute la
            journée. Un stage ouvert à tous types d’instruments, pour aborder
            ensemble des répertoires connus… ou moins connus. Il risque d’y
            avoir de la surprise dans l’air !
          </p>
          <p>
            L’objectif étant de faire jouer ensemble un diato et une guitare, un
            violon et une clarinette, une harpe et un nickelharpa (liste
            d’instruments non exhaustive, bien sûr), il est nécessaire d’avoir
            « apprivoisé » son propre instrument depuis deux ou trois ans pour
            ne pas décrocher trop facilement.
          </p>
          <h4>12h : l’apéro !</h4>
          <p>
            Là aussi, c’est devenu une tradition : à midi pile, c’est l’heure de
            l’ouverture officielle du festival. Trois blablas, deux
            interventions, trois jeux de mots, et quelques kilos de sourires, et
            c’est le p’tit apéro qui va bien. Histoire de bien lancer les
            « hostilités » folk et trad’ !
          </p>
          <h4>14h-17h : stage de bourrées d’Auvergne</h4>
          <img
            src="/pictures/Stage bourrée d'Auvergne.webp"
            alt="bourrée d'Auvergne"
          />
          <p>
            Ce sont eux, les Auvergnats de « Komred » qui animeront le stage de
            danses de ce samedi. Sans surprise, il y sera question de… bourrée à
            3 temps. LA danse de chez eux, LA danse de leur prime jeunesse, LA
            danse de leurs aïeux. Mais attention, il y a bourrée et bourrée. Et
            les connaisseurs le savent : la bourrée peut se danser… en ligne, en
            carré, en rond, en quadrette, croisée, droite… avec deux danseurs,
            trois, quatre, six, huit… Sans oublier quelques formes bien
            spécifiques pas toujours connues. De quoi découvrir plein de choses
            tout au long de l’après-midi !
          </p>
          <h4>17h-19h30 : la scène Découverte</h4>
          <p>
            Chaque année, depuis son origine, « Foulpougne Festival » a à cœur
            de proposer un créneau aux groupes amateurs, qu’ils soient « du
            pays » ou de beaucoup plus loin. Groupes jeunes, encore méconnus, ou
            groupes plus anciens, la parole leur est donnée durant ce laps de
            temps qui se situe entre la fin des stages et l’heure de… l’apéro
            dinatoire ! Un espace gratuit, ouvert à tous, danseurs, visiteurs,
            curieux, en plein air (si la météo le permet) ou bien à l’abri si
            d’aventure Jupiter se mêle à la fête ! Un moment sympathique de
            découverte et de mise en pratique.
          </p>
          <h4>19h30-21h : tous au ravitaillement !</h4>
          <p>
            Vous avez préparé votre sandwich ? C’est parfait, c’est l’heure de
            le sortir de la musette. Vous n’avez rien prévu ? Pas grave, vous
            allez trouver sur place, sur l’esplanade de l’hôtel de ville, deux
            foodtrucks prêts à vous proposer pas mal de choses très
            appétissantes. Avec en prime, la buvette ambulante du festival à vos
            côtés.
          </p>
          <h3>Double bal (bis) !</h3>
          <h4>21h : bal avec « Komred »</h4>
          <img src="/pictures/Komred.jpg" alt="Komred" />
          <p>
            Depuis plus de quinze ans, ils tracent leur propre route, à force de
            bals, de concerts, d’enregistrements, toujours plus loin dans cette
            quête du son qui démange les pieds et chatouille le cœur. Komred,
            c’est cela : cinq musiciens qui ont grandi ensemble à
            Saint-Bonnet-près-Riom, au « Gamounet », chez les « Brayauds ». Là,
            dans ce creuset auvergnat, au cœur de ce Puy-de-Dôme si attachant,
            ils y ont appris les danses et les musiques populaires de « chez
            eux », d’Auvergne. Leurs racines. Depuis 2003, ils font sonner leurs
            bourrées partout en France et même parfois plus loin… De jolies
            mélodies et du beau son pour un bal auvergnat sauvage et
            chaleureux !
          </p>
          <p>Antoine COGNET : banjo, guitare,</p>
          <p>Clémence COGNET : violon, voix,</p>
          <p>Cyril ETIENNE : clarinette,</p>
          <p>Mathilde KARVAIX : clarinette, voix,</p>
          <p>Loïc ETIENNE : accordéons diatoniques</p>
          <h4>23h15 : bal avec les « Tralala Lovers »</h4>
          <img src="/pictures/Tralala Lovers.jpg" alt="Tralala Lovers" />
          <p>
            Dire que les Tralala Lovers insufflent une énergie détonante dans la
            grande galerie des musiques trad à danser relève de l’euphémisme.
            Tellement les deux compères, Vincent Gaffet et Diego Meymarian,
            chanteurs et multi-instrumentistes, proposent un bal euphorisant qui
            mêle sans retenue des créations originales et une réinterprétation
            très inventive du répertoire populaire. Sans sourciller, les deux
            musiciens passent joyeusement de l’accordéon au tambourin, du violon
            au banjo pour livrer de petites épopées ciselées, sautillantes et
            romanesques qui ne s’inscrivent ni dans le passé, ni dans une mode
            particulière d’un retour au trad. Un univers pop et acoustique, des
            paroles malicieuses sur des airs que l’on reprend bien vite. De
            scottish en polka, de valse en branle de Noirmoutier, le bal Tralala
            constitue un véritable voyage folk qui mène aux quatre coins de
            l’Europe. Attention : danseurs confirmés ou débutants pathétiques,
            inutile de résister à l’appel du parquet, la contagieuse allégresse
            de Diego et Vincent est comme le chant des sirènes !
          </p>
          <p>Vincent GAFFET : chant, violon, banjo, guimbarde</p>
          <p>
            Diego MEYMARIAN : chant, accordéon, componium, guimbarde,
            percussions
          </p>
        </div>
      </section>
    </div>
  );
}
